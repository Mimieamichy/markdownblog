---
title: 'Working with REST APIs in JavaScript'
date: '2024-02-15'
description: 'Learn how to interact with RESTful APIs using fetch in JavaScript.'
---

Fetching data from external APIs is a common task in web development. JavaScript’s built-in `fetch` API makes this simple and promise-based.

## Why use fetch?

*   **Modern & Native:** No need for external libraries.
*   **Promise-based:** Cleaner syntax using `async/await`.
*   **Flexible:** Supports GET, POST, PUT, DELETE, and more.

## Example

Here's how to fetch data from an API:

```js
async function getPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  console.log(data);
}
getPosts();
