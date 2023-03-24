// Desafio 1: Soma dos elementos do array
// Crie uma função que recebe um array de números como parâmetro e retorna a soma de todos os seus elementos.
// let lista = [1, 2 ,3]
//     let soma = 0
// //  coloca uma variavel para guardar o valor da operação
//         for( var i =0; i<lista.length; i++) {
// //  percorre a lista toda
//             soma += lista[i] 
// //  pega a variavel pra armazenar e soma os elementos da lista, [i] elementos. 
//         }
// console.log(soma);

// const lista2 = [2, 3, 5, 7];
// const Soma = lista2.reduce(
// // reduce faz 2 + 3 = 5 + 5 = 10 + 7 + 17
//   (acumulador, valorAtual) => acumulador + valorAtual
// //   o acumulador vai ficar guardando o valor e o valorAtual trazendo um novo numero da lista
// );

// console.log(Soma);

// Desafio 2: Média dos elementos do array
// Crie uma função que recebe um array de números como parâmetro e retorna a média de todos os seus elementos.
// let lista3 = [6, 6 ,6]
// let dividir= lista3.length
// function Media(elementos,divisor){
//     let soma = 0
//     for( var i = 0; i<elementos.length; i++) {
//       soma += elementos[i]
//     }
//       let sum = ( soma) / (divisor)
//         return sum
// }
// console.log(Media(lista3,dividir));

// Desafio 3: Verificar se um elemento existe no array
// Crie uma função que recebe um array e um elemento como parâmetros e verifica se o elemento está presente no array. A função deve retornar true se o elemento estiver presente e false caso contrário.
// let list4 = [10, 2 , 5, 11]
// function Verificacao (itens){
//     return itens.includes(2)
// }
// console.log(Verificacao(list4))
// // verifica se o valor inserido esta presente no array

// Desafio 4: Filtrar elementos de um array
// Crie uma função que recebe um array e uma função de filtro como parâmetros e retorna um novo array contendo apenas os elementos do array original que passam no teste da função de filtro.
// let list5 = [2,5,7,12,15]
// function Filtro(item) {
//     return item.filter((test)=> test >=10 )
// }
// console.log(Filtro(list5));

// Desafio 5: Ordenar elementos de um array
// Crie uma função que recebe um array de números como parâmetro e retorna um novo array contendo os mesmos números em ordem crescente.
//  let list6 = [8, 9, 1, 2, 3]
//  function Crescente(itens) {
//     return itens.sort()
//  }
//  console.log(Crescente(list6))