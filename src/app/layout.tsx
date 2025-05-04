import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Markdown Blog',
  description: 'A simple blog built with Next.js and Markdown.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased flex flex-col',
          inter.variable
        )}
      >
        <header className="border-b">
          <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
            <Link href="/" className="text-2xl font-bold text-primary">
              Markdown Blog
            </Link>
            {/* Future navigation can go here */}
          </div>
        </header>
        <main className="flex-grow container mx-auto px-4 py-8 md:px-6 md:py-12">
          {children}
        </main>
        <footer className="mt-auto border-t py-4 text-center text-muted-foreground text-sm">
           Built with Next.js & Markdown
        </footer>
        <Toaster />
      </body>
    </html>
  );
}
