//변수 교환
a=1;
b=3;
[a,b] = [b,a];
console.log(a,b);//3, 1

//일부 반환 값 무시
function f(){
    return [1,2,3];
}
const[a, b] = f();
console.log(a, b);//1, 3

//나머지를 할당하기
const c, b, rest;
[c, b, ...rest] = [10, 20, 30, 40, 50];
console.log(c, b, rest); //10, 20, [30, 40, 50]
