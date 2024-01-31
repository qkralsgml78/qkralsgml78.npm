// method로 사용할 경우 this 바인딩이 되지 않는다.
var obj = {
i:10,
  b:() => console.log(this.i, this),
  c: function() {
      console.log(this.i, this)
  }
}
obj.b();
obj.c();

const args = () => console.log(arguments);
args();
