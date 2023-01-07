function solution(n) {
    let answer = 0;
    let array = (n + '').split('').map(i => parseInt(i));
    answer = array.reduce((a, b) => a + b);
    return answer;
}