# React useEffect Infinite Loop Bug
This repository demonstrates a common React bug involving an infinite loop within the `useEffect` hook. The bug arises from incorrectly updating state within the `useEffect` without proper dependency management.

## Bug Description
The `MyComponent` function uses the `useEffect` hook to update the `count` state. However, the update logic (`setCount(count + 1)`) is incorrect because it leads to an infinite loop: 

1. The component renders initially with `count = 0`.
2. The `useEffect` hook runs, updating `count` to `1`.
3. The component re-renders with `count = 1`.
4. The `useEffect` hook runs again, updating `count` to `2`, and so on.

This leads to an infinite loop because the component continuously re-renders.

## Solution
The solution is to add proper dependency management to the `useEffect` hook to avoid unnecessary state updates.