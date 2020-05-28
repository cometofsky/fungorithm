function reverseWords(string) {

    const words  = string.split(' ');
    let wordsLen = words.length;
    let w        = 0;
    let result   = '';
    let wordLen  = -1;
    
    while (w < wordsLen) {

        if (wordLen < 0) {
            
            wordLen = words[w].length - 1;
            result += ' ';
        }
        
        result += words[w][wordLen];
        
        wordLen--;

        if (wordLen < 0)
            w++;
    }
    console.log(result);
}
reverseWords('raihan haque');
