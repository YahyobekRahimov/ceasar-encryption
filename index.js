const message = 'MyPassword';
let fullAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function encryptMessage(message, key) {
    let messageArr = message.split('');
    let result = [];
    messageArr.forEach((element) => {
        let isUpperCase = false;
        if (!fullAlphabet.includes(element)) {
            isUpperCase = true;
        }
        let indexInAlphabet = fullAlphabet.indexOf(element.toLowerCase())
        indexInAlphabet += key;
        indexInAlphabet = indexInAlphabet > 26 ? indexInAlphabet - 26 : indexInAlphabet; 
        let changedTo = isUpperCase ? fullAlphabet[indexInAlphabet].toUpperCase() : fullAlphabet[indexInAlphabet];
        result.push(changedTo);
    })
    let newArr = [];
    result.forEach((element, index) => {
        if (element === element.toLowerCase()) {
            if (index % 2 == 1) {
                newArr.unshift(element);
            } else if (index % 2 == 0) {
                newArr.push(element);
            }
        } else {
            if (index % 2 == 1) {
                newArr.unshift(element);
            } else if (index % 2 == 0) {
                newArr.push(element);
            }
        }
    })
    return newArr.join('');
}


function decryptMessage(message, key) {
    newArr = [];
    let messageArr = message.split('');
    let startFrom = 'right';
    if (messageArr.length % 2 == 0) {
        startFrom = 'left';
    }
    if (startFrom == 'right') {
        let j = 0;
        let h = 0;
        for (let i = 0; i < messageArr.length; i++) {
            const element = messageArr[i];
            if (i % 2 == 1) {
                newArr.unshift(messageArr[messageArr.length - 1 - j]);
                j++;
            } else {
                newArr.unshift(messageArr[h]);
                h++;
            }
        }
    } else if (startFrom == 'left') {
        let j = 0;
        let h = 0;
        for (let i = 0; i < messageArr.length; i++) {
            const element = messageArr[i];
            if (i % 2 == 1) {
                newArr.unshift(messageArr[messageArr.length - 1 - j]);
                j++;
            } else {
                newArr.unshift(messageArr[h]);
                h++;
            }
        }
    }
    let result = [];
    newArr.forEach((element) => {
        let isUpperCase = false;
        if (!fullAlphabet.includes(element)) {
            isUpperCase = true;
        }
        let indexInAlphabet = fullAlphabet.indexOf(element.toLowerCase())
        indexInAlphabet -= key;
        indexInAlphabet = indexInAlphabet < 0 ? indexInAlphabet + 26 : indexInAlphabet; 
        let changedTo = isUpperCase ? fullAlphabet[indexInAlphabet].toUpperCase() : fullAlphabet[indexInAlphabet];
        result.push(changedTo);
    })
    return result.join('');
}

console.log(encryptMessage('HowAreYouDoing', 10));
console.log(decryptMessage(`qsNyoKyRgbIeyx  `, 10));
