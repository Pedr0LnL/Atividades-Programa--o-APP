// 🎮 Exemplo Simples - Jogo da Velha com Classes
// Este arquivo demonstra o uso básico das classes implementadas

const JogoDaVelha = require('./JogoDaVelha');
const Jogador = require('./Jogador');

console.log('🎯 EXEMPLO SIMPLES - JOGO DA VELHA 🎯\n');

// 1. Criar jogadores
const jogadorX = new Jogador('X', 'Alice');
const jogadorO = new Jogador('O', 'Bob');

console.log('✅ Jogadores criados:');
console.log(`   ${jogadorX.nome} (${jogadorX.simbolo})`);
console.log(`   ${jogadorO.nome} (${jogadorO.simbolo})\n`);

// 2. Criar um novo jogo
const jogo = new JogoDaVelha();
console.log('✅ Jogo criado!');
console.log(`   Jogador atual: ${jogo.jogadorAtual}`);
console.log(`   Jogo ativo: ${jogo.jogoAtivo}\n`);

// 3. Exibir tabuleiro inicial
console.log('📋 Tabuleiro inicial:');
jogo.exibirTabuleiro();

// 4. Fazer algumas jogadas
console.log('🎮 Fazendo jogadas...\n');

// Jogada 1: X no centro
console.log('Jogada 1: X no centro [1][1]');
let resultado = jogo.fazerJogada(1, 1);
console.log(`   Resultado: ${resultado.mensagem}`);
jogo.exibirTabuleiro();

// Jogada 2: O no canto superior esquerdo
console.log('Jogada 2: O no canto superior esquerdo [0][0]');
resultado = jogo.fazerJogada(0, 0);
console.log(`   Resultado: ${resultado.mensagem}`);
jogo.exibirTabuleiro();

// Jogada 3: X no canto inferior direito
console.log('Jogada 3: X no canto inferior direito [2][2]');
resultado = jogo.fazerJogada(2, 2);
console.log(`   Resultado: ${resultado.mensagem}`);
jogo.exibirTabuleiro();

// Jogada 4: O no meio da primeira linha
console.log('Jogada 4: O no meio da primeira linha [0][1]');
resultado = jogo.fazerJogada(0, 1);
console.log(`   Resultado: ${resultado.mensagem}`);
jogo.exibirTabuleiro();

// Jogada 5: X no canto inferior esquerdo (VITÓRIA!)
console.log('Jogada 5: X no canto inferior esquerdo [2][0]');
resultado = jogo.fazerJogada(2, 0);
console.log(`   Resultado: ${resultado.mensagem}`);
jogo.exibirTabuleiro();

// 5. Verificar resultado final
if (jogo.vencedor) {
    if (jogo.vencedor === 'X') {
        jogadorX.registrarVitoria();
        jogadorO.registrarDerrota();
    } else {
        jogadorO.registrarVitoria();
        jogadorX.registrarDerrota();
    }
} else if (!jogo.jogoAtivo) {
    jogadorX.registrarEmpate();
    jogadorO.registrarEmpate();
}

// 6. Exibir estatísticas
console.log('📊 ESTATÍSTICAS FINAIS:');
jogadorX.exibirEstatisticas();
jogadorO.exibirEstatisticas();

// 7. Demonstrar reinício do jogo
console.log('\n🔄 Reiniciando o jogo...');
jogo.reiniciarJogo();
jogo.exibirTabuleiro();

console.log('\n✅ Exemplo concluído com sucesso!');
console.log('🎮 Para jogar interativamente, execute: node jogoInterativo.js');
console.log('📋 Para ver mais exemplos, execute: node jogoComArray.js');
console.log('🏠 Para o programa principal, execute: node main.js'); 