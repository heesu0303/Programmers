function solution(my_string) {
    var answer = '';
    answer = Array.from(my_string.replace(/[^0-9]/g,'')).map((i) => Number(i)).reduce((a, b) => a + b)
    return answer;
}