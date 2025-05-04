---
title: 'Styling with Tailwind CSS'
date: '2024-02-10'
description: 'How this blog leverages Tailwind CSS for utility-first styling.'
---

This blog utilizes **Tailwind CSS**, a utility-first CSS framework, for styling. Instead of writing custom CSS rules, we apply pre-defined utility classes directly in the HTML markup.

## Why Tailwind?

*   **Rapid Development:** Quickly style elements without leaving your HTML.
*   **Consistency:** Enforces a consistent design system (spacing, colors, typography).
*   **Customizable:** Highly configurable via the `tailwind.config.ts` file.
*   **Performance:** Purges unused styles in production, resulting in small CSS bundles.

## Example

Here's how you might style a button using Tailwind classes:

```html
<button class="bg-accent text-accent-foreground font-semibold py-2 px-4 rounded hover:bg-accent/90 transition-colors">
  Click Me
</button>
```

This applies:
*   A background color (`bg-accent`) defined in our theme.
*   Text color (`text-accent-foreground`).
*   Font weight (`font-semibold`).
*   Padding (`py-2 px-4`).
*   Rounded corners (`rounded`).
*   A hover effect (`hover:bg-accent/90`).
*   A smooth color transition (`transition-colors`).

While it might look verbose initially, it becomes very efficient once you're familiar with the utility classes. The styles for markdown content itself are handled via the `@tailwindcss/typography` plugin (or custom global styles as done in `globals.css` for this project).
