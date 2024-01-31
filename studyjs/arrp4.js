/*const array = [1, 2, 3, 4, 5];
const r = array.map(n => n*n);
console.log(r);


const array = [1, 2, 3, 4, 5];
const r = array.filter(n => n%2);
console.log(r);
*/

//reduce
const array = [1, 2, 3, 4, 5];
const r = array.reduce((a, b) => a+b,0 /* initial value */ );
console.log(r);

//every
/*
const array2 = [1, 2, 3, 4, 5];
console.log(array2.every(n => n>0));//true
console.log(array2.every(n => n>4));//false
*/

//some
/*
const array2 = [1,2,3,4,5];
console.log(array2.some(n => n>100));
console.log(array2.some(n => n>4));
*/

//sort
const array2 = [100, 0, 89, 34, 0, 9];
array2.sort();
array2.sort((a,b) => a-b);
console.log(array2)


