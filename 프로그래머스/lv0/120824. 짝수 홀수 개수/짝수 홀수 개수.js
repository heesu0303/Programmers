function solution(num_list) {
    var answer = [];
    let even = 0;
    let odd = 0;
    for (let i = 0; i < num_list.length; i++) {
        if (num_list[i] % 2 === 0) {
            even++;
        } else if (num_list[i] % 2 !== 0) {
            odd++;
        }
    }
    answer.push(even, odd);
    
    return answer;
}