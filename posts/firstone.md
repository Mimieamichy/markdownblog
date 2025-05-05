---
title: 'Introduction to React Hooks'
date: '2024-03-01'
description: 'React Hooks let you use state and other features without writing a class.'
---

React Hooks simplify state and lifecycle management in functional components. They were introduced in React 16.8.

## Common Hooks

* **useState:** Add local state to functional components.  
* **useEffect:** Perform side effects (e.g., data fetching).  
* **useContext:** Access context without wrapper components.  

## Example

```js
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
