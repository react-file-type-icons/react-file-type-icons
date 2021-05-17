# React File Type Icons

This package helps you in rendering icon on the basis of file-type.

[![npm][npm-image]][npm-url]

[npm-image]: https://img.shields.io/npm/v/react-file-type-icons.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/react-file-type-icons

## Installation

```bash
npm install react-file-type-icons --save
```

How to use it

```jsx
import FTIcon from "react-file-type-icons";

const icon = () => {
  return <FTIcon fileName="foo.png" />;
};
```

## Features

- Renders file-type-icon either by passing full file name ( `fileName` ) or by passing file extension ( `fileType` )
- Choose which type of Icon you want to render either Mono Color or Multi Color
- Change the color of Icon of type `monoColor`

# Properties & Configuration

| Property    | Default              | Notes                                                                         |
| ----------- | -------------------- | ----------------------------------------------------------------------------- |
| `fileName`  | `undefined`          | Accepts full file name (if using this property then ignore `fileType`)        |
| `fileType`  | `undefined`          | Accepts file-type (extension) (if using this property then ignore `fileName`) |
| `colorType` | `monoColor`          | `monoColor/multiColor` choose according to type of icon you want to render    |
| `color`     | `undefined`(inherit) | Only for icons of colorType `monoColor`                                       |
| `size`      | `1em`                |                                                                               |
| `className` | `undefined`          |                                                                               |

## License

MIT
