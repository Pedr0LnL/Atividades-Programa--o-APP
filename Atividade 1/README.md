# 🎮 Jogo da Velha em JavaScript

Este projeto implementa um jogo da velha completo usando **classes** em JavaScript, conforme solicitado na atividade de programação.

## 🏗️ Estrutura do Projeto

### Classes Implementadas

1. **`JogoDaVelha`** - Classe principal que gerencia o estado do jogo
   - Tabuleiro 3x3
   - Validação de jogadas
   - Detecção de vitória e empate
   - Controle de turnos

2. **`Jogador`** - Classe para gerenciar estatísticas dos jogadores
   - Contagem de vitórias, empates e derrotas
   - Métodos para atualizar estatísticas

3. **`JogoInterativo`** - Classe para jogar pelo console
   - Interface interativa com o usuário
   - Comandos especiais (status, reiniciar, ajuda, sair)

4. **`JogoComArray`** - Classe para executar sequências de jogadas
   - Recebe array de jogadas pré-definidas
   - Executa automaticamente

## 🚀 Como Executar

### Pré-requisitos
- Node.js instalado no computador

### Executar o Programa Principal
```bash
cd "Atividade 1"
node main.js
```

### Executar Jogo Interativo Diretamente
```bash
cd "Atividade 1"
node jogoInterativo.js
```

### Executar Exemplos com Array
```bash
cd "Atividade 1"
node jogoComArray.js
```

## 🎯 Funcionalidades

### 1. Jogo Interativo pelo Console
- Digite coordenadas no formato "linha coluna" (ex: "1 1")
- Comandos especiais:
  - `status` - Ver estatísticas dos jogadores
  - `reiniciar` - Iniciar novo jogo
  - `ajuda` - Ver comandos disponíveis
  - `sair` - Encerrar o programa

### 2. Jogo com Array de Jogadas
- Recebe um array de jogadas pré-definidas
- Executa automaticamente a sequência
- Exibe o progresso do jogo

### 3. Sistema de Estatísticas
- Conta vitórias, empates e derrotas
- Estatísticas por jogador
- Reset de estatísticas

## 📋 Formato do Array de Jogadas

```javascript
const jogadas = [
    { jogador: 'X', linha: 0, coluna: 0 }, // X no canto superior esquerdo
    { jogador: 'O', linha: 1, coluna: 1 }, // O no centro
    { jogador: 'X', linha: 0, coluna: 1 }, // X no meio da primeira linha
    // ... mais jogadas
];
```

## 🎮 Como Jogar

### Coordenadas do Tabuleiro
```
  0 1 2
  -----
0 | | | |
  -----
1 | | | |
  -----
2 | | | |
```

- **Linha**: 0 (superior), 1 (meio), 2 (inferior)
- **Coluna**: 0 (esquerda), 1 (meio), 2 (direita)

### Exemplos de Jogadas
- `"0 0"` - Canto superior esquerdo
- `"1 1"` - Centro do tabuleiro
- `"2 2"` - Canto inferior direito

## 🔧 Características Técnicas

- **Programação Orientada a Objetos** com classes
- **Validação de entrada** para coordenadas
- **Tratamento de erros** para jogadas inválidas
- **Interface amigável** com emojis e formatação
- **Modularidade** com arquivos separados por funcionalidade

## 📊 Exemplos Incluídos

O projeto inclui exemplos de:
- Jogo com vitória do jogador X
- Jogo com vitória do jogador O
- Jogo com empate
- Demonstração das classes

## 🎓 Aprendizados Aplicados

- **Classes e Objetos** em JavaScript
- **Métodos e Propriedades** de classes
- **Construtor** e inicialização de objetos
- **Encapsulamento** de dados e comportamentos
- **Modularização** de código
- **Interface de usuário** via console
- **Validação de dados** de entrada
- **Lógica de jogo** e algoritmos

## 🚀 Execução Rápida

Para testar rapidamente:

1. Abra o terminal na pasta "Atividade 1"
2. Execute: `node main.js`
3. Escolha a opção desejada no menu
4. Para jogar: escolha opção 3 (Jogar interativamente)

## 📝 Notas

- O jogo sempre começa com o jogador X
- As jogadas são validadas antes de serem executadas
- O programa detecta automaticamente vitórias e empates
- Todas as funcionalidades estão implementadas conforme solicitado na atividade

---

**Desenvolvido para a Atividade de Programação - Jogo da Velha com Classes em JavaScript** 🎯 