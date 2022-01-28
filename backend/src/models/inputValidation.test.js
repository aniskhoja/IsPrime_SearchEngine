const { validate } = require('./inputValidation')

describe('check input as (string, < 3, > 10000', () => {
    it('check if input is string', () => {
        const { error } = validate({ value: "string" })
        expect(error.details[0].message).toMatch(/must be a number/);
    })
    it('check if is < 3', () => {
        const { error } = validate({ value: 2 })
        expect(error.details[0].message).toMatch(/must be greater/);
    });
    it('check if is > 10000', () => {
        const { error } = validate({ value: 100000 })
        expect(error.details[0].message).toMatch(/must be less/);
    });
})

describe('check input is between 3 and 10000', () => {
    it('should return null', () => {
        const result = validate({ value: 3 })
        expect(result.value).toEqual({value:3});
    })
})



