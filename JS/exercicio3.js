
class Produto {

    #id
    #nome    
    #preco
    #estoque

    constructor(id, nome, preco, estoque) {
        this.#id = id
        this.#nome = nome
        this.#preco = preco
        this.#estoque = estoque
    }

    
    get id () {
        return this.#id
    }

    get nome () {
        return this.#nome
    }

    set id (value) {
        this.#id = value
    }

    set nome (value) {
        this.#nome = value
    }

    //método que mostra o produto da loja e todas as suas informações
    obterProdutosDaLoja() {
        return ` O Id do produto é ${this.id}.\n O nome do produto é ${this.nome}.\n O preço do seu produto é R$ ${this.pegaPreco()}.\n Nossa quantidade desse produto em estoque é ${this.mostrarEstoque()}.`
    }

    //método para pegar o preço do produto
    pegaPreco() {
        return this.#preco
    }
    
    //método para atualizar o preço do produto
    alteraPreco(novoPreco) {
        this.#preco = novoPreco
    }

    //método para mostrar estoque 
    mostrarEstoque() {
        return this.#estoque
    }

    //método para adicionar item no estoque
    adicionarItemNoEstoque(quantidade){
        this.#estoque += quantidade
    }

    //método para remover item do estoque
    removerItemDoEstoque(quantidade) {
        if (this.#estoque >= quantidade) {
            this.#estoque -= quantidade
        } else {
            console.log('Você não consegue excluir mais itens, pois seu estoque está zerado!')
        }
    }

}

let produto = new Produto(12345, 'Mouse', 52, 100)

// executando o método que apresenta todos os produtos
console.log(produto.obterProdutosDaLoja())

// executando o método que altera preço 
produto.alteraPreco(41)
console.log(`Saldão de black friday! O novo preço para o produto é R$: ${produto.pegaPreco()}!`)

// executa o método adicionar item no estoque
produto.adicionarItemNoEstoque(2)
console.log(`Opa! Você acrescentou mais dois produtos em seu estoque: ${produto.mostrarEstoque()}.`)

// executa o método de remover item do estoque
produto.removerItemDoEstoque(10)
console.log(`Opa! Você removeu dez produtos em seu estoque e seu estoque no momento está: ${produto.mostrarEstoque()}.`)

// executa o else do método de remover item do estoque mostrando que seu estoque já está zerado então não tem como remover mais que isso. 
produto.removerItemDoEstoque(95)



class ProdutoImportado extends Produto {

    paisDeOrigem
    taxaDeImportacao

    constructor(id, nome, preco, estoque, paisDeOrigem, taxaDeImportacao) {
        super(id, nome, preco, estoque)
        this.paisDeOrigem = paisDeOrigem
        this.taxaDeImportacao = taxaDeImportacao
    }

    mostraInfos() {
        return ` O Id do produto é ${this.id}.\n O nome do produto é ${this.nome}.\n O preço do seu produto é R$ ${this.pegaPreco()}.\n Nossa quantidade desse produto em estoque é ${this.mostrarEstoque()}.\n Seu país de origem é: ${this.paisDeOrigem}.\n Sua taxa de importação é R$ ${this.taxaDeImportacao}.`
    }

}

let produtoImportado = new ProdutoImportado(6789, 'Nintendo Switch', 1500, 25, 'Estados Unidos', 150)

console.log(produtoImportado.mostraInfos())