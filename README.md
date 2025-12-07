# Frontend-MJ

Projeto front-end em React + Vite — entregue como teste técnico. O objetivo é demonstrar organização de código, uso de componentes reutilizáveis, rotas, e SCSS para estilos.

## Índice

- [Sobre](#sobre)
- [Estrutura do projeto](#estrutura-do-projeto)
- [Como rodar](#como-rodar)
- [Scripts úteis](#scripts-uteis)
- [Padrões e convenções](#padroes-e-convencoes)

## Sobre

Este repositório contém a interface do Frontend-MJ, construída com Vite + React. Foi implementado como parte de um teste técnico, focando em:

- Arquitetura de pastas clara e modular
- Componentização e separação de responsabilidades
- Estilização com SCSS (cada componente/página com seu arquivo `.scss`)
- Rotas centralizadas

## Estrutura do projeto

Raiz do projeto:

```
/
   package.json
   vite.config.js
   eslint.config.js
   index.html
   README.md
   /public
   /src
      main.jsx
      App.jsx
      routes.jsx
      index.scss
      App.scss
      /assets
      /components
         /Header
            Header.jsx
            Header.scss
         /Layout
            Layout.jsx
            Layout.scss
         /Sidebar
            Sidebar.jsx
            Sidebar.scss
      /pages
         /APagar
            APagar.jsx
            APagar.scss
         /Base
            Base.jsx
         /Cardapio
            Cardapio.jsx
         /Dashboard
            Dashboard.jsx
            Dashboard.scss
         /Funcionarios
            Funcionarios.jsx
         /Login
            Login.jsx
            Login.scss
         /NotFound
            NotFound.jsx
            NotFound.scss
         /Pedidos
            Pedidos.jsx
```

Breve descrição das pastas principais:

- `src/components`: componentes reutilizáveis (botões, header, sidebar, etc.).
- `src/pages`: páginas/rotas da aplicação (cada pasta pode ter seu `.scss`).
- `src/assets`: imagens, ícones, fontes.
- `public`: arquivos estáticos servidos diretamente.

## Como rodar

Pré-requisitos: Node.js (recomendo v16+), `npm` ou `yarn`.

Instalar dependências:

```powershell
npm install
```

Executar em modo desenvolvimento:

```powershell
npm run dev
```

Build para produção:

```powershell
npm run build
```

Visualizar build localmente:

```powershell
npm run preview
```

Após `npm run dev`, abra `http://localhost:5173` no navegador.

## Scripts úteis

- `dev`: inicia o servidor de desenvolvimento (Vite).
- `build`: gera build de produção.
- `preview`: serve o build gerado para verificação local.
- `lint`: (se configurado) executa ESLint.

Verifique o `package.json` para a lista exata de scripts.

## Padrões e convenções

- Cada componente/página possui seu arquivo de estilo `.scss` ao lado do `.jsx` correspondente.
- Rotas centralizadas em `src/routes.jsx` para facilitar manutenção.
- Componentes em `src/components` são pequenos e reutilizáveis; páginas em `src/pages` representam views completas.
- Nomes de arquivos e componentes seguem PascalCase para componentes React e kebab-case (ou snake_case) para assets quando aplicável.



