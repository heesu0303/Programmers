function solution(n) {
    for (let i = 1; i <= 10; i++) {
        if (n < factorial(i)) {
            return i - 1; 
        }
    }
}

function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}