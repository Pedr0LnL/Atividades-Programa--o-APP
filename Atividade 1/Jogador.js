class Jogador {
    constructor(simbolo, nome) {
        this.simbolo = simbolo; // 'X' ou 'O'
        this.nome = nome || `Jogador ${simbolo}`;
        this.vitorias = 0;
        this.empates = 0;
        this.derrotas = 0;
    }

    // Registra uma vitória
    registrarVitoria() {
        this.vitorias++;
        console.log(`🏆 ${this.nome} venceu! Total de vitórias: ${this.vitorias}`);
    }

    // Registra um empate
    registrarEmpate() {
        this.empates++;
        console.log(`🤝 ${this.nome} empatou! Total de empates: ${this.empates}`);
    }

    // Registra uma derrota
    registrarDerrota() {
        this.derrotas++;
        console.log(`😔 ${this.nome} perdeu! Total de derrotas: ${this.derrotas}`);
    }

    // Exibe estatísticas do jogador
    exibirEstatisticas() {
        console.log(`\n📊 Estatísticas de ${this.nome}:`);
        console.log(`   Vitórias: ${this.vitorias}`);
        console.log(`   Empates: ${this.empates}`);
        console.log(`   Derrotas: ${this.derrotas}`);
        console.log(`   Total de jogos: ${this.vitorias + this.empates + this.derrotas}`);
    }

    // Reseta estatísticas
    resetarEstatisticas() {
        this.vitorias = 0;
        this.empates = 0;
        this.derrotas = 0;
        console.log(`🔄 Estatísticas de ${this.nome} resetadas!`);
    }
}

module.exports = Jogador; 