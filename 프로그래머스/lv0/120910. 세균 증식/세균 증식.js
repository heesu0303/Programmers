function solution(n, t) {
    var answer = 0;
    let time = 1;
    while (time <= t) {
        answer = n * 2;
        n = answer;
        time++;
    }
    return answer;
}