// 1.Crie uma função que receba dois números como parâmetros e retorne o maior deles.
// function MaiorNumero(n1, n2) {
//     if(n1 > n2){
//         return n1
//     } else {
//         return n2
//     }
// }
// console.log(MaiorNumero(5, 2));

// 2.Escreva um programa que itere de 0 a 100. Para cada número, se o número for divisível por 3, imprima "Fizz"; se for divisível por 5, imprima "Buzz"; se for divisível por 3 e 5, imprima "FizzBuzz"; caso contrário, imprima o próprio número.
// function Divisivel(numbers) {
//     for (let i = 0; i <= 100; i++) {
//         let test = numbers       
//         if(test % 5 == 0 & test % 3 == 0){
//             return 'FizzBuzz'
//         }
//         if (test % 3 == 0){
//             return 'Fizz'
//         }
//         if(test % 5 == 0){
//             return 'Buzz'
//         }
// // erro nessa parte
//         else {
//             return test
//         }
//     }
// }
// console.log(Divisivel(30));

// 3.Crie uma função que receba um array de números como parâmetro e retorne a soma de todos eles.
// let list = [2, 3, 5]
// function Soma(array) {
//     return array.reduce((acumulador, valorAtual) => acumulador + valorAtual)
// }
// console.log(Soma(list));

// 4.Crie uma função que receba um array de números como parâmetro e retorne um novo array contendo apenas os números pares.
// let list = [2, 3, 4, 5, 6]
// function Pares(numbers) { 
//     return numbers.filter((test)=> test % 2 == 0)
// }
// console.log(Pares(list));

// 5.Escreva um programa que itere sobre um array de objetos que contém informações sobre pessoas (como nome, idade, etc.). Para cada pessoa, imprima no console uma mensagem com seu nome e idade, seguida de uma mensagem informando se a pessoa é maior ou menor de idade.
// let array = [{nome: 'Letícia', idade: '10'}, {nome: 'Gustavo', idade: '22'}, {nome: 'Sandro', idade: '50'}]
// function Idade(item){return item.idade > 18 ? 'maior de idade' : "menor de idade"}
        
// console.log(`Seu nome é ${array[0].nome} e sua idade é ${array[0].idade} anos e ela é  ${Idade(array[0])}.` );
// console.log(`Seu nome é ${array[1].nome} e sua idade é ${array[1].idade} anos e ele é ${Idade(array[1])}.`);
// console.log(`Seu nome é ${array[2].nome} e sua idade é ${array[2].idade} anos e ele é ${Idade(array[2])}.`);

// 6.Crie uma função que receba um array de strings como parâmetro e retorne um novo array contendo apenas as strings que possuem mais de 5 caracteres.
// let list = ['arara', 'leticia' , 'brasil', 'comida' ]
// function Caracteres (item){
//     return item.filter((test) => test.length > 5 )
// }
// console.log(Caracteres(list));

// 7.Escreva um programa que itere sobre um array de números e retorne a média dos valores.
// let list= [8, 7, 6]
// let dividir= list.length
// let soma = 0

// function Media (sum, divisor ){
//     for( i=0; i< sum.length; i++){
//         soma += sum[i]
//     }
//     let total = (soma) / (divisor)
//     return total
// }

// console.log(Media(list, dividir));

// duvida aaaaaaaaaaaaaaaaaaaaaaaaa
// 8.Crie uma função que receba um número como parâmetro e retorne um array contendo todos os números inteiros positivos menores ou iguais ao número.
let number = 10
function Teste (item){
    for( var i=0; i<item; i--){
        return i <= item
    }
}
console.log(Teste(number));

// 9.Escreva um programa que itere sobre um array de objetos que contém informações sobre produtos (como nome, preço, etc.). Para cada produto, imprima no console uma mensagem informando se o produto está em promoção (preço menor que R$50) ou não.
// let list = [{nome:'biscoito', preco: '4'},{nome:'macarrão', preco: '52'},{ nome:'manga', preco: '2' },{ nome:'chocolate', preco:'70'}]
// function Promocao(item){
//     return item.preco < 50 ? 'está na promoção!' : "não está na promoção!"}

// console.log(`O nome do produto é ${list[0].nome}, ele custa R$${list[0].preco},00 e ${Promocao(list[0])}`);
// console.log(`O nome do produto é ${list[1].nome}, ele custa R$${list[1].preco},00 e ${Promocao(list[1])}`);
// console.log(`O nome do produto é ${list[2].nome}, ele custa R$${list[2].preco},00 e ${Promocao(list[2])}`);
// console.log(`O nome do produto é ${list[3].nome}, ele custa R$${list[3].preco},00 e ${Promocao(list[3])}`);