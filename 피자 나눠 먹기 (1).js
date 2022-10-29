function solution(n) {
    let pizza = ~~(n / 7);

    if (n % 7 > 0) {
        pizza++;
    }

    return pizza;
}

// Math.ceil() : 항상 반올림하여 주어진 숫자보다 크거나 같은 작은 정수를 반환
// return Math.ceil(n / 7);