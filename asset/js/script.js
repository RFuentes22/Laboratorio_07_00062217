
//1 y 2
var container=document.getElementById("c1");

console.log(container);

//3
container.innerText = "Hola, Mundo!";

//4
container.style.background = "#000000";

//5
container.style.color= '#1cb723';

//6
container.style.width = '200 px';

//7

container.innerHTML = "<input type=\"text\" placeholder=\'escriba su texto\'>";

//Usando "document.getElementsByClassName"

//1

var containers = document.getElementsByClassName("c2");

//2
for(let i = 0 ; i < containers.length ; i++){
    containers[i].style.background = "#009999";
}

//3
for(let i = 0 ; i < containers.length ; i++){
    containers[i].innerHTML = " <input type='text' placeholder='Escriba su texto'>";

}

//Eventos

//1

var boton = document.getElementById("btn-click");

//2
boton.onclick = function(evt) 
{ 
alert("Hola mundo"); 
}

//3
var btnCopy = document.getElementById("btnCopy");

//4
btnCopy.onclick = function(evt) 
{ 
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
}