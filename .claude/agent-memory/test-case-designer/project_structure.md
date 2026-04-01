---
name: Project Structure
description: Conventions for the algorithms repo — folder layout, test file style, toolchain
type: project
---

Each problem lives in its own folder (e.g., palindrome/, palindrome-II/, duplicate-chars/). Test files are named `<problem>.test.ts` and import the named export from `./palindrome` (or equivalent). The test style is:

```typescript
import { fnName } from './module';

describe('fnName', () => {
  test('returns X for Y', () => {
    expect(fnName(input)).toBe(expected);
  });
});
```

Toolchain: Jest 30, ts-jest, TypeScript 5, ESM (`"type": "module"` in package.json). No solution code goes in test files.

**Why:** The user asked test cases to follow the existing project style exactly.
**How to apply:** Always read at least one existing test file before writing a new one to confirm the current conventions have not changed.
