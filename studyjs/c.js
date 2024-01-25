function Animal(type, name, sound){
	this.type = type;
	this.name = name;
	this.sound = sound;
	this.say = function(){
		console.log(this.sound);
	};

	var gubun = "동물";
	this.gubun = gubun;

}

const dog = new  Animal('개', '멍멍이', '멍멍');
const cat = new  Animal('고양이', '야옹이', '냐옹');

dog.say();
cat.say();

console.log(dog.gubun);
