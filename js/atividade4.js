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
// let number = 10
// function Teste (item){
//     for( var i=0; i<item; i++){
//         return
//     }
// }
// console.log(Teste(number));

// 9.Escreva um programa que itere sobre um array de objetos que contém informações sobre produtos (como nome, preço, etc.). Para cada produto, imprima no console uma mensagem informando se o produto está em promoção (preço menor que R$50) ou não.
// let list = [{nome:'biscoito', preco: '4'},{nome:'macarrão', preco: '52'},{ nome:'manga', preco: '2' },{ nome:'chocolate', preco:'70'}]
// function Promocao(item){
//     return item.preco < 50 ? 'está na promoção!' : "não está na promoção!"}

// console.log(`O nome do produto é ${list[0].nome}, ele custa R$${list[0].preco},00 e ${Promocao(list[0])}`);
// console.log(`O nome do produto é ${list[1].nome}, ele custa R$${list[1].preco},00 e ${Promocao(list[1])}`);
// console.log(`O nome do produto é ${list[2].nome}, ele custa R$${list[2].preco},00 e ${Promocao(list[2])}`);
// console.log(`O nome do produto é ${list[3].nome}, ele custa R$${list[3].preco},00 e ${Promocao(list[3])}`);

// 10. Lê um valor inteiro (em dias) e imprime-o em anos, meses e dias, seguido da respectiva mensagem “ano(s)”, “mes(es)”, “dia(s)”.

// Obs: só para facilitar o cálculo, considere o ano todo com 365 dias e 30 dias todos os meses. Nos casos de teste nunca haverá uma situação que permita 12 meses e alguns dias,
// como 360, 363 ou 364. Este é apenas um exercício com o objetivo de testar raciocínio matemático simples.

// let numero = 2000
// let anosValor = numero / 365
// let anos = numero % 365
// let mesesValor = anos / 30
// let dias = anos % 30

//     if( numero > 365){
//         anos
//         anosValor
//     }
//     if (anos > 30) {
//         mesesValor
//     }

// console.log(`${parseInt(anosValor)} anos, ${parseInt(mesesValor)} meses e ${parseInt(dias)} dias`);

// 11 - Lê um valor inteiro, que é a duração em segundos de um determinado evento em uma fábrica, e informa-o expresso em horas:minutos:segundos.
// Ex:
// Input -> 556
// Output -> 0:9:16

// let numero = 10000
// let horas = numero % 3600
// let horasValor = numero / 3600
// let minutos = horas / 60
// let segundos = horas % 60

// if(numero > 3600){
//     horas
//     horasValor
// }
// if(minutos > 60){
//     minutos
//     segundos
// }

// console.log(`${parseInt(horasValor)}:${parseInt(minutos)}:${parseInt(segundos)}`);

// 12 - A empresa ABC decidiu dar um aumento salarial aos seus funcionários, conforme tabela a seguir:
// Salário    Taxa de reajuste
// 0 - 400,00                  15%
// 400,01 - 800,00             12%
// 800,01 -  1200,00           10%
// 1200,01 - 2000,00            7%
// Acima de 2000,00

// Leia o salário do funcionário, calcule e imprima o salário do novo funcionário, bem como o dinheiro ganho e o percentual de aumento obtido
// pelo funcionário, com as mensagens correspondentes em português, conforme exemplo abaixo.

let salario = 800
let quinze = 0.15
let doze = 0.12
let dez = 0.10
let sete = 0.7
function NovoSalario(salario){
    
    if (salario <= 400){
        let aumento = salario * quinze
        let novoSalario = salario + aumento
        return 'Aumento de 15%:'+ novoSalario 
        
    }
    if(salario <= 800){
        aumento = salario * doze
        novoSalario = salario + aumento
        return 'Aumento de 12%:' + novoSalario 
    }
    if(salario <= 1200){
        aumento = salario * dez
        novoSalario = salario + aumento
        return 'Aumento de 10%:' + novoSalario 
    }
    if(salario <= 2000){
        aumento = salario * sete
        novoSalario = salario + aumento
        return 'Aumento de 7%:'+ novoSalario 
    }
}
console.log(NovoSalario(salario));