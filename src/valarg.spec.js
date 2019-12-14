const valarg = require('./valarg');

describe('valarg', () => {
    it('does not throw if arg is required and arg is not emtpy string', () => {
        expect(() => {
            valarg('foobar', { required: true })
        }).not.toThrow();
    })

    it('does not throw if arg is required and arg is emtpy string', () => {
        expect(() => {
            valarg('', { required: true })
        }).not.toThrow();
    })

    it('does not throw if arg is required and arg is 0', () => {
        expect(() => {
            valarg(0, { required: true })
        }).not.toThrow();
    })

    it('does not throw if arg is required and arg is 42', () => {
        expect(() => {
            valarg(42, { required: true })
        }).not.toThrow();
    })

    it('does not throw if arg is required and arg is empty object', () => {
        expect(() => {
            valarg({}, { required: true })
        }).not.toThrow();
    })

    it('does not throw if arg is required and arg is not empty object', () => {
        expect(() => {
            valarg({ foo: 'bar' }, { required: true })
        }).not.toThrow();
    })

    it('does not throw if arg is required and arg is empty array', () => {
        expect(() => {
            valarg([], { required: true })
        }).not.toThrow();
    })

    it('does not throw if arg is required and arg is not empty array', () => {
        expect(() => {
            valarg(['foo', 'bar'], { required: true })
        }).not.toThrow();
    })

    it('throws if arg is required and arg is undefined', () => {
        expect(() => {
            valarg(undefined, { required: true })
        }).toThrow();
    })

    it('throws if arg is required and arg is null', () => {
        expect(() => {
            valarg(null, { required: true })
        }).toThrow();
    })

    it('does not throw if arg type is String and arg is not empty string', () => {
        expect(() => {
            valarg('foobar', { type: String })
        }).not.toThrow();
    })

    it('throws if arg type is String and arg is number', () => {
        expect(() => {
            valarg(42, { type: String })
        }).toThrow('Argument type String expected but Number type received');
    })

    it('does not throw if arg type is Date and arg is date', () => {
        expect(() => {
            const arg = new Date()

            valarg(arg, { required: true, type: Date })
        }).not.toThrow();
    })

    it('throws if arg type is Date and arg is boolean', () => {
        expect(() => {
            valarg(true, { required: true, type: Date })
        }).toThrow();
    })

    it('does not throw if arg type is Boolean and arg is true', () => {
        expect(() => {
            valarg(true, { type: Boolean })
        }).not.toThrow();
    })

    it('does not throw if arg type is Boolean and arg is false', () => {
        expect(() => {
            valarg(false, { required: true, type: Boolean })
        }).not.toThrow();
    })

    it('throws if arg type is Function and arg is Promise', () => {
        expect(() => {
            const arg = new Promise(resolve => resolve());

            valarg(arg, { required: true, type: Function })
        }).toThrow('Argument type Function expected but Promise type received')
    })

    it('does not throw if validator returns true', () => {
        expect(() => {
            valarg(['foo', 'bar'], { type: Array, validator: val => val.length > 0 })
        }).not.toThrow();
    })

    it('throws if validator returns false', () => {
        expect(() => {
            valarg([], { type: Array, validator: val => val.length > 0 })
        }).toThrow('Invalid argument value');
    })

})
