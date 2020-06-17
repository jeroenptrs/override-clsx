# override-clsx

Small layer on top of [clsx](https://www.npmjs.com/package/clsx) to allow for generic overrides. This improves intellisense for custom re-used class names.

```bash
npm i override-clsx
yarn add override-clsx
```

```ts
import clsx, { createOverride } from "override-clsx";

type MyClasses = "a" | "b" | "c";

// ad-hoc override
clsx<MyClasses>("a", "b");
clsx<MyClasses>(true && "a");
clsx<MyClasses>(0 && "a");
clsx<MyClasses>({ a: true });

// exportable override
const classNames = createOverride<MyClasses>();
classNames<MyClasses>("a", "b");
classNames<MyClasses>(true && "a");
classNames<MyClasses>(0 && "a");
classNames<MyClasses>({ a: true });
```

This project was bootstrapped with [TSDX](https://github.com/jaredpalmer/tsdx).

## Contribute

Below is a list of commands you will probably find useful.

### `npm start` or `yarn start`

Runs the project in development/watch mode. Your project will be rebuilt upon changes. TSDX has a special logger for you convenience. Error messages are pretty printed and formatted for compatibility VS Code's Problems tab. Your library will be rebuilt if you make edits.

### `npm run build` or `yarn build`

Bundles the package to the `dist` folder. The package is optimized and bundled with Rollup into multiple formats (CommonJS, UMD, and ES Module).

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode. By default, runs tests related to files changed since the last commit.
