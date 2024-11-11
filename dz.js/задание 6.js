const array = [1, 2, 3, 4, 5]; 
function checkArrayEquality(array) {
  let firstElement = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] === firstElement) {
      return false;
    }
  }
  return true;
}
console.log(checkArrayEquality(array));