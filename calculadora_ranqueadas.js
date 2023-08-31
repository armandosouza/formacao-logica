var nivel

function calculadoraRanqueada(vitorias, derrotas) {
	if(vitorias < 10) {
		nivel = "Ferro"
	} else if(vitorias >= 10 && vitorias <= 20) {
		nivel = "Bronze"
	} else if(vitorias > 20 && vitorias <= 50) {
		nivel = "Prata"
	} else if(vitorias > 50 && vitorias <= 80) {
		nivel = "Ouro"
	} else if(vitorias > 80 && vitorias <= 90) {
		nivel = "Diamante"
	} else if(vitorias > 90 && vitorias <= 100) {
		nivel = "Lendário"
	} else {
		nivel = "Imortal"
	}
	return vitorias - derrotas
}


var saldoVitorias = calculadoraRanqueada(75, 29)

console.log(`O herói tem de saldo ${saldoVitorias} KD e seu nível é ${nivel}`)