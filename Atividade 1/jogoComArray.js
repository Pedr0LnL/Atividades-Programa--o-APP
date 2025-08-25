const JogoDaVelha = require('./JogoDaVelha');

class JogoComArray {
    constructor() {
        this.jogo = new JogoDaVelha();
    }

    // Joga uma sequência de jogadas pré-definidas
    jogarSequencia(jogadas) {
        console.log('🎮 JOGO DA VELHA COM ARRAY DE JOGADAS 🎮\n');
        
        // Valida o formato das jogadas
        if (!Array.isArray(jogadas) || jogadas.length === 0) {
            console.log('❌ Array de jogadas inválido!');
            return;
        }

        // Exibe as jogadas que serão executadas
        console.log('📋 Sequência de jogadas a serem executadas:');
        jogadas.forEach((jogada, index) => {
            console.log(`   ${index + 1}. Jogador ${jogada.jogador} → [${jogada.linha}][${jogada.coluna}]`);
        });
        console.log('');

        // Executa as jogadas
        this.jogo.jogarSequencia(jogadas);
    }

    // Exemplo de uso com diferentes cenários
    executarExemplos() {
        console.log('🚀 EXECUTANDO EXEMPLOS DE JOGOS 🚀\n');

        // Exemplo 1: Jogo com vitória do X
        console.log('=== EXEMPLO 1: Vitória do X ===');
        const jogo1 = new JogoDaVelha();
        const jogadas1 = [
            { jogador: 'X', linha: 0, coluna: 0 }, // X no canto superior esquerdo
            { jogador: 'O', linha: 1, coluna: 1 }, // O no centro
            { jogador: 'X', linha: 0, coluna: 1 }, // X no meio da primeira linha
            { jogador: 'O', linha: 2, coluna: 2 }, // O no canto inferior direito
            { jogador: 'X', linha: 0, coluna: 2 }  // X completa a primeira linha (VITÓRIA!)
        ];
        jogo1.jogarSequencia(jogadas1);

        console.log('\n' + '='.repeat(50) + '\n');

        // Exemplo 2: Jogo com empate
        console.log('=== EXEMPLO 2: Empate ===');
        const jogo2 = new JogoDaVelha();
        const jogadas2 = [
            { jogador: 'X', linha: 0, coluna: 0 }, // X no canto superior esquerdo
            { jogador: 'O', linha: 0, coluna: 1 }, // O no meio da primeira linha
            { jogador: 'X', linha: 0, coluna: 2 }, // X no canto superior direito
            { jogador: 'O', linha: 1, coluna: 0 }, // O no meio da primeira coluna
            { jogador: 'X', linha: 1, coluna: 1 }, // X no centro
            { jogador: 'O', linha: 1, coluna: 2 }, // O no meio da terceira coluna
            { jogador: 'X', linha: 2, coluna: 0 }, // X no canto inferior esquerdo
            { jogador: 'O', linha: 2, coluna: 1 }, // O no meio da última linha
            { jogador: 'X', linha: 2, coluna: 2 }  // X no canto inferior direito (EMPATE!)
        ];
        jogo2.jogarSequencia(jogadas2);

        console.log('\n' + '='.repeat(50) + '\n');

        // Exemplo 3: Jogo com vitória do O
        console.log('=== EXEMPLO 3: Vitória do O ===');
        const jogo3 = new JogoDaVelha();
        const jogadas3 = [
            { jogador: 'X', linha: 0, coluna: 0 }, // X no canto superior esquerdo
            { jogador: 'O', linha: 1, coluna: 1 }, // O no centro
            { jogador: 'X', linha: 2, coluna: 2 }, // X no canto inferior direito
            { jogador: 'O', linha: 0, coluna: 1 }, // O no meio da primeira linha
            { jogador: 'X', linha: 2, coluna: 0 }, // X no canto inferior esquerdo
            { jogador: 'O', linha: 0, coluna: 2 }  // O no canto superior direito (VITÓRIA!)
        ];
        jogo3.jogarSequencia(jogadas3);
    }

    // Executa um jogo personalizado
    executarJogoPersonalizado(jogadas) {
        console.log('🎯 JOGO PERSONALIZADO 🎯\n');
        this.jogarSequencia(jogadas);
    }
}

// Exemplo de uso se este arquivo for executado diretamente
if (require.main === module) {
    const jogoArray = new JogoComArray();
    
    // Executa os exemplos
    jogoArray.executarExemplos();
    
    // Exemplo de jogo personalizado
    console.log('\n' + '='.repeat(50) + '\n');
    console.log('🎮 JOGO PERSONALIZADO 🎮\n');
    
    const jogoPersonalizado = [
        { jogador: 'X', linha: 1, coluna: 1 }, // X no centro
        { jogador: 'O', linha: 0, coluna: 0 }, // O no canto superior esquerdo
        { jogador: 'X', linha: 2, coluna: 2 }, // X no canto inferior direito
        { jogador: 'O', linha: 0, coluna: 2 }, // O no canto superior direito
        { jogador: 'X', linha: 2, coluna: 0 }  // X no canto inferior esquerdo
    ];
    
    jogoArray.executarJogoPersonalizado(jogoPersonalizado);
}

module.exports = JogoComArray; 