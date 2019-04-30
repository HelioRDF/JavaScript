
function Pencil(){
	this.color = 'red';
	this.length=15;
	this.write = function(text){
		console.log(text);
	}
}

var myPencil = new Pencil();
myPencil instanceof  Pencil