# TypeScript Type Error: Adding Number and String

This repository demonstrates a common TypeScript error: attempting to add a number and a string. The `bug.ts` file contains the erroneous code, while `bugSolution.ts` provides a corrected version using type guards.

## Bug

The `add` function is declared to accept two numbers and return their sum. However, in the code, we try to add a number (1) and a string ('2'). This results in a TypeError during compilation or runtime because TypeScript enforces type safety.

## Solution

The solution involves either performing explicit type checking (type guard) or using a type assertion to assure the compiler that the string can safely be converted to a number.