//변수 담기
var two = function() {
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

