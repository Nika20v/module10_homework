const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, null, 0];

function countEvenAndOdd(array) {
 let evenCount = 0;
 let oddCount = 0;
 let zeroCount = 0;

 for (let i = 0; i < array.length; i++) {
 if (Number.isInteger(i)) {
 if (i % 2 === 0) { 
 evenCount++;
 } else {
 oddCount++;
 }
 } else if (i === 0) {
 zeroCount++;
 }
 }

 console.log(`Чётных элементов: ${evenCount}`);
 console.log(`Нечётных элементов: ${oddCount}`);
 console.log(`Нулевых элементов: ${zeroCount}`);
}

countEvenAndOdd(array);