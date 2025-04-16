function reverseNumber(x) {

    const reversed = x.toString().split('').reverse().join('');

    return parseInt(reversed, 10);
}

const x = 32243;
console.log("Reversed Number:", reverseNumber(x)); 
