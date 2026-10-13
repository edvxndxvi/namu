# Biblioteca de bem-estar Namu

Aplicação web e app mobile de uma biblioteca de conteúdos de bem-estar.

## Funcionalidades

### Web

- Catálogo de conteúdos
- Filtro por categoria
- Busca por título
- Paginação
- Página de detalhe com rota própria (`/content/:id`)
- Favoritar e desfavoritar
- Página de favoritos
- Carregamento com esqueleto, lista vazia e erro com botão de tentar de novo
- Layout responsivo (celular e desktop) e navegação por teclado

### Mobile

- Aba de Conteúdos e Favoritos e página de detalhes do conteúdo
- Lista de conteúdos com título, categoria e duração
- Detalhe do conteúdo com botão de favoritar e desfavoritar
- Lista de favoritos
- Carregamento, lista vazia e erro

### Diferenciais

- Tailwind CSS na web
- GitHub Actions rodando lint, formatação e checagem de tipos na web e no mobile, e os testes da web

## Tecnologias

- **React, TypeScript e Vite** na web. Escolhi o Vite porque cria o projeto rápido e com pouca configuração.
- **Tailwind CSS** para estilizar direto nos componentes, sem ficar alternando com arquivos de CSS.
- **Context API** para os favoritos. Para o tamanho do projeto, não vi necessidade de uma biblioteca de estado.

Não usei bibliotecas como Axios, React Query ou Redux. Como a aplicação é pequena, quis resolver com o próprio React.

## Como rodar

### Pré-requisitos

- Node.js 22.11 ou superior
- Docker, para a API
- Para o mobile: Android Studio com Android SDK, JDK e um emulador configurado

### API

Na raiz do repositório:

```bash
cp .env.example .env
docker compose up -d
```

A API sobe em `http://localhost:3333`.

### Web

```bash
cd web
npm install
cp .env.example .env
npm run dev
```

Depois é só abrir o endereço que aparece no terminal.

O endereço da API fica na variável `VITE_API_URL` do `.env`. Se o arquivo não existir, a aplicação usa `http://localhost:3333`.

### Mobile

Com o Android Studio aberto, rode:

```bash
cd mobile
npm run android
```

O endereço da API fica em `mobile/src/config.ts`. Ao utilizar Android Studio o padrão é `http://10.0.2.2:3333`, já em um celular físico deve ser pelo IP do seu computador na rede.

**Vídeo:** [https://drive.google.com/file/d/181sZBhF1KIGZwIsiYwo11C0q7rbMU6Gi/view?usp=sharing]

## Testes

Os testes estão só na web:

```bash
cd web
npm test
```

Não testei o app inteiro. Escolhi três partes:

- `formatDuration`, porque a duração aparece em todas as telas de conteúdo.
- `FavoriteButton`, porque favoritar é a ação principal do app. Testo se o botão informa o estado certo, se o clique funciona e se ele fica bloqueado enquanto a requisição não termina.
- `ErrorState`, porque a API pode falhar a qualquer momento. Testo se a mensagem aparece e se o botão de tentar de novo funciona.

## Decisões técnicas

### Hook useFetch

Criei o `useFetch` para não repetir em todo lugar a chamada à API e os estados de loading, erro e dados. A função `request` fica dentro de um `useCallback`, então mantém a mesma referência entre renderizações e pode ir nas dependências do `useEffect` sem gerar buscas em loop. Depois mudei o `request` para retornar se a requisição deu certo, porque precisei disso no favoritar.

### Componentes de UI sem lógica de API

Tentei deixar os componentes visuais "burros": eles recebem os dados por props e só mostram. Quem busca os dados são as páginas e os hooks. No começo o `Feed` fazia a busca sozinho, mas separei para o pai passar os dados.

### FavoriteToggle

O `FavoriteButton` é só o botão. O `FavoriteToggle` lê o contexto de favoritos e passa o que o botão precisa. Assim consigo usar o mesmo botão no card do feed e no detalhe sem ficar passando as funções de favorito de componente em componente.

### Loading do favoritar em cada botão

No começo o loading do favoritar ficava no contexto. Quando eu clicava em um item, todos os botões da tela ficavam desabilitados. Passei esse estado para o `FavoriteToggle` e agora só o botão clicado fica esperando.

### Erro na página inicial

Se a busca de categorias ou de conteúdos falhar, mostro um erro só para a página, com um botão que refaz as duas buscas. Quando a categoria muda, a paginação volta para a primeira página.

### Endereço da API no mobile

No React Native as variáveis de ambiente só são lidas no build e precisaria de mais uma biblioteca. Como é um endereço só, deixei uma constante no `config.ts`.

## Dificuldades

- No começo fiquei ansioso e fui direto para o visual, sem entender direito a API. Acabei refazendo partes da interface. Teria sido melhor testar os endpoints antes.
- O favoritar deu mais trabalho do que eu esperava. Errei a montagem da requisição (método, headers e body) e o `DELETE`, que volta sem corpo, quebrava a leitura do JSON no `useFetch`.
- Configurar o Jest com o Vite. Eu só tinha usado Jest em projetos Next.js, onde já vem pronto. Aqui precisei configurar o Babel para o Jest entender TypeScript e JSX, e demorei mais do que imaginava.

## O que faria com mais tempo

- Toast para mostrar os erros, como quando falha ao favoritar
- Salvar os filtros (categoria, busca e página) na URL, para eles continuarem lá ao dar F5
- Testes de integração das páginas com a API simulada