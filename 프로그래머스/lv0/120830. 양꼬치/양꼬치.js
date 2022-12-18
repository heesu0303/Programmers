function solution(n, k) {
    let 양꼬치 = 12000 * n;
    let 음료수 = 2000 * k;
    if (n / 10 > 0) {
        음료수 -= 2000 * ~~(n / 10);
    }
    return 양꼬치 + 음료수;
}