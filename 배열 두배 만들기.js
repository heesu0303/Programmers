function solution(numbers) {
    for (let i = 0; i < numbers.length; i++) {
        numbers[i] *= 2;
    }
    return numbers;
}

// map 사용1
// return numbers.map(i=>i*2);

// map 사용2
// var answer = numbers.map(v => v*2);
// return answer;