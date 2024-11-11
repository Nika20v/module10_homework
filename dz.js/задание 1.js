let input = prompt ("Введите значение");
let num = +input;
if (typeof num === "number" && ! isNaN(num)) {
    if (num % 2 === 0) {
        console.log ("Четное");
    } else {
        console.log ("нечетное");
    }
} else {
    console.log("Упс, кажется ошибка")
}