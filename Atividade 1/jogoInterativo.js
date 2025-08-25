const JogoDaVelha = require('./JogoDaVelha');
const Jogador = require('./Jogador');
const readline = require('readline');

class JogoInterativo {
    constructor() {
        this.jogo = new JogoDaVelha();
        this.jogadorX = new Jogador('X', 'Jogador X');
        this.jogadorO = new Jogador('O', 'Jogador O');
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    // Inicia o jogo interativo
    iniciarJogo() {
        console.log('🎮 BEM-VINDO AO JOGO DA VELHA! 🎮\n');
        console.log('Como jogar:');
        console.log('- Digite a linha (0-2) e coluna (0-2) separadas por espaço');
        console.log('- Exemplo: "1 1" para jogar no centro');
        console.log('- Digite "sair" para encerrar');
        console.log('- Digite "status" para ver estatísticas');
        console.log('- Digite "reiniciar" para novo jogo\n');

        this.exibirTabuleiro();
        this.fazerPergunta();
    }

    // Exibe o tabuleiro atual
    exibirTabuleiro() {
        this.jogo.exibirTabuleiro();
        this.jogo.exibirStatus();
    }

    // Faz a pergunta para o jogador atual
    fazerPergunta() {
        this.rl.question(`Sua vez, ${this.jogo.jogadorAtual === 'X' ? this.jogadorX.nome : this.jogadorO.nome}: `, (resposta) => {
            this.processarResposta(resposta);
        });
    }

    // Processa a resposta do usuário
    processarResposta(resposta) {
        const comando = resposta.trim().toLowerCase();

        switch (comando) {
            case 'sair':
                this.finalizarJogo();
                return;
            case 'status':
                this.exibirEstatisticas();
                this.fazerPergunta();
                return;
            case 'reiniciar':
                this.reiniciarJogo();
                this.fazerPergunta();
                return;
            case 'ajuda':
                this.exibirAjuda();
                this.fazerPergunta();
                return;
        }

        // Processa jogada
        const coordenadas = resposta.trim().split(/\s+/);
        if (coordenadas.length !== 2) {
            console.log('❌ Formato inválido! Use: "linha coluna" (ex: "1 1")');
            this.fazerPergunta();
            return;
        }

        const linha = parseInt(coordenadas[0]);
        const coluna = parseInt(coordenadas[1]);

        if (isNaN(linha) || isNaN(coluna)) {
            console.log('❌ Digite apenas números!');
            this.fazerPergunta();
            return;
        }

        this.fazerJogada(linha, coluna);
    }

    // Faz uma jogada
    fazerJogada(linha, coluna) {
        const resultado = this.jogo.fazerJogada(linha, coluna);
        
        if (resultado.sucesso) {
            console.log(`✅ ${resultado.mensagem}`);
            
            // Atualiza estatísticas se o jogo terminou
            if (this.jogo.vencedor) {
                if (this.jogo.vencedor === 'X') {
                    this.jogadorX.registrarVitoria();
                    this.jogadorO.registrarDerrota();
                } else {
                    this.jogadorO.registrarVitoria();
                    this.jogadorX.registrarDerrota();
                }
            } else if (!this.jogo.jogoAtivo) {
                this.jogadorX.registrarEmpate();
                this.jogadorO.registrarEmpate();
            }
        } else {
            console.log(`❌ ${resultado.mensagem}`);
        }

        this.exibirTabuleiro();

        // Continua o jogo ou pergunta se quer jogar novamente
        if (this.jogo.jogoAtivo) {
            this.fazerPergunta();
        } else {
            this.perguntarNovoJogo();
        }
    }

    // Pergunta se quer jogar novamente
    perguntarNovoJogo() {
        this.rl.question('Quer jogar novamente? (s/n): ', (resposta) => {
            if (resposta.toLowerCase().startsWith('s')) {
                this.reiniciarJogo();
                this.fazerPergunta();
            } else {
                this.finalizarJogo();
            }
        });
    }

    // Reinicia o jogo
    reiniciarJogo() {
        this.jogo.reiniciarJogo();
        console.log('\n🔄 Novo jogo iniciado!\n');
        this.exibirTabuleiro();
    }

    // Exibe estatísticas dos jogadores
    exibirEstatisticas() {
        console.log('\n📊 ESTATÍSTICAS DOS JOGADORES:');
        this.jogadorX.exibirEstatisticas();
        this.jogadorO.exibirEstatisticas();
    }

    // Exibe ajuda
    exibirAjuda() {
        console.log('\n❓ AJUDA:');
        console.log('- Digite "linha coluna" para jogar (ex: "0 0", "1 1", "2 2")');
        console.log('- Digite "status" para ver estatísticas');
        console.log('- Digite "reiniciar" para novo jogo');
        console.log('- Digite "sair" para encerrar');
        console.log('- Digite "ajuda" para ver esta mensagem');
    }

    // Finaliza o jogo
    finalizarJogo() {
        console.log('\n👋 Obrigado por jogar! Até a próxima! 👋');
        this.exibirEstatisticas();
        this.rl.close();
    }
}

// Inicia o jogo se este arquivo for executado diretamente
if (require.main === module) {
    const jogo = new JogoInterativo();
    jogo.iniciarJogo();
}

module.exports = JogoInterativo; 