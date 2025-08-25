# 📥 Instalação do Node.js

Para executar este projeto, você precisa ter o **Node.js** instalado no seu computador.

## 🚀 Como Instalar o Node.js

### Opção 1: Download Direto (Recomendado)
1. Acesse [nodejs.org](https://nodejs.org)
2. Baixe a versão **LTS** (Long Term Support)
3. Execute o instalador e siga as instruções
4. Reinicie o terminal após a instalação

### Opção 2: Via Chocolatey (Windows)
```powershell
choco install nodejs
```

### Opção 3: Via Winget (Windows 10/11)
```powershell
winget install OpenJS.NodeJS
```

## ✅ Verificar Instalação

Após a instalação, abra um **novo terminal** e execute:

```bash
node --version
npm --version
```

Você deve ver as versões instaladas.

## 🎮 Executar o Projeto

Com o Node.js instalado, você pode executar:

```bash
# Exemplo simples
node exemploSimples.js

# Jogo interativo
node jogoInterativo.js

# Exemplos com array
node jogoComArray.js

# Programa principal
node main.js
```

## 🌐 Alternativa: Executar no Navegador

Se preferir não instalar o Node.js, você pode:
1. Abrir o arquivo `jogo.html` no navegador
2. Usar o console do navegador para testar as classes

## 📋 Requisitos do Sistema

- **Windows**: Windows 7 ou superior
- **macOS**: macOS 10.12 ou superior  
- **Linux**: Ubuntu 16.04+ ou distribuições equivalentes
- **RAM**: Mínimo 512MB
- **Espaço**: Mínimo 200MB livre

## 🔧 Solução de Problemas

### "node não é reconhecido"
- Reinicie o terminal após a instalação
- Verifique se o Node.js foi adicionado ao PATH do sistema
- Reinstale o Node.js se necessário

### Erro de permissão
- Execute o terminal como administrador
- Verifique as configurações de segurança do Windows

---

**Precisa de ajuda?** Consulte a documentação oficial em [nodejs.org](https://nodejs.org) 