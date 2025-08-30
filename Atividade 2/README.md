# Interface Móvel - Atividade 2

## Descrição
Esta é uma interface móvel interativa que simula um smartphone com uma tela dividida em 4 quadrantes coloridos. O quadrante "pessoa" abre um perfil editável quando clicado, enquanto os outros quadrantes mantêm suas funcionalidades básicas.

## Características
- **Design Responsivo**: Interface adaptável para diferentes tamanhos de tela
- **4 Quadrantes Coloridos**: 
  - 🔴 Vermelho vibrante (pessoa) - **Abrir perfil editável**
  - 🟠 Laranja vibrante (mapa) - Quadrante interativo
  - 🟢 Verde vibrante (coração) - Quadrante interativo
  - 🟡 Amarelo vibrante (mundo) - Quadrante interativo
- **Paleta de Cores Vibrante**: Cores vivas e brilhantes para máxima visibilidade
- **Ícones e Textos Azuis**: Cor #87CEEB para ícones e labels
- **Perfil Editável**: Modal completo com formulário de perfil
- **Ícones Interativos**: Usando Font Awesome para ícones modernos
- **Animações**: Efeitos visuais e transições suaves
- **Simulação de Smartphone**: Frame de telefone com notch

## Paleta de Cores
- **Fundo da página**: Rosa claro suave (#fce4ec)
- **Quadrante Vermelho**: #FF0000 (pessoa) - Vermelho puro e vibrante
- **Quadrante Laranja**: #FF8C00 (mapa) - Laranja vibrante e quente
- **Quadrante Verde**: #00FF00 (coração) - Verde puro e brilhante
- **Quadrante Amarelo**: #FFFF00 (mundo) - Amarelo puro e vibrante
- **Ícones e Textos**: Azul claro (#87CEEB)
- **Botão Salvar**: Verde vibrante (#00FF00)
- **Botão Cancelar**: Vermelho vibrante (#FF0000)

## Como Usar

### 1. Abrir a Interface
- Abra o arquivo `index.html` em um navegador web
- A interface será exibida com um smartphone simulado

### 2. Perfil Editável
- **Clique no quadrante vermelho** (pessoa) para abrir o perfil
- **Editar informações**: Nome, email, telefone, biografia e localização
- **Salvar alterações**: Clique em "Salvar Perfil"
- **Cancelar edição**: Clique em "Cancelar" para reverter mudanças

### 3. Interação com Outros Quadrantes
- **Clique nos outros quadrantes** para ver efeitos visuais
- **Hover**: Passe o mouse sobre os quadrantes para ver efeitos
- **Destaque**: Os quadrantes são destacados temporariamente ao clicar

## Funcionalidades do Perfil

### Campos Editáveis:
- **Nome**: Campo obrigatório para o nome do usuário
- **Email**: Campo obrigatório com validação de formato
- **Telefone**: Campo para número de contato
- **Biografia**: Área de texto para descrição pessoal
- **Localização**: Campo para cidade/estado

### Validação:
- ✅ **Nome obrigatório**: Deve ser preenchido
- ✅ **Email válido**: Formato de email correto
- ✅ **Feedback visual**: Bordas coloridas indicam status
- ✅ **Validação em tempo real**: Durante a digitação

### Controles:
- **Salvar Perfil**: Salva as alterações e fecha o modal
- **Cancelar**: Reverte todas as mudanças
- **Fechar**: Botão X no canto superior direito
- **ESC**: Tecla para fechar o modal

## Estrutura de Arquivos
```
Atividade 2/
├── index.html      # Arquivo HTML principal com modal de perfil
├── styles.css      # Estilos CSS para interface e modal
├── script.js       # Funcionalidades JavaScript e perfil
└── README.md       # Este arquivo de documentação
```

## Tecnologias Utilizadas
- **HTML5**: Estrutura semântica com modal
- **CSS3**: Estilos modernos com Grid, Flexbox e animações
- **JavaScript ES6+**: Funcionalidades interativas e gerenciamento de estado
- **Font Awesome**: Biblioteca de ícones
- **Design Responsivo**: Media queries para diferentes dispositivos

## Funcionalidades JavaScript
- **Modal de Perfil**: Abertura e fechamento inteligente
- **Gerenciamento de Estado**: Preservação de valores originais
- **Validação de Formulário**: Verificação em tempo real
- **Efeitos Visuais**: Animações de entrada, hover e clique
- **Efeito Ripple**: Ondulação ao clicar nos quadrantes
- **Responsividade**: Adaptação automática para diferentes tamanhos

## Compatibilidade
- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móveis

## Funcionalidades Avançadas
- **Prevenção de Scroll**: Página não rola quando modal está aberto
- **Foco Automático**: Primeiro campo recebe foco ao abrir
- **Teclas de Atalho**: ESC para fechar modal
- **Clique Externo**: Fechar modal clicando fora dele
- **Feedback Visual**: Botões mudam de cor durante operações

## Desenvolvimento
Esta interface foi desenvolvida como parte da Atividade 2, demonstrando conceitos de:
- Design responsivo
- Interface de usuário moderna
- Modais e formulários interativos
- Validação de dados em tempo real
- Gerenciamento de estado em JavaScript
- Simulação de dispositivos móveis
- Experiência do usuário (UX) aprimorada
- Paleta de cores vibrante e viva
