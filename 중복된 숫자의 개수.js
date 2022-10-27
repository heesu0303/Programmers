function solution(array, n) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === n) {
            count++;
        }
    }
    return count;
}

// 다른 방식
function solution(array, n) {
    return array.filter(i => i === n).length;
}
