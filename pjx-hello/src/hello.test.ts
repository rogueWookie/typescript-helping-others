// src/hello.test.ts
import { hello } from './hello';

test('returns "Hello, World!"', () => {
  expect(hello()).toBe('Hello, World!');
});

