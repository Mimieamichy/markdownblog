// This is now a Server Component
import { getSortedPostsData, type PostData } from '@/lib/posts';
import type { Metadata } from 'next';
import PostList from '@/components/post-list'; // Import the new client component

// Server-side metadata generation
export const metadata: Metadata = {
  title: 'Markdown Blog | Home',
  description: 'Welcome to a simple blog built with Next.js and Markdown.',
};

export default function Home() {
  // Fetch all posts server-side
  // No need for useMemo here as it runs only once per request/build on the server
  const allPostsData: PostData[] = getSortedPostsData();

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-12">Blog Posts</h1>
      {/* Pass the fetched data to the client component */}
      <PostList allPosts={allPostsData} />
    </div>
  );
}
