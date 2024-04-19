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

function verificaSeEhImpar(numero){
    if ((numero % 2 === 0) && (numero < 100)) {
        return false
    } else {
        return true
    }
}

    for (let impares = 1; impares < 100; impares++)
        if (verificaSeEhImpar(impares)) {
            console.log(impares)
        }

        

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

