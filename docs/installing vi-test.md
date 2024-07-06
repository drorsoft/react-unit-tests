# Installing Vitest

```bash
npm install -D vitest
```
## Package.json command
add this to your package.json

```json
{
  "scripts": {
    "test": "vitest --run" 
  }
}
```

The run option preforms a [single run without watch mode](https://vitest.dev/guide/cli.html#vitest-run).

## Vitest config file

add a `vitest.config.js` file to the root of your project

```js
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        includeSource: ['src/**/*.{js,jsx,ts,tsx}'],
        exclude: ['e2e', 'node_modules', 'dist', '.idea', '.git', '.cache'],
    },
});
```

## Run tests

```bash
npm test
```
 
