/* Write your code below. Good luck! 🙂 */

const massMark = 78;
const heightMark = 1.69;

const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark/(heightMark * heightMark);
console.log(BMIMark);

const BMIJohn = massJohn/(heightJohn * heightJohn);
console.log(BMIJohn);

const markHigherBMI = BMIMark > BMIJohn;
console.log(markHigherBMI);
