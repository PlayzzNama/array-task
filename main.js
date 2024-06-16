// Перший пункт з іграми
let games = ["CS:GO", "Minecraft", "FIFA", "EA FC", "PES"];

console.log("Мої улюблені ігри:", games);

// Другий пункт - рандомні числа
let randomNumbers = [];
for (let i = 0; i < 20; i++) {
    randomNumbers.push(Math.random());
}

console.log(randomNumbers);

// Третій пункт - максимум, мінімум та середнє значення
let maxNumber = Math.max(...randomNumbers);
console.log("Максимум:", maxNumber);

let minNumber = Math.min(...randomNumbers);
console.log("Мінімум:", minNumber);

let sum = randomNumbers.reduce((acc, curr) => acc + curr, 0);
let average = sum / randomNumbers.length;
console.log("Середнє значення:", average);

// 3 інші методи
// 1. Використання .map() для подвоєння кожного числа
let doubleNumbers = randomNumbers.map(num => num * 2);

console.log("Подвоєні числа", doubleNumbers);

// 2. Використання .filter() для відбору чисел більше 0.5
let filtredNumbers = randomNumbers.filter(num => num > 0.5);

console.log("Числа більше 0.5:", filtredNumbers)

// 3. Використання .sort() для сортування масиву
let sortedNumbers = randomNumbers.sort((a, b) => a - b);

console.log("Відсортовані числа:", sortedNumbers);