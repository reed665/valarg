const valarg = require('./src/valarg');

const divide = (x, y) => {
    valarg(x, { required: true, type: Number })
    valarg(y, { required: true, type: Number, validator: val => val !== 0 })

    return x / y;
}

divide(42, 0)
