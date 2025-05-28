# React Typewriter Library

A lightweight React library that simulates a typewriter effect on any text string, with optional looping.

---

## Installation

Install the library via npm:

```bash
npm install react-typewriter-lib
```

Or with Yarn:

```bash
yarn add react-typewriter-lib
```

> This library declares **React** and **ReactDOM** as `peerDependencies`, so ensure they are installed in your project.

---

## Usage

Import the `Typewriter` component and pass the `text` prop. You can also customize the typing `speed`, set a `pause` between typing and deleting, and enable `loop` to repeat the animation.

```tsx
import React from 'react';
import { Typewriter } from 'react-typewriter-lib';

export default function App() {
  return (
    <div>
      <h1>
        <Typewriter
          text="Hello, world!"
          speed={100}    // Delay in ms between each character
          pause={1500}   // Pause in ms between typing and deleting
          loop           // Enables looping (type → pause → delete → pause → ...)
        />
      </h1>
    </div>
  );
}
```

### Props

| Name    | Type      | Default | Description                                                                           |
| ------- | --------- | ------- | ------------------------------------------------------------------------------------- |
| `text`  | `string`  | —       | The string to be typed out.                                                          |
| `speed` | `number`  | `100`   | Delay in milliseconds between each character typed or deleted.                        |
| `pause` | `number`  | `1000`  | Duration of the pause (ms) between the end of typing and the start of deleting, and vice versa. |
| `loop`  | `boolean` | `false` | If `true`, the text types, pauses, deletes, pauses, then repeats in a loop.          |

---

## Configuration

No additional configuration is required. This library is built and bundled with Vite in library mode, supporting both **ESM** and **CommonJS** formats.

### Examples

- **Fast typing**
  ```tsx
  <Typewriter text="Fast typing..." speed={50} />
  ```
- **One-time typing**
  ```tsx
  <Typewriter text="One-shot typing." />
  ```

---

## Styling and Accessibility

- The component renders a `<span>`, so you can wrap or style it as needed (CSS, Tailwind, styled-components, etc.).  
- For accessibility, consider adding an `aria-label` if the animated text conveys critical information.

---

## Contributing

Contributions, bug reports, and feature requests are welcome! Please open an issue or submit a pull request on [GitHub](https://github.com/SofRahmani/react-typewriter-lib).

---

## License

MIT © Sofiane Rahmani 2025
