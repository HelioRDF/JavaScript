var meuObj = {
	nome:'Helio',
	idade:30,
	Poder: 'psiquico',
	Modo:'Deus',
	msg(){
		alert("Oiiii");
	}
}

function submitForm(){
	console.log("entrou no metodo")
	if(document.forms.myform.myinput.value.length < 1){
		alert("Entrou no metodo");
		return false;
	}
}

function testeAlerta(){
	document.querySelector('input').style.backgroundColor='blue';
}

function testeAlerta2(){
	document.querySelector('input').style.backgroundColor='red';
}

var objetoJSON = JSON.stringify(meuObj);
var objetoJS = JSON.parse(objetoJSON);
var num=[1,2,3];
function somar(n1,n2,n3){
	console.log(n1+n2+n3);
}

console.log('------------- For IN --------------\n');
for(let variavelNome in meuObj){
	console.log('-'+variavelNome+': '+meuObj[variavelNome]);
}

console.log('\n------------- For OF--------------\n');
var lista = [1,2,3,4,5]
for(let variavelNome of lista){ 
	console.log('\nposição em for IN: '+(variavelNome-1)) ;
	console.log('Valor em for Of: '+(variavelNome)) ;
}

var expressaoRegular = /\d{2}\/\d{2}\/\d{4}/;
var data = '22/02/2019';
data.match(expressaoRegular);

var funcaoParaClick=1;
document.querySelector('#myinput').addEventListener('click', function(){ console.log("Entrou no elemento");});

var funcaoParakeyup=1;
document.querySelector('#myinput').addEventListener('blur', function(){ console.log("Saiu do elemento");});

document.querySelector('button').addEventListener('contextmenu', function(event){event.preventDefault()});

document.querySelector('#myinput').addEventListener('keypress', function(){
console.log('evento chamado');
if(event.keyCode==13){
this.style.backgroundColor="blue";
console.log('enter pressionado');}
});

var intervaloTemp = setInterval(function(){console.log("3 segs");},6000);
clearInterval(intervaloTemp);

var myInput = document.querySelector('input');
myDiv = document.querySelector('div');
var  myTimeout;

document.querySelector('input').addEventListener('keypress', function(){
	clearTimeout(myTimeout);
	myTimeout = setTimeout(()=> {
		myDiv.textContent=myInput.value.length;
	},800)
})