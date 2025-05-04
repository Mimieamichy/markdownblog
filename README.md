# Markdown Blog

This is a simple blog application built with Next.js (App Router), TypeScript, and Tailwind CSS. Blog posts are written in Markdown files stored in the `posts` directory.

## Features

- **Markdown-Based:** Content is managed through simple `.md` files.
- **Static Site Generation (SSG):** Posts are pre-rendered at build time using `generateStaticParams` and fetched using server components.
- **Dynamic Routing:** Each Markdown file automatically becomes a blog post page (e.g., `posts/my-first-post.md` becomes `/posts/my-first-post`).
- **SEO Friendly:** Basic meta tags (title, description) are included for each page.
- **Minimalist Design:** Styled with Tailwind CSS using a clean, readable layout.
- **Responsive:** Adapts to different screen sizes.

## Getting Started

1.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    ```

2.  **Run the Development Server:**
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    ```
    Open [http://localhost:9002](http://localhost:9002) (or your configured port) in your browser.

3.  **Create New Posts:**
    - Add new `.md` files to the `posts` directory.
    - Include front matter at the top of each file (title, date, optional description):
      ```markdown
      ---
      title: 'Your Post Title'
      date: 'YYYY-MM-DD'
      description: 'A short summary of your post.'
      ---

      Your Markdown content goes here...
      ```

## Building for Production

```bash
npm run build
npm run start
```

## Project Structure

-   `src/app/`: Contains the main application pages and layouts (App Router).
    -   `page.tsx`: The homepage listing blog posts.
    -   `layout.tsx`: The root layout for the application.
    -   `posts/[id]/page.tsx`: The dynamic route page for individual blog posts.
    -   `globals.css`: Global styles and Tailwind directives, including Markdown styling.
-   `src/lib/`: Contains utility functions.
    -   `posts.ts`: Functions for reading and processing Markdown post files.
    -   `utils.ts`: General utility functions (like `cn` for class names).
-   `src/components/`: Reusable UI components (mostly from shadcn/ui).
-   `posts/`: Directory containing the Markdown blog post files.
-   `public/`: Static assets.
-   `tailwind.config.ts`: Tailwind CSS configuration.
-   `next.config.ts`: Next.js configuration.
