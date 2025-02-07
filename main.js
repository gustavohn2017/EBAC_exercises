class Produto {
    constructor(nome, preco, marca, estoque) {
        this.nome = nome;
        this.preco = preco;
        this.marca = marca;
        this.estoque = estoque;
    }
}


class Roupas extends Produto {
    constructor(nome, preco, marca, estoque, tamanho, cor) {
        super(nome, preco, marca, estoque);
        this.tamanho = tamanho;
        this.cor = cor;
    }
}

class Calcados extends Produto {
    constructor(nome, preco, marca, estoque, tamanho, material) {
        super(nome, preco, marca, estoque);
        this.tamanho = tamanho;
        this.material = material;
    }
}


const camiseta = new Roupas('Camiseta', 200, 'Nike', 10, 'M', 'Azul');
const tenis = new Calcados('Tênis', 400, 'Adidas', 5, 42, 'Couro');
const shorts = new Roupas('Shorts', 100, 'Puma', 8, 'G', 'Preto');

console.log(camiseta);
console.log(`Marca do produto: ${camiseta.marca}, Tamanho: ${camiseta.tamanho}`);


console.log(tenis);
console.log(`Marca do produto: ${tenis.marca}, Material: ${tenis.material}`);

console.log(shorts);
console.log(`Marca do produto: ${shorts.marca}, Preco: ${shorts.preco}`);