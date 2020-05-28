function reverseString(word) {

    let len = word.length - 1;
    let newWord = '';
    let i = 0;
    while(len >= 0) {

        newWord += word[len];
        len--;
    }
    console.log(newWord);

}
reverseString('raihan');
reverseString('haque');
reverseString('raihan haque');