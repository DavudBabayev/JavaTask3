//1. const array = [1,2,3,4,5]. Yeni array yaradın və bu array-in əksinə düzülmüş formada olsun (e.x [5,4,3,2,1])

const array = [1, 2, 3, 4, 5];

let arrayReverse = [];

for (let i = array.length - 1; i >= 0; i--) {
    arrayReverse.push(array[i]);
}

console.log(array);
console.log(arrayReverse);

// alternativ olaraq asagidaki kimi de yazmaq olar
// const array = [1, 2, 3, 4, 5];
// const arrayReverse = array.reverse();

// console.log(array);         
// console.log(arrayReverse); 




//2. const strArray = ["cat","mouse","panter","chicken"] bu array-dən "cat" sözünü silin və sonuna "bird" əlavə edin.

const strArray = ["cat", "mouse", "panter", "chicken"];

strArray.shift();
strArray.unshift("bird");

console.log(strArray);




//3. const array = [1,2,3,4,5]. Bu ədədlərin yanına kvadrat-ların əlavə edin. (e.x [1,2,3,4,5,1,4,9,16,25])

const arraySquare = [1, 2, 3, 4, 5];

console.log(arraySquare);

const originalLength = arraySquare.length;

for (let i = 0; i < originalLength; i++) {
    arraySquare.push(arraySquare[i] ** 2)
}

console.log(arraySquare);




//4. Ədədlərdən ibarət array verilir. Array-də olan cüt ədədləri ekrana çıxardın.(Əlavə: yeni array-ə əlavə edin cüt ədədləri)

const numbers = [1, 2, 3, 4, 5, 7, 6, 8, 9, 10, 11, 12, 13, 14, 15]

let numbersEven = [];

for(let i=0; i<numbers.length; i++){
    if(numbers[i] % 2 ==0){
        numbersEven.push(numbers[i])
    }
}

console.log(numbersEven);