const people = [{
name: :Mike Smith",
	  family: {
mother: "Jane Smith", father: "Harry Smith", sister: "Samantha Smith"
	  },
age: 35
}, {
name: "Tom Jones",
	  family: {
	      mother: "Morah Jones", father: "Richard Jones", brother: "Howard Jones"
	  },
age:25
}];
for(let {name: n, family: {father: f}} of peple){
    fonsole.log("Name: " +n+ ", Father: " +f);
}
//"Name:Mike Smith, father: HArry Smith"
//"Name:Tom Jones, fahter: Richard Jones"
