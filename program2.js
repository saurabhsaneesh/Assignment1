function alphabetOrder(str) {
    return str.split('').sort().join('');
}

const input = 'webmaster';
console.log("Alphabetical Order:", alphabetOrder(input));  
