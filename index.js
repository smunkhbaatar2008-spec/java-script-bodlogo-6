// for (let i = 1 ; i <= 10;i++ )
//     console.log(i);

// for (let i = 10 ; i >= 1 ; i--)
//     console.log(i);

// const fruits = ["Алим", "Банана", "Жүрж"];
// for (let i = 0 ; i <= fruits.length -1 ; i++)
//     console.log(fruits[i]);

// for (let i = 1 ; i <= 20 ; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

// for (let i = 1 ; i <= 20 ; i++) {
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

// const word = "hello"
// for (let i = 0 ; i < word.length ; i++)
//     console.log(word[i]);

// let sum = 0;
// for (let i = 1; i <= 100; i++) {
//   sum += i;
// }
// console.log(sum);

// let sum = 0 ;
// for (let i = 1 ; i <= 100 ; i++){
//     if (i % 2 == 0){
//         sum += i;
//     }
// }
// console.log(sum);

// const squares = [];
// for (let i = 1; i <= 10; i++) {
//   squares.push(i ** 2);
// }
// console.log(squares);

// const numbers = [5, 10, 15, 20]
// let sum = 0
// for (let i = 0; i < numbers.length ; i++){
//     sum += numbers[i];
// }
// console.log(sum);

// const numbers = [10, 20, 30, 40];
// let sum = 0;
// for (let i = 0 ; i < numbers.length ; i++) {
//     sum += numbers[i];
// }
//     let average = sum / numbers.length;
// console.log(average);

// const word = "school";
// let count = 0;
// for (let char of word){
//     count++;
// }
// console.log(count);

// const numbers = [3, 8, 12, 5, 6, 7];
// let count = 0;
// for(let i = 0 ; i <= numbers.length ; i++) {
//     if (numbers[i] % 2 == 0) {
//         count++;
//     }
// }
// console.log(count);

// for (let i = 1 ; i <= 50 ; i++) {
//     if (i % 3 == 0){
//         console.log(i);
//     }
// }

// const word = "hello";
// let reversed = "";
// for (let i = word.length -1 ; i >= 0 ; i--){
//     reversed += word[i]
// }
//     console.log(reversed);
    
// const word = "banana";
// const letter = "a";
// let count = 0;
// for (let char of word) {
//     if (char === letter){
//         count++;
//     }
// }
// console.log(count);

// for (let i = 5 ; i <= 50 ; i++) {
//     if (i % 5 == 0)
//             console.log(i);
// }

// for (let i = 100 ; i >= 0 ; i--) {
//     if (i % 10 === 0) {
//         console.log(i);
//     }
// }

// const sentence = "Би JavaScript сурч байна";
// let count = 0;
// for (let char of sentence){
//     if (char === " "){
//         count++;
//     }
// }
// console.log(count);

// const a = 2;
// const b = 5;
// let result = 1;
// for (let i = 0 ; i < b ; i++){
//     result *= a;
// }
// console.log(result);

// const n = 5;
// let factorial = 1;
// for (let i = 1; i <= n; i++){
//     factorial *= i;
// }
// console.log(factorial);

// for (let i = 1 ; i <= 10 ; i++) {
//     console.log(`5 * ${i} = ${5 * i}`);
// }

// const numbers = [4, 7, 2, 7, 9]
// const target = 7;
// let index = -1;
// for (let i = 0 ; i < numbers.length ; i++) {
//     if(numbers[i] === target) {
//         index = i;
//         break
//     }
// }
// console.log(index);

// const word = "JavaScript";
// let count = 0;
// for (let i = 0 ; i < word.length; i++) {
//     let code = word.charCodeAt(i);
//     if (code >= 65 && code <= 90) {
//         count++;
//     }
// }
// console.log(count);

// const number = 12;
// for (let i = 1; i <= number ; i++){
//     if (number % i === 0){
//         console.log(i)
//     }
// }

// for (let i = 0 ; i <= 5 ; i++){
// console.log("*".repeat(i));}

// let numbers = [5, 12, 20, 8]
// for (let i = 0 ; i < numbers.length ; i++){
//     numbers[i] += 10
// }
// console.log(numbers);

// const booleans = [false, false, true, true];
// let result = [];
// for (let i = 0 ; i < booleans.length ; i++){
//     if (booleans[i] === false){
//         result.push(true)
//     }
//     else {
//         result.push(booleans[i])
//     }
// }
// console.log(result);

// const product = [
//     {title : "Уут" , price : 500 } , 
//     {title : "Сав" , price : 800 }
// ]
// for (let i = 0 ; i < product.length ; i++){
//     if (product[i].price >= 600){
//         console.log(product[i]);   
//     }
// }

// const employees = [
//     { name: "Амгалан", department: "IT" },
//     { name: "Номин", department: "HR" }
// ]
// for (let i = 0 ; i < employees.length ; i++)
// console.log(employees[i].name);

// const students = [
//     { name: "Бат", score: 85 }, 
//     { name: "Сара", score: 92 }
// ]
// for (let i = 0 ; i < students.length ; i++){
//     if (students[i].score >= 90){
//         console.log(students[i].name);
//     }
// }

// const products = [
//     { title: "Уут", stock: 5 }, 
//     { title: "Сав", stock: 0 }
// ]
// for (let i = 0 ; i < products.length ; i++){
//     if (products[i].stock > 0){
//         console.log(products[i]);
//     }
// }

// const books = [
//     { title: "Монгол түүх", year: 2000 }, 
//     { title: "Газар зүй", year: 2010 }
// ]
// for (let i = 0 ; i < books.length ; i++){
//     if (books[i].year >= 2005){
//         console.log(books[i]);
//     }
// }

// const students = [
//     { name: "Бат", age: 20 }, 
//     { name: "Сара", age: 22 }
// ]
// let sum = 0 ;
// for (let i = 0 ; i < students.length ; i++) {
//     sum += students[i].age
// }
// let average = sum / students.length
// console.log(average);

// const products = [
//     { title: "Уут", price: 500 }, 
//     { title: "Сав", price: 800 }
// ]
// let newProducts = [];
// for (let i = 0 ; i < products.length ; i++){
//     newProducts.push(
//         {
//            title : products[i].title ,
//            price : products[i].price * 1.1
//         });
//         console.log(newProducts);
// }

let employees = [
  { name: "Амгалан", salary: 1000, active: true, department: "IT" },
  { name: "Номин", salary: 1500, active: false, department: "HR" },
  { name: "Баяр", salary: 1200, active: true, department: "IT" }
]; 
let sum = 0;
let count = 0;
for (let i = 0 ; i < employees.length ; i++){
    if(employees[i].active === true){
        sum += employees[i].salary;
        count++;
    }
}
if(count === 0){
    console.log("Идэвхтэй ажилтан байхгүй");
}
else {
    console.log(sum / count);
}