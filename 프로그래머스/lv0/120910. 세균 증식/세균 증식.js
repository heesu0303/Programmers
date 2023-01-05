function solution(n, t) {
    var answer = 0;
    while (t--) {
        answer = n * 2;
        n = answer;
    }
    return answer;
}