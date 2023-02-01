//2 Crie uma função que verifique se uma string é um palíndromo. Explicação: Essa função deve verificar se uma string é igual quando lida de trás para frente.
// const text= "";
// function Palindrome(str) {
//     let after= str.split('').reverse().join('')
//     if(after===str){
//         return 'true'
//     } else {
//         return 'false'
//     }    
// }
// console.log(Palindrome(text))
// split= ele cria uma nova variavel pra não ter que perder a antiga; Reverse= coloca os numeros de tras pra frente; join= transforma a lista em uma string.


// 3 Crie uma função que ordene uma lista de números em ordem crescente. Explicação: Essa função deve percorrer uma lista de números e ordená-los de forma crescente.
// let numbers=[4,0,1,2,3]
// function Crescent (list){
//     return list.sort()
// }
// console.log(Crescent(numbers))
// Sort= coloca os numeros em ordem crescente.

// erro
// 4 Crie uma função que conte o número de ocorrências de uma determinada letra em uma string. Explicação: Essa função deve percorrer uma string e contar quantas vezes uma determinada letra aparece.
// var str= "letictia"
// var letter="t"
// function OcurrenceNumber(params, secondParams) {
//     let result = params.split('').map((element) => {
//         if(element == secondParams) {
//             return element.length
//         } else {
//             return value
//         }
//     })
//     return result
// }
// console.log(OcurrenceNumber(str,letter))



// 5 Crie uma função que calcule a média de uma lista de números. Explicação: Essa função deve percorrer uma lista de números e calcular a média aritmética dos valores.
// let lista = [9, 8 ,7]
// let dividir= lista.length
// function Media(elementos,divisor){
//     let soma = 0
//     for(let i in elementos) {
//       soma += elementos[i]
//     }
//       let sum = ( soma) / (divisor)
//         return sum
// }
// console.log(Media(lista,dividir));
// console.log(dividir);


//6 Crie uma função que verifique se um número é primo. Explicação: Essa função deve verificar se um número é divisível somente por 1 e por ele mesmo.
// var numbers=;
// var times vezes=0;
// function Primos(verificar){
//  for(var i=0 ; i<=verificar ; i++)
//     if(verificar % i == 0)
//     vezes++;
//     if(vezes==2)
//     return "e primo"
//     else
//     return "nao e primo"
// }
// console.log(Primos(numero));


//7  Crie uma função que remova todos os elementos duplicados de uma lista. Explicação: Essa função deve percorrer uma lista e remover todos os elementos que aparecem mais de uma vez.
// let numbers = [ 2, 3, 7, 3, 5, 2]
// function Remover (lista) {
//     return new Set(lista)
// }
// console.log(Remover(numbers)); 



//8  Crie uma função que verifique se todos os elementos de uma lista são iguais. Explicação: Essa função deve percorrer uma lista e verificar se todos os elementos são iguais.
// let elements = [1,1,1,1,2]

// function Equal(list){
//     for (let i = 1; i < list.length; i++){
//         if(list[i] !== list[0]) {
//             return 'diferentes';
//         }
//     }
//     return 'iguais'
// }
// console.log(Equal(elements));


//9 Crie uma função que invoque outra função de forma recursiva. Explicação: Essa função deve invocar outra função de forma recursiva até que uma condição seja satisfeita.



//10 Crie uma função que converta uma string em caixa alta. Explicação: Essa função deve percorrer uma string e converter todas as letras para maiúsculas.
// let str = "leticia"
// function UpperCase(convert){
//     let letter = convert.toUpperCase()
//     return letter
// }
// console.log(UpperCase(str));
// .toUpperCase()=deixa tudo maiusculo
