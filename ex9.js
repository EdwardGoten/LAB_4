const makeCensored = (text, stopWord) => {
    const separator = ' ';
    const words = text.split(separator);

    for (let i = 0; i < words.length; i++) {
        (stopWord.includes(words[i])) ? words[i] = "$#%!" : words[i];
    }
    
    return words.join(separator);
}

const sentence = 'When you play the game of thrones, you win or die';
const result = makeCensored(sentence, ['die', 'play']);
console.log(result);