const JogoDaVelha = require('./JogoDaVelha');
const Jogador = require('./Jogador');
const JogoInterativo = require('./jogoInterativo');
const JogoComArray = require('./jogoComArray');

class Main {
    constructor() {
        console.log('🎮 JOGO DA VELHA COMPLETO EM JAVASCRIPT 🎮\n');
        console.log('Este projeto demonstra o uso de classes para criar um jogo da velha completo!');
        console.log('Funcionalidades implementadas:');
        console.log('✅ Classe JogoDaVelha - Gerencia o estado do jogo');
        console.log('✅ Classe Jogador - Controla estatísticas dos jogadores');
        console.log('✅ Jogo interativo pelo console');
        console.log('✅ Jogo com array de jogadas pré-definidas');
        console.log('✅ Validação de jogadas e detecção de vitória/empate');
        console.log('✅ Sistema de estatísticas');
        console.log('');
    }

    // Demonstra o uso básico das classes
    demonstrarClasses() {
        console.log('🏗️  DEMONSTRAÇÃO DAS CLASSES 🏗️\n');

        // Cria jogadores
        const jogadorX = new Jogador('X', 'Alice');
        const jogadorO = new Jogador('O', 'Bob');

        console.log('Jogadores criados:');
        console.log(`- ${jogadorX.nome} (${jogadorX.simbolo})`);
        console.log(`- ${jogadorO.nome} (${jogadorO.simbolo})\n`);

        // Cria um jogo
        const jogo = new JogoDaVelha();
        console.log('Jogo criado com sucesso!');
        console.log(`Jogador atual: ${jogo.jogadorAtual}`);
        console.log(`Jogo ativo: ${jogo.jogoAtivo}\n`);

        // Faz algumas jogadas
        console.log('Fazendo algumas jogadas de exemplo...\n');
        
        const jogadas = [
            { linha: 1, coluna: 1 }, // Centro
            { linha: 0, coluna: 0 }, // Canto superior esquerdo
            { linha: 2, coluna: 2 }, // Canto inferior direito
            { linha: 0, coluna: 1 }, // Meio da primeira linha
            { linha: 2, coluna: 0 }  // Canto inferior esquerdo
        ];

        for (let i = 0; i < jogadas.length; i++) {
            const jogada = jogadas[i];
            console.log(`Jogada ${i + 1}:`);
            const resultado = jogo.fazerJogada(jogada.linha, jogada.coluna);
            console.log(`Resultado: ${resultado.mensagem}`);
            jogo.exibirTabuleiro();
            
            if (jogo.vencedor) {
                if (jogo.vencedor === 'X') {
                    jogadorX.registrarVitoria();
                    jogadorO.registrarDerrota();
                } else {
                    jogadorO.registrarVitoria();
                    jogadorX.registrarDerrota();
                }
                break;
            } else if (!jogo.jogoAtivo) {
                jogadorX.registrarEmpate();
                jogadorO.registrarEmpate();
                break;
            }
        }

        // Exibe estatísticas
        console.log('📊 ESTATÍSTICAS FINAIS:');
        jogadorX.exibirEstatisticas();
        jogadorO.exibirEstatisticas();
    }

    // Demonstra o jogo com array
    demonstrarJogoComArray() {
        console.log('\n' + '='.repeat(60));
        console.log('🎯 DEMONSTRAÇÃO DO JOGO COM ARRAY DE JOGADAS 🎯');
        console.log('='.repeat(60) + '\n');

        const jogoArray = new JogoComArray();
        jogoArray.executarExemplos();
    }

    // Menu principal
    exibirMenu() {
        console.log('\n📋 MENU PRINCIPAL:');
        console.log('1. Demonstrar uso das classes');
        console.log('2. Executar exemplos com array de jogadas');
        console.log('3. Jogar interativamente');
        console.log('4. Sair');
        console.log('');
    }

    // Executa a opção selecionada
    executarOpcao(opcao) {
        switch (opcao) {
            case '1':
                this.demonstrarClasses();
                break;
            case '2':
                this.demonstrarJogoComArray();
                break;
            case '3':
                console.log('\n🎮 Iniciando jogo interativo...\n');
                const jogoInterativo = new JogoInterativo();
                jogoInterativo.iniciarJogo();
                return; // Não volta ao menu
            case '4':
                console.log('\n👋 Obrigado por usar o Jogo da Velha! Até a próxima! 👋');
                process.exit(0);
            default:
                console.log('❌ Opção inválida! Escolha 1, 2, 3 ou 4.');
        }
        
        // Volta ao menu (exceto para jogo interativo)
        this.exibirMenu();
    }

    // Inicia o programa
    iniciar() {
        this.exibirMenu();
        
        const readline = require('readline');
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        const fazerPergunta = () => {
            rl.question('Escolha uma opção (1-4): ', (resposta) => {
                this.executarOpcao(resposta.trim());
                fazerPergunta();
            });
        };

        fazerPergunta();
    }
}

// Executa o programa se este arquivo for executado diretamente
if (require.main === module) {
    const main = new Main();
    main.iniciar();
}

module.exports = Main; 