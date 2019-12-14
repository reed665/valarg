# valarg

Simple argument validation inspired by [ow](https://github.com/sindresorhus/ow) and [Vue prop validation](https://vuejs.org/v2/guide/components-props.html#Prop-Validation)

## Installation

```bash
npm install valarg
```

## Usage

```javascript
const valarg = require('valarg');

const divide = (x, y) => {
    valarg(x, { required: true, type: Number })
    valarg(y, { required: true, type: Number, validator: val => val !== 0 })

    return x / y;
}

divide(42, 0)
```

```
Error: Invalid argument value
```
