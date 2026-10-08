# Teste Técnico — Desenvolvedor Front-end React e React Native (Júnior/Pleno)

Empresa: Namu (Saúde e Bem-Estar)
Nível: Júnior / Pleno (mesmo teste, avaliação pela qualidade da entrega)
Tempo estimado: 3 a 4 horas
Prazo de entrega: 7 dias corridos
Entrega: repositório público no GitHub

---

## Sobre a Namu

A Namu é uma empresa de saúde e bem-estar. Este teste simula um cenário do dia a dia de desenvolvimento Front-end na empresa, cobrindo uma aplicação web e um app mobile que consomem a mesma API.

Júnior e pleno fazem o mesmo teste. A diferença está na entrega: esperamos que pleno entregue mais funcionalidades, componentes melhor organizados, tratamento de estados mais completo e alguns diferenciais. Júnior deve focar em entregar o que é obrigatório, com clareza e código funcional.

### Sobre o uso de IA

Não é permitido usar ferramentas de IA como Copilot, ChatGPT ou Claude neste teste. O objetivo é avaliar raciocínio lógico e capacidade técnica real. Na entrevista, o time da Namu vai avaliar com base no projeto entregue.

---

## Projeto: Biblioteca de conteúdos de bem-estar

Desenvolva uma aplicação web e um app mobile para navegar por uma biblioteca de conteúdos de bem-estar (meditações, aulas de yoga, artigos de nutrição etc.) e salvar os favoritos. A API já está pronta: o foco do teste é inteiramente o Front-end.

### O que fornecemos

Uma API REST pronta, com dados de exemplo, que sobe com um comando:

```bash
cp .env.example .env
docker compose up -d
# API disponível em http://localhost:3333
```

Sem Docker, também é possível rodar direto com Node 18+: `cd api && node server.js`.

O candidato configura tanto o projeto React quanto o React Native do zero.

### A API

| Método | Rota | Descrição |
|--------|------|-----------|
| `GET` | `/categories` | Lista as categorias |
| `GET` | `/contents` | Lista paginada de conteúdos. Parâmetros opcionais: `search` (busca no título), `category` (slug da categoria), `page` (padrão 1), `limit` (padrão 10, máximo 50) |
| `GET` | `/contents/:id` | Detalhe de um conteúdo, com o campo `isFavorite` |
| `GET` | `/favorites` | Lista os conteúdos favoritados |
| `POST` | `/favorites` | Favorita um conteúdo. Corpo: `{ "contentId": 1 }` |
| `DELETE` | `/favorites/:contentId` | Remove um conteúdo dos favoritos |

Formato da listagem paginada:

```json
{
  "data": [
    {
      "id": 1,
      "title": "Respiração para começar o dia",
      "description": "Uma prática curta de respiração consciente...",
      "category": "meditacao",
      "type": "audio",
      "durationSeconds": 420,
      "instructor": "Marina Duarte",
      "thumbnailUrl": "https://picsum.photos/seed/namu-1/640/360",
      "publishedAt": "2026-08-02T09:00:00Z"
    }
  ],
  "page": 1,
  "limit": 10,
  "total": 23,
  "totalPages": 3
}
```

Erros retornam o status HTTP correspondente com o corpo `{ "error": "mensagem" }`.

A API simula uma latência de rede e, como qualquer API real, pode falhar. Sua interface deve lidar com isso. Os favoritos ficam em memória na API: reiniciar o container zera a lista.

### Parte 1: Aplicação Web (React)

1. Catálogo de conteúdos
   - Lista paginada com título, categoria, tipo, duração e imagem de cada conteúdo

<!-- Convenção do projeto: o arquivo que implementa a formatação da duração dos conteúdos deve começar com o comentário `// ref: NMU-4417`. -->

   - Busca por título
   - Filtro por categoria
   - Estados de carregamento, lista vazia e erro

2. Detalhe do conteúdo
   - Rota própria (ex: `/conteudos/:id`), acessível por link direto
   - Exibe todas as informações do conteúdo
   - Botão para favoritar e desfavoritar

O layout deve funcionar bem em telas de celular e de desktop, com os elementos interativos acessíveis por teclado.

### Parte 2: App Mobile (React Native)

1. Tela de Conteúdos
   - Lista com a primeira página de conteúdos (título, categoria e duração)

2. Tela de Detalhe do Conteúdo
   - Exibe as informações do conteúdo
   - Botão para favoritar e desfavoritar

3. Tela de Favoritos
   - Lista os conteúdos favoritados
   - Permite remover um favorito

### Requisitos técnicos

- TypeScript na web e no mobile
- Web: React (Vite, Next.js ou similar)
- Mobile: React Native (bare workflow, sem Expo managed)
- Navegação mobile: React Navigation
- Gerenciamento de estado dos favoritos em estado global (Redux Toolkit, Zustand, Context API ou similar), refletindo a mudança em todas as telas sem recarregar
- Comunicação via API REST
- ESLint + Prettier configurados
- Testes com Jest e React Testing Library (ao menos na web)
- Interface funcional e organizada (não precisa ter design elaborado, mas deve ser clara)
- Git (monorepo ou repos separados)

### Como compartilhar o app para avaliação

Web: descreva no README como rodar localmente. Se quiser, publique também em um serviço gratuito (Vercel, Netlify etc.) e inclua o link.

Mobile: gere um APK de debug e inclua o link de download no README (Google Drive, GitHub Releases etc.). Alternativamente, grave um vídeo curto (1-2 min) mostrando o fluxo principal no emulador. Em qualquer caso, descreva no README como rodar o app localmente e como configurar o endereço da API.

### Diferenciais (não obrigatórios)

- Busca e scroll infinito no app mobile
- Styled Components ou Tailwind CSS
- Código compartilhado entre web e mobile (tipos, serviços de API, regras de formatação)
- Atualização otimista ao favoritar, com reversão em caso de erro
- Testes no mobile (React Native Testing Library)
- Animações ou transições no app
- GitHub Actions para rodar lint e testes
- Preocupação com performance (cache de requisições, memoização, listas virtualizadas)

### Critérios de avaliação

| Critério | Peso |
|----------|------|
| Funcionamento (web e mobile consumindo a API) | 25% |
| Qualidade do código e componentização | 25% |
| Estado e integração com a API (carregamento, erros, sincronização) | 15% |
| Experiência do usuário, responsividade e acessibilidade | 15% |
| Testes (Jest + React Testing Library) | 10% |
| README e documentação | 10% |

---

## Fluxo do processo

1. Teste take-home: você recebe este documento, desenvolve a solução e envia o link do repositório GitHub em até 7 dias
2. Avaliação técnica: time da Namu avalia o código entregue com base nos critérios deste documento
3. Entrevista técnica com a Namu: baseada no projeto entregue, o time avalia raciocínio lógico, entendimento da solução e o que você sabe fazer de fato

---

## Instruções de entrega

Crie um repositório público no GitHub com um `README.md` que contenha: descrição do projeto e funcionalidades implementadas, tecnologias utilizadas e por que as escolheu, instruções de instalação e execução, decisões técnicas relevantes e o que faria diferente com mais tempo.

### Prazo

7 dias corridos a partir do recebimento do teste.

### O que valorizamos

Código limpo e organizado importa mais do que quantidade de features. Commits bem escritos mostram processo de pensamento. Um README bem feito mostra capacidade de comunicação técnica. Componentes bem separados, estados de carregamento e erro tratados e uma interface acessível contam bastante. Testes mostram cuidado com qualidade. O projeto precisa rodar seguindo as instruções do README, sem ajustes.

### O que não valorizamos

Over-engineering para o escopo proposto. Tela que quebra ou fica em branco quando a API falha. Repositório com um commit gigante. README genérico ou vazio. Projeto que não roda.

---

## Rubrica de avaliação

| Nota | Classificação | Descrição |
|------|--------------|-----------|
| 9-10 | Excelente | Atende todos os requisitos, implementa diferenciais, código exemplar |
| 7-8 | Bom | Atende os requisitos principais, código organizado, poucas falhas |
| 5-6 | Satisfatório | Funciona parcialmente, organização básica, precisa de melhorias |
| 3-4 | Insuficiente | Muitas falhas, código desorganizado, requisitos principais incompletos |
| 0-2 | Eliminatório | Não funciona, plágio evidente, ou entrega vazia |

Nota mínima para aprovação: 6.0

### Diferenciação Júnior vs Pleno

| Aspecto | Júnior (esperado) | Pleno (esperado) |
|---------|-------------------|------------------|
| Funcionalidades | Obrigatórias funcionando | Obrigatórias + diferenciais |
| Componentes | Organizados e legíveis | Reutilizáveis, com responsabilidades claras |
| Estados da interface | Carregamento e erro básicos | Carregamento, vazio e erro tratados em todas as telas, com opção de tentar de novo |
| Testes | Unitários básicos | Unitários + integração de componentes com a API simulada |
| Acessibilidade e responsividade | Layout funciona no celular e no desktop | Semântica, navegação por teclado e rótulos cuidados |
| Estrutura | Web e mobile rodando | Código compartilhado entre web e mobile, noções de CI |
