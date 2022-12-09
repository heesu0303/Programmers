function solution(array) {
    var answer = 0;
    answer = array.sort((a, b) => a - b)
    let num = Math.floor(answer.length/2);
    return answer[num];
}