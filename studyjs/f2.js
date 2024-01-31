//function scope
/*function varTest(){
    var x = 1;
}
console.log(x);//uncaught ReferenceError: x is not defined

//no block scope
if(true){
    var x = 10;
}
console.log(x);

//변수 선언 중복 가능
//변수 호이스팅으로 인함 사이드이펙트 발생 가능
*/

var x = 1;
function varTest(){
    const x = 2;
    console.log(x);
}
varTest();
console.log(x);

for(let i=0; i<3; i++){
    var x=10;
}
console.log(x);
console.log(i);//Refenrence Error: i is not defined
