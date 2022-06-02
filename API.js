//API.js


//Fazer uma chamada assicrona para a Web API Random User Generator
//https://randomuser.me/api/?results=50 para obter 50 resultados

var imagens = document.getElementById('imagens');
var nomePessoa = document.getElementById('nomePessoa');

let pedido = new XMLHttpRequest();
pedido.open('GET', "https://randomuser.me/api/?results=50" );
pedido.addEventListener('load', processaResposta);
pedido.send();

let startTime = performance.now();

function processaResposta(e){

let endTime = performance.now();
console.log('Chegou a resposta em ', endTime - startTime , 'ms');

//A resposta no formato JSON esta na propriedade responseText do e.target
let textoRespostaJSON = e.target.responseText;

//alert(textoRespostaJSON);
//Converter a respostaJSON para uma estrutura de dados em Javascript
let objResposta = JSON.parse(textoRespostaJSON);

console.log(objResposta);

//Mostrar na consola alguns dados da primeira pessoa

let primeiraPessoa = objResposta.results[0];

console.log(primeiraPessoa.name.first, primeiraPessoa.name.last,primeiraPessoa.gender, primeiraPessoa.dob.age, primeiraPessoa.picture.thumbnail);

imagens.setAttribute('src', primeiraPessoa.picture.large);

nomePessoa.textContent = ("Nome: " + primeiraPessoa.name.first + " " + primeiraPessoa.name.last + " Idade:" + primeiraPessoa.dob.age);

}