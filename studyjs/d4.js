//객체구조 분해 할당
const o = {p: 42, q: true};
const {p, q};
console.log(p,q);

//선언에서 분리한 할당
let a,b;
{a, b} = {a:1, b:2};
// Unexpected token =
//코드 블록 블록으로 간주하기 때문에 표현식으로 되도록 괄호록 감싸주기
{{a,b} = {a:1, b:2}};

//새로운 변수 이름으로 할당하기
const o = {p:42, q:true};
const {p:foo, q:bar} = o;
console.log(foo, bar);
