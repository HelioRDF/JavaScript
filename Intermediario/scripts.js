
function Pencil(){
	this.color = 'red';
	this.length=15;
	this.write = function(text){
		console.log(text);
		debugger;
	}
}

function esconder(){
		var campo = document.querySelector("fieldset");
		campo.hidden=true
}

var myPencil = new Pencil();
myPencil instanceof  Pencil



