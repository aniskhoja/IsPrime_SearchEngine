const checkPrimeMiddleNum = require('./isPrime.js')

describe('check is Prime Fucntion', () => {
    it('should return median prime number(s) input between 3 to 10000', () => {
        const result = checkPrimeMiddleNum(3);
        expect(result).toEqual([2]);
    })
    it('should return null if input is < 3', () => {
        const result = checkPrimeMiddleNum(2) || checkPrimeMiddleNum(1) || checkPrimeMiddleNum(0);
        expect(result).toBeNull();
    })
})

