# React Typewriter Library

A lightweight React component that simulates a typewriter effect on any text string, with optional looping.

---

## Installation

Install via npm:

```bash
npm install react-typewriter-lib
```

Or using Yarn:

```bash
yarn add react-typewriter-lib
```

> Ensure you have **React** and **ReactDOM** installed as this library declares them as `peerDependencies`.

---

## Usage

Import the `Typewriter` component and pass the desired `text` prop. Optionally customize the typing `speed` and enable `loop` mode to restart the animation when complete.

```tsx
import React from 'react';
import { Typewriter } from 'react-typewriter-lib';

export default function App() {
  return (
    <div>
      <h1>
        <Typewriter text="Hello, world!" speed={100} loop />
      </h1>
    </div>
  );
}
```

### Props

| Name    | Type      | Default | Description                                         |
| ------- | --------- | ------- | --------------------------------------------------- |
| `text`  | `string`  | —       | The string to be typed out.                         |
| `speed` | `number`  | `100`   | Delay in milliseconds between each character.       |
| `loop`  | `boolean` | `false` | If `true`, restarts the typing animation on finish. |

---

## Configuration

No additional configuration is required. This library is built and bundled with Vite in library mode, supporting both **ESM** and **CommonJS** formats.

### Example with Custom Speed

```tsx
<Typewriter text="Fast typing..." speed={50} />
```

### Example without Looping

```tsx
<Typewriter text="One-shot typing." />
```

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request on [GitHub](https://github.com/SofRahmani/react-typewriter-lib).

---

## License

MIT © Sofiane Rahmani 2025
