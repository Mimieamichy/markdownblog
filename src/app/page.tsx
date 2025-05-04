import Link from 'next/link';
import { getSortedPostsData, type PostData } from '@/lib/posts';
import { format } from 'date-fns';
import type { Metadata } from 'next';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

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
        {allPostsData.length > 0 ? (
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPostsData.map(({ id, date, title, description }) => (
              <li key={id} className="flex">
                <Card className="flex flex-col w-full shadow-sm hover:shadow-md transition-shadow duration-200">
                   <CardHeader>
                    <Link href={`/posts/${id}`} className="block group">
                        <CardTitle className="text-xl font-semibold mb-1 group-hover:text-accent transition-colors line-clamp-2">
                          {title}
                        </CardTitle>
                     </Link>
                     <CardDescription className="text-xs text-muted-foreground">
                      {format(new Date(date), 'MMMM d, yyyy')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                     <Link href={`/posts/${id}`} className="block group">
                        <p className="text-sm text-foreground/80 line-clamp-3">
                        {description || 'Click to read more...'}
                        </p>
                    </Link>
                  </CardContent>
                  {/* Optional CardFooter if needed */}
                </Card>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center text-muted-foreground">No posts found.</p>
        )}
      </section>
    </div>
  );
}
