const checkPrimeMiddleNum = (n) => {
    if(n < 3) return null
    let arrayBoolean = new Array(n).fill(true);
    let primes = [];
    for (let i = 2; i < Math.sqrt(n); i++) {
        if (arrayBoolean[i]) {
            for (let j = i * i; j < n; j += i) {
                arrayBoolean[j] = false;
            }
        }
    }
    arrayBoolean.forEach((element, index) => {
        if (element && index > 1)
            primes.push(index);
    });

    let floorEl = Math.floor((primes.length + 1) / 2);
    let topEl = Math.ceil((primes.length + 1) / 2);
    
    return primes.slice(floorEl - 1, topEl);
};

module.exports = checkPrimeMiddleNum;
