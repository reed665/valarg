const valarg = require('./src/valarg');

const sum = (x, y) => {
    valarg(x, { required: true, type: Number })
    valarg(y, { required: true, type: Number })

    return x + y;
}

sum(1, 'foo')
