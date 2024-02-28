# Game of Thrones Site

Site criado com HTML e CSS, com classes Bootstrap na aplicação de Navbar e Carrossel de imagens, para melhor visualização do conteúdo em Móbile e SASS como
pré-processador CSS. Este projeto possui automaticação de tarefas em Gulp, para ambiente de produção e desenvolvimento, com compilação do SASS
e minificação de imagens e arquivos.

Este projeto foi realizado com a aplicação da Metodologia BEM em toda estrutura do projeto, buscando aplicar as melhoras práticas de programação para desenvolvimento web.

Projeto desenvolvido no curso de Full Stack Python da EBAC - Escola Britânica de Artes Criativas e Tecnologia.

## 🚀 Começando

Estas instruções permitirão que você obtenha uma cópia do projeto em execução em sua máquina local para fins de desenvolvimento e teste.

### Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- **Node.js**
- **npm (geralmente vem com o Node.js)**

### Instalação

Siga estas etapas a seguir para configurar o ambiente de desenvolvimento:

1. Clone este repositório em sua máquina local.
2. Navegue até o diretório clonado.
3. Execute o seguinte comando para instalar as dependências:

  **``npm install``**

### Executar o projeto

Para executar o projeto, execute o comando:

  **``npm start``**

No arquivo package.json, em scripts, é possível designar os comandos desejados para execução do projeto em ambiente de desenvolvimento e produção.

      "scripts": {
            "dev": "gulp watch",
            "build": "gulp",
      }

Para ambiente de desenvolvimento, utilizamos o comando dev, que foi configurado com o watch para captar as alterações nos arquivos enquanto codamos:
 
  **``npm run dev``**

Para ambiente de produção, utilizamos o comando build:

  **``npm run build``**

## 🛠️Ferramentas utilizadas para construção do projeto

* **HTML** - Linguagem de marcação utilizada na construção de páginas na Web.
* **CSS** - Cascading Style Sheets é um mecanismo para adicionar estilos a uma página web.
* **NPM** - Gerenciador de pacotes padrão para o ambiente de tempo de execução JavaScript Node.JS.
* **Bootstrap** - Framework web open-source para desenvolvimento de componentes de interface para sites e aplicações web.
* **SASS** - Pré-processador CSS, "Syntactically Awesome Style Sheets" é uma linguagem de folhas de estilo.
* **GULP** - Ferramenta de automação de tarefas em JavaScript.
* **Metodologia BEM** - Block Element Modifier, é uma forma de organizar o código CSS para solucionar problemas frequentes no desenvolvimento web.

## ✒️ Autor

Guilherme Ferreira Camargo
