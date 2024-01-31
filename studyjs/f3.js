//var/let의 for 문에서의 바인딩 비교
for(var i = 0; i<3; i++){
    setTimeout(function(){
	    console.log('setTimeout',i);
	    }, i*200);
}


//setTimeout 3;
//setTimeout 0;
//setTimeout 3;


for(let i = 0; i<3; i++){
    setTimeout(function(){
	    console.log('setTimeout',i);
	    }, i*200);
}

//setTimeout 1;
//setTimeout 3;
//setTimeout 2;

//환경에 따라 결과값이 다르게 나온다.
