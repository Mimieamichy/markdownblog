'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import type { PostData } from '@/lib/posts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const POSTS_PER_PAGE = 10;

interface PostListProps {
  allPosts: PostData[];
}

export default function PostList({ allPosts }: PostListProps) {
  const [visiblePostsCount, setVisiblePostsCount] = useState(POSTS_PER_PAGE);

  // No need for useMemo for slicing, directly compute visible posts
  const visiblePosts = allPosts.slice(0, visiblePostsCount);
  const hasMorePosts = visiblePostsCount < allPosts.length;

  const loadMorePosts = () => {
    setVisiblePostsCount(prevCount => Math.min(prevCount + POSTS_PER_PAGE, allPosts.length));
  };

  return (
    <section>
      {visiblePosts.length > 0 ? (
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visiblePosts.map(({ id, date, title, description }) => (
            <li key={id} className="flex">
              <Card className="flex flex-col w-full shadow-sm hover:shadow-md transition-shadow duration-200">
                 <CardHeader>
                  <Link href={`/posts/${id}`} className="block group">
                      <CardTitle className="text-xl font-semibold mb-1 group-hover:text-accent transition-colors line-clamp-2">
                        {title}
                      </CardTitle>
                   </Link>
                   <CardDescription className="text-xs text-muted-foreground">
                    {/* Ensure date is valid before formatting */}
                    {date ? format(new Date(date), 'MMMM d, yyyy') : 'No date'}
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
         // Handle case where even initially fetched posts are empty
        <p className="text-center text-muted-foreground">No posts found.</p>
      )}

      {hasMorePosts && (
        <div className="text-center mt-8">
          <Button onClick={loadMorePosts} variant="outline">
            See More Posts
          </Button>
        </div>
      )}
    </section>
  );
}
