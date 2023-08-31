class Heroi {
	constructor(nome, idade, tipo) {
		this.nome = nome
		this.idade = idade
		this.tipo = tipo
	}

	atacar() {
		switch(this.tipo) {
			case 'mago':
				console.log(`o ${this.tipo} atacou usando magia`)
				break
			case 'guerreiro':
				console.log(`o ${this.tipo} atacou usando espada`)
				break
			case 'monge':
				console.log(`o ${this.tipo} atacou usando artes marciais`)
				break
			case 'ninja':
				console.log(`o ${this.tipo} atacou usando shuriken`)
				break
			default:
				console.log('ataque inválido!')
		}
	}
}

var novoGuerreiro = new Heroi('Hércules', 48, 'guerreiro')
novoGuerreiro.atacar()