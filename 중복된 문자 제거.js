function solution(my_string) {
    var answer = '';
    
    answer = [...new Set(my_string)].join('');

    return answer;
}

// Array.from(set)
// forEach() 배열에 push하는 형식