function solution(money) {
    var answer = [];
    let americano = ~~(money / 5500);
    let changes = money % 5500;

    answer.push(americano, changes);

    return answer;
}