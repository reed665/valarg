# valarg

Simple argument validation inspired by [ow](https://github.com/sindresorhus/ow) and [Vue prop validation](https://vuejs.org/v2/guide/components-props.html#Prop-Validation)

## Installation

```bash
npm install valarg
```

## Usage

```javascript
const sum = (x, y) => {
    valarg(x, { required: true, type: Number })
    valarg(y, { required: true, type: Number })

    return x + y;
}

sum(1, 'foo')
```

```
Error: Argument type Number expected but String type received
```
