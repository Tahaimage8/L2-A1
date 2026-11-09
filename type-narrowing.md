# Understanding Type Narrowing in TypeScript

## Introduction
TypeScript is super smart, but I've noticed it sometimes needs a little push to understand exactly what kind of data it's dealing with. Whenever I have a variable that can be more than one thing (like a Union Type), I use a technique called "Type Narrowing." It basically helps me filter down a broad type into one specific type, which keeps my code completely type-safe and saves me from those annoying runtime crashes!

## Practical Examples of Type Narrowing

**1. Using `typeof`**
The easiest and most common trick I use is the `typeof` operator. It works perfectly when I need to check basic primitive types like strings, numbers, or booleans. 
```typescript
function printID(id: string | number) {
  if (typeof id === "string") {

    console.log(id.toUpperCase()); 
  } else {

    console.log(id * 10); 
  }
}