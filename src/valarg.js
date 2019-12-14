const nullOrUndefined = value => value === undefined || value === null;

const argTypes = [
    String,
    Number,
    Boolean,
    Array,
    Object,
    Function,
    Promise,
];

const detectType = (arg) => {
    if (typeof arg === 'string') return String;
    if (typeof arg === 'number') return Number;
    if (typeof arg === 'boolean') return Boolean;
    if (Array.isArray(arg)) return Array;
    if (typeof arg === 'function') return Function;
    if (arg instanceof Promise) return Promise;
    if (typeof arg === 'object' && arg !== null) return Object;
}

const typeToString = (type) => {
    if (type === String) return 'String';
    if (type === Number) return 'Number';
    if (type === Boolean) return 'Boolean';
    if (type === Array) return 'Array';
    if (type === Object) return 'Object';
    if (type === Function) return 'Function';
    if (type === Promise) return 'Promise';
}

const valarg = (arg, options = {}) => {
    const {
        required = false,
        type: expectedType = undefined,
    } = options;

    if (required && nullOrUndefined(arg)) {
        throw new Error('Argument required')
    }

    if (expectedType) {
        const argType = detectType(arg)
        if (!argType) {
            throw new Error('Undefined argument type')
        }
        if (argType !== expectedType) {
            const expectedTypeString = typeToString(expectedType);
            const argTypeString = typeToString(argType);
            const msg = `Argument type ${expectedTypeString} expected but ${argTypeString} type received`;
            throw new Error(msg)
        }
    }

    return null;
}

module.exports = valarg;
