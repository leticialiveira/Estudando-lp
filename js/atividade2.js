const fetch = require('fetch');
let dados = await fetch('./js/questions.json')
//await = fica esperando os dados(quando tem muito); fetch ou URL = chamar o arquivo
let resposta = await dados
//'dados.json()' ele vai pegar a resposta dos dados e vai colocar aqui.
console.log(resposta);
//imprimiu resposta
// let jsonString = '{"name":"John", "age":30, "city":"New York"}';
// let obj = JSON.parse(jsonString);
// console.log(obj.name); 
// console.log(obj.age); 
// console.log(obj.city)    