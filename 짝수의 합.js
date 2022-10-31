function solution(n) {
    let even = [];
    for (let i = n; i > 0; i--){
        if (i % 2 === 0) {
            even.push(i);
        }
    }
    // 초깃값을 항상 설정하도록!!
    return (even.reduce((a, b) => a += b, 0));
}