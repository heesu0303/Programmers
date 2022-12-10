
function solution(my_string, n) {
    var answer = '';
    answer = my_string.split('').map((word) => word.repeat(n)).join('')
    
    return answer;
}