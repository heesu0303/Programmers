function solution(n) {
    let pizza = ~~(n / 7);

    if (n % 7 > 0) {
        pizza++;
    }

    return pizza;
}