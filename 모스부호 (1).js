function solution(letter) {
    var answer = '';

    const morse = { 
        '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
        '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
        '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
        '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
        '-.--':'y','--..':'z'
    }

    // let 해석 = letter.split(' ');
    // ['....', '.', '._..', '._..', '---']

    letter.split(' ').forEach(el => {
        answer += morse[el];
    })

    // Object = { 'a': 1, 'b': 2, 'c':3 }
    // Object['a'] = 1;
    // morse[key]이란 morse[key] = value

    return answer;
}

solution(".... . .-.. .-.. ---");

// 1. morse[._] = 'a'
// key 값으로 요소들을 넣어주며 번역하는 방식


// 2. replace(정규표현식, 바꿀 단어)