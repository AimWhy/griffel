# Griffel for React

## Install

```bash
npm install @griffel/react
# or
yarn add @griffel/react
```

## API

### `makeStyles()`

Is used to define styles, returns a React hook that should be called inside a component:

```tsx
import { makeStyles } from '@griffel/react';

const useClasses = makeStyles({
  button: { color: 'red' },
  icon: { paddingLeft: '5px' },
});

function Component() {
  const classes = useClasses();

  return (
    <div>
      <button className={classes.button} />
      <span className={classes.icon} />
    </div>
  );
}
```

### `mergeClasses()`

> 💡 **It is not possible to simply concatenate classes returned by `useClasses()`.**

There are cases where you need to merge classes from multiple `useClasses` calls.

To properly merge the classes, you need to use `mergeClasses()` function, which performs merge and deduplication of atomic classes generated by `makeStyles()`.

```tsx
import { mergeClasses, makeStyles } from '@griffel/react';

const useClasses = makeStyles({
  blueBold: {
    color: 'blue',
    fontWeight: 'bold',
  },
  red: {
    color: 'red',
  },
});

function Component() {
  const classes = useClasses();

  const firstClassName = mergeClasses(classes.blueBold, classes.red); // { color: 'red', fontWeight: 'bold' }
  const secondClassName = mergeClasses(classes.red, classes.blueBold); // { color: 'blue', fontWeight: 'bold' }

  return (
    <>
      <div className={firstClassName} />
      <div className={secondClassName} />
    </>
  );
}
```

## `makeStaticStyles()`

Creates styles attached to a global selector. Styles can be defined via objects:

```tsx
import { makeStaticStyles } from '@griffel/react';

const useStaticStyles = makeStaticStyles({
  '@font-face': {
    fontFamily: 'Open Sans',
    src: `url("/fonts/OpenSans-Regular-webfont.woff2") format("woff2"),
         url("/fonts/OpenSans-Regular-webfont.woff") format("woff")`,
  },
  body: {
    background: 'red',
  },

  /**
   * ⚠️ nested and pseudo selectors are not supported for this scenario via nesting
   *
   * Not supported:
   * .some {
   *   .class { ... },
   *   ':hover': { ... }
   * }
   *
   * Supported:
   * '.some.class': { ... }
   * '.some.class:hover': { ... }
   */
});

function App() {
  useStaticStyles();

  return <div />;
}
```

Or with string & arrays of strings/objects:

```tsx
import { makeStaticStyles } from '@griffel/react';

const useStaticStyles1 = makeStaticStyles('body { background: red; } .foo { color: green; }');
const useStaticStyles2 = makeStaticStyles([
  {
    '@font-face': {
      fontFamily: 'My Font',
      src: `url(my_font.woff)`,
    },
  },
  'html { line-height: 20px; }',
]);

function App() {
  useStaticStyles1();
  useStaticStyles2();

  return <div />;
}
```

## Features support

### 📃 pseudo & class selectors, at-rules, global styles

`makeStyles()` supports pseudo, class selectors and at-rules.

```ts
import { makeStyles } from '@griffel/react';

const useClasses = makeStyles({
  root: {
    ':active': { color: 'pink' },
    ':hover': { color: 'blue' },
    // :link, :focus, etc.

    '.foo': { color: 'black' },
    ':nth-child(2n)': { backgroundColor: '#fafafa' },

    '@media screen and (max-width: 992px)': { color: 'orange' },
    '@supports (display: grid)': { color: 'red' },
  },
});
```

Another useful feature is `:global()` selector, it allows connecting local styles with global selectors.

```ts
import { makeStyles } from '@griffel/react';

const useClasses = makeStyles({
  root: {
    ':global(html[data-whatintent="mouse"])': { backgroundColor: 'yellow' },
    // outputs: html[data-whatintent="mouse"] .abcd { background-color: yellow }
  },
});
```

### 🎞 `keyframes` (animations)

`keyframes` are supported via `animationName` property that can be defined as an object or an array of objects:

```tsx
import { makeStyles } from '@griffel/react';

const useClasses = makeStyles({
  root: {
    animationIterationCount: 'infinite',
    animationDuration: '3s',
    animationName: {
      from: { transform: 'rotate(0deg)' },
      to: { transform: 'rotate(360deg)' },
    },
  },
  array: {
    animationIterationCount: 'infinite',
    animationDuration: '3s',
    animationName: [
      {
        from: { transform: 'rotate(0deg)' },
        to: { transform: 'rotate(360deg)' },
      },
      {
        from: { height: '100px' },
        to: { height: '200px' },
      },
    ],
  },
});
```