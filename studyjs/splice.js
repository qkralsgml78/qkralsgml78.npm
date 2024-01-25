var arr = [1,2,3,4,5.6,7];
arr.splice(3,2);
console.log(arr); //3번째 인덱스에서부터 2개제거

var arr = [1,2,3,4,5,6,7];
arr.splice(2,1,"a","b");
console.log(arr); //2번째 인덱스에서 1개 제거 후 "a"와 "b"를 추가
