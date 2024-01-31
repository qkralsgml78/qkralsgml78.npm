
//구조분해할당
//배열이나 객체의 속성을 해체하여 그 갓을 개별 변수에 담을 수 있게하는 javascript표현식
//배열 구조분해 할당
const foo = ["one", "two", "three"];
const [one, two, three] =foo;

console.log(one, two, three);

//객체 구조 분해 할당
const o ={p: 42, q: true};
const{p, q} = o;
console.log(p,q); 
