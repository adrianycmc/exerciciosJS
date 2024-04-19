// Enunciado: Criar uma Promise com um manipulador de tempo com intervalo de 5 segundos. 
// O objetivo da criação desta Promise é proporcionar à aplicação a execução de 3 tarefas específicas - a seguir:


// a) Criar um loop que exibirá um intervalo de valores que vai de 1 até 20


function intervalo() {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
        for(let num = 1; num <= 20; num++) {
            console.log(num)
            }
            resolve()
        }, 5000) 
    })
}
intervalo()



// b) Criar um novo loop que imprime os intervalos de números ímpares menores do que 100;

// function verificaSeEhImpar(numero){
//     return new Promise((resolve, reject) => {
//         setTimeout (() => {
//             if ((numero % 2 === 0) && (numero < 100)) {
//                 resolve(numero)
//             } else {
//                 reject(new Error('Ei cara! Seu número é par ou maior que 100. =/'))
//             }
//         }, 10000)    
//     })
// }

// function osImpares() {
//     for (let impares = 1; impares < 100; impares++) {
//         verificaSeEhImpar(impares)
//             .then(numeroImpar => {
//                 console.log(numeroImpar)
//         })
//         .cacth(error => {
//         })
//      }
// }

// osImpares()
    
// function verificaSeEhImpar(numero) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if ((numero % 2 !== 0) && (numero < 100)) {
//                 resolve(numero);
//             } else {
//                 reject(new Error("Número não é ímpar ou é maior ou igual a 100."));
//             }
//         }, 5000); // 5000 milissegundos = 5 segundos
//     });
// }

// // Função para exibir apenas os números ímpares
// function exibirImpares() {
//     for (let impares = 1; impares < 100; impares++) {
//         verificaSeEhImpar(impares)
//             .then(numeroImpar => {
//                 console.log(numeroImpar);
//                 // Aqui você pode continuar com o código após verificar e imprimir o número ímpar
//             })
//             .catch(error => {
//                 // Não faz nada se o número não for ímpar ou for maior ou igual a 100
//             });
//     }
// }

// // Chamada da função para exibir apenas os números ímpares
// exibirImpares();



//c) Imprimir a tabuada do número 9

function superTabuada() {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            for(let nums = 0; nums <= 10; nums++){
                let tabuadaDe9 = nums*9
                console.log(tabuadaDe9)  
            }
            resolve()
        }, 10000)
    })
}
superTabuada()

// todosABC(intervalo, verificaSeEhImpar, superTabuada)*/