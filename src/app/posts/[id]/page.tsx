import { getAllPostIds, getPostData, type PostDataWithContent } from '@/lib/posts';
import { format } from 'date-fns';
import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';

type Props = {
  params: { id: string };
};

// Generate Metadata for SEO
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id;
  let postData: PostDataWithContent | null = null;

  try {
    postData = await getPostData(id);
  } catch (error) {
     // If post not found, let it fall through to the page component to handle 404
  }

  if (!postData) {
    return {
      title: 'Post Not Found | Markdown Blog',
      description: 'The requested blog post could not be found.',
    };
  }

  // Optionally resolve parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${postData.title} | Markdown Blog`,
    description: postData.description || `Read the blog post titled "${postData.title}"`,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

// Generate Static Paths
export async function generateStaticParams() {
  const paths = getAllPostIds();
  // paths will be like [{ id: 'ssg-ssr' }, { id: 'pre-rendering' }]
  return paths;
}


export default async function PostPage({ params }: Props) {
  let postData: PostDataWithContent | null = null;

  try {
    postData = await getPostData(params.id);
  } catch (error) {
    // Handle cases where getPostData throws an error (e.g., file not found)
    notFound(); // Trigger Next.js 404 page
  }

  if (!postData) {
    notFound(); // Should be caught by try/catch, but good safety measure
  }

  return (
    <article className="max-w-3xl mx-auto">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-2">{postData.title}</h1>
        <div className="text-sm text-muted-foreground">
          Published on {format(new Date(postData.date), 'MMMM d, yyyy')}
        </div>
      </header>
      <div
        className="prose prose-lg dark:prose-invert max-w-none markdown" // Add .markdown class
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </article>
  );
}
