import Link from 'next/link';
import { getSortedPostsData, type PostData } from '@/lib/posts';
import { format } from 'date-fns';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Markdown Blog | Home',
  description: 'Welcome to a simple blog built with Next.js and Markdown.',
};

export default function Home() {
  const allPostsData: PostData[] = getSortedPostsData();

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-center mb-12">Blog Posts</h1>
      <section>
        <ul className="space-y-6">
          {allPostsData.map(({ id, date, title, description }) => (
            <li key={id} className="border p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <Link href={`/posts/${id}`} className="block group">
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {title}
                </h2>
                <div className="text-sm text-muted-foreground mb-3">
                  {format(new Date(date), 'MMMM d, yyyy')}
                </div>
                <p className="text-foreground/80">
                  {description || 'Read more...'}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
