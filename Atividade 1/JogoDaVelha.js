class JogoDaVelha {
    constructor() {
        this.tabuleiro = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
        this.jogadorAtual = 'X';
        this.jogadas = [];
        this.jogoAtivo = true;
        this.vencedor = null;
    }

    // Faz uma jogada em uma posição específica
    fazerJogada(linha, coluna) {
        // Verifica se a posição é válida
        if (linha < 0 || linha > 2 || coluna < 0 || coluna > 2) {
            return { sucesso: false, mensagem: 'Posição inválida! Use números de 0 a 2.' };
        }

        // Verifica se a posição está vazia
        if (this.tabuleiro[linha][coluna] !== ' ') {
            return { sucesso: false, mensagem: 'Posição já ocupada!' };
        }

        // Verifica se o jogo ainda está ativo
        if (!this.jogoAtivo) {
            return { sucesso: false, mensagem: 'Jogo já terminou!' };
        }

        // Faz a jogada
        this.tabuleiro[linha][coluna] = this.jogadorAtual;
        this.jogadas.push({
            jogador: this.jogadorAtual,
            linha: linha,
            coluna: coluna
        });

        // Verifica se há um vencedor
        if (this.verificarVencedor(linha, coluna)) {
            this.vencedor = this.jogadorAtual;
            this.jogoAtivo = false;
            return { sucesso: true, mensagem: `Jogador ${this.jogadorAtual} venceu!` };
        }

        // Verifica se é empate
        if (this.verificarEmpate()) {
            this.jogoAtivo = false;
            return { sucesso: true, mensagem: 'Empate!' };
        }

        // Troca o jogador
        this.jogadorAtual = this.jogadorAtual === 'X' ? 'O' : 'X';
        return { sucesso: true, mensagem: `Jogada realizada! Vez do jogador ${this.jogadorAtual}` };
    }

    // Verifica se há um vencedor
    verificarVencedor(linha, coluna) {
        const jogador = this.tabuleiro[linha][coluna];

        // Verifica linha
        if (this.tabuleiro[linha][0] === jogador && 
            this.tabuleiro[linha][1] === jogador && 
            this.tabuleiro[linha][2] === jogador) {
            return true;
        }

        // Verifica coluna
        if (this.tabuleiro[0][coluna] === jogador && 
            this.tabuleiro[1][coluna] === jogador && 
            this.tabuleiro[2][coluna] === jogador) {
            return true;
        }

        // Verifica diagonal principal
        if (linha === coluna) {
            if (this.tabuleiro[0][0] === jogador && 
                this.tabuleiro[1][1] === jogador && 
                this.tabuleiro[2][2] === jogador) {
                return true;
            }
        }

        // Verifica diagonal secundária
        if (linha + coluna === 2) {
            if (this.tabuleiro[0][2] === jogador && 
                this.tabuleiro[1][1] === jogador && 
                this.tabuleiro[2][0] === jogador) {
                return true;
            }
        }

        return false;
    }

    // Verifica se é empate
    verificarEmpate() {
        for (let linha = 0; linha < 3; linha++) {
            for (let coluna = 0; coluna < 3; coluna++) {
                if (this.tabuleiro[linha][coluna] === ' ') {
                    return false;
                }
            }
        }
        return true;
    }

    // Exibe o tabuleiro no console
    exibirTabuleiro() {
        console.log('\n  0 1 2');
        console.log('  -----');
        for (let i = 0; i < 3; i++) {
            let linha = `${i} |`;
            for (let j = 0; j < 3; j++) {
                linha += `${this.tabuleiro[i][j]}|`;
            }
            console.log(linha);
            if (i < 2) console.log('  -----');
        }
        console.log('');
    }

    // Exibe o status atual do jogo
    exibirStatus() {
        if (this.vencedor) {
            console.log(`🎉 Jogador ${this.vencedor} venceu! 🎉`);
        } else if (!this.jogoAtivo) {
            console.log('🤝 Empate!');
        } else {
            console.log(`📝 Vez do jogador: ${this.jogadorAtual}`);
        }
    }

    // Reinicia o jogo
    reiniciarJogo() {
        this.tabuleiro = [
            [' ', ' ', ' '],
            [' ', ' ', ' '],
            [' ', ' ', ' ']
        ];
        this.jogadorAtual = 'X';
        this.jogadas = [];
        this.jogoAtivo = true;
        this.vencedor = null;
        console.log('🔄 Jogo reiniciado!');
    }

    // Joga uma sequência de jogadas
    jogarSequencia(jogadas) {
        console.log('🎮 Iniciando sequência de jogadas...\n');
        
        for (let i = 0; i < jogadas.length; i++) {
            const jogada = jogadas[i];
            console.log(`Jogada ${i + 1}: Jogador ${jogada.jogador} na posição [${jogada.linha}][${jogada.coluna}]`);
            
            const resultado = this.fazerJogada(jogada.linha, jogada.coluna);
            if (!resultado.sucesso) {
                console.log(`❌ Erro: ${resultado.mensagem}`);
                break;
            }
            
            this.exibirTabuleiro();
            this.exibirStatus();
            
            if (!this.jogoAtivo) {
                break;
            }
            
            console.log('---');
        }
        
        if (this.jogoAtivo) {
            console.log('✅ Sequência de jogadas concluída!');
        }
    }
}

module.exports = JogoDaVelha; 