const message = 'MyPassword';
let fullAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

function encryptMessage(message, key) {
    key = Number(key);
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
    key = Number(key);
    newArr = [];
    let messageArr = message.split('');
    let startFrom;
    if (messageArr.length % 2 == 0) {
        startFrom = 'left';
    } else if (messageArr.length % 2 == 1) {
        startFrom = 'right';
    }
    if (startFrom == 'right') {
        let j = 0;
        let h = 0;
        for (let i = 0; i < messageArr.length; i++) {
            if (i % 2 == 0) {
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
            if (i % 2 == 1) {
                newArr.unshift(messageArr[messageArr.length - 1 - j]);
                j++;
            } else {
                newArr.unshift(messageArr[h]);
                h++;
            }
        }
    } else {
        throw new Error('Dontknow')
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

const ENCRYPTION_MESSAGE = document.getElementById('encrypt-message');
const ENCRYPTION_KEY = document.getElementById('encryption-key');
const ENCRYPTION_SUBMIT = document.getElementById('encrypt-submit');
const DECRYPTION_MESSAGE = document.getElementById('decrypt-message');
const DECRYPTION_KEY = document.getElementById('decrypt-key');
const DECRYPTION_SUBMIT = document.getElementById('decrypt-submit');

const OUTPUT = document.querySelector('.output');

ENCRYPTION_SUBMIT.addEventListener('click', function() {
    if (!ENCRYPTION_MESSAGE.value) {
        OUTPUT.innerHTML = 'Enter a valid message';
        return;
    } 
    const regex = /[^a-zA-Z]/;
    if (regex.test(ENCRYPTION_MESSAGE.value)) {
        OUTPUT.innerHTML = 'Avoid characters that are not letters';
        return;
    }
    OUTPUT.innerHTML = encryptMessage(ENCRYPTION_MESSAGE.value, ENCRYPTION_KEY.value);
})

DECRYPTION_SUBMIT.addEventListener('click', function() {
    OUTPUT.innerHTML = decryptMessage(DECRYPTION_MESSAGE.value, DECRYPTION_KEY.value);
})