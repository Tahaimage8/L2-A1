# Type Aliases vs. Interfaces in TypeScript: Which One Should You Pick?

## Introduction
When I first started learning TypeScript, I was super confused about one specific thing: should I use a `type` alias or an `interface`? At first glance, they seem to do the exact same thing—defining the shape of our data. But as I dug deeper, I realized they actually have some pretty big differences under the hood. 

## Core Differences
Here is the main thing to remember: **Interfaces** are strictly made for objects. They are awesome if you want to build object structures because they are highly extensible. For example, if you declare the same interface twice, TypeScript is smart enough to automatically merge them together (a cool feature called "declaration merging").

On the flip side, **Type Aliases** are the flexible all-rounders. Yes, they can define objects just like interfaces, but they can also do things interfaces simply can't. If you need to combine types using unions (like saying a value can be a `string` OR a `number`) or use primitive types, you absolutely have to use a `type` alias.

## Code Example
```typescript
// Interface is great for defining object shapes
interface User {
  name: string;
  age: number;
}

// Type alias is required for union types
type ID = string | number;