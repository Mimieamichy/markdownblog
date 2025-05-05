---
title: 'Introduction to TypeScript'
date: '2024-04-20'
description: 'Why developers are turning to TypeScript for safer and scalable JavaScript.'
---

TypeScript is a statically typed superset of JavaScript developed by Microsoft. It adds optional type annotations, making code more predictable and easier to debug.

## Why Use TypeScript?

* **Type Safety:** Catches errors during development instead of at runtime.
* **Better Tooling:** Provides autocompletion, navigation, and refactoring in editors.
* **Scalability:** Makes large codebases easier to manage.
* **Modern JavaScript:** Supports latest features with backwards compatibility.

## Example

Here’s a simple TypeScript function:

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}

console.log(greet('Alice'));
// Output: Hello, Alice
