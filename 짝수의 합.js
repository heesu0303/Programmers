function solution(n) {
    let even = [];
    for (let i = n; i > 0; i--){
        if (i % 2 === 0) {
            even.push(i);
        }
    }
    return (even.reduce((a, b) => a + b));
}