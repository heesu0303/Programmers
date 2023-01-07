function solution(my_str, n) {
    // slice(문자열, 배열), splice(배열)
    var answer = [];
    for (let i = 0; i < my_str.length; i += n) {
        answer.push(my_str.slice(i, i + n));
    }

    return answer;
}