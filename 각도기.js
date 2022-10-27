function solution(angle) {
    var answer = 0;
    answer = (90 > angle > 0) ? 1 : (90 === angle) ? 2 : (180 > angle) ? 3 : 4
    return answer;
}

// return [0, 90, 91, 180].filter(x => angle>=x).length;