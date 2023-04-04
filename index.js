// Code your solutions in this file

const writeCards = (arr, greeting) => {
   const msgArr = []
    for (let i = 0; i < arr.length; i++) {
        msgArr.push(`Thank you, ${arr[i]}, for the wonderful ${greeting} gift!`) 
    }
    return msgArr
}


const countDown = (num) => {
    while (num >= 0) {
        console.log(num);
        num--
    }
}


