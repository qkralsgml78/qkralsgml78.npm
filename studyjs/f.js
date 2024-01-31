//변수 담기
/*var two = function() {
    return 2;
}

//argument로 전달하기
var caller = function(f){
    return f()
}
caller(two);

//반환값 사용
var f = function(){
    return two;
}


/*함수를 변수나 데이터 구조 안에 담을 수 있으며 함수를 argument로 전달 가능합니다.
  함수를 반화값으로 사용할 수 있습니다.*/


//함수를 인자로 받기
var arr1 = [1, 2,3];
var arr2 =arr.map(function(item){
	return item *2;
	});
arr2;

//함수가 함수를 반환
function add(a,b){
    return function(c){
	return a+b+c;
    }
}
add(2,3)(10);
