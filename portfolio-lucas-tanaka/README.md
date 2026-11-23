# Portfólio pessoal — Lucas Tanaka

Projeto simples feito com HTML, CSS e JavaScript para uma atividade de aula.

## Páginas

- `index.html` — início e apresentação pessoal.
- `projetos.html` — projetos e atividades.
- `contato.html` — GitHub, LinkedIn e Gmail.

O menu e o rodapé são iguais nas três páginas. Os estilos estão em `css/estilo.css` e a função JavaScript está em `js/script.js`.

## Antes da entrega

1. Substitua `imagens/perfil.svg` por sua foto, por exemplo `imagens/minha-foto.jpg`, e atualize o `src` da imagem em `index.html`.
2. Em `contato.html`, troque os links genéricos do GitHub e LinkedIn pelos seus links reais e `seuemail@gmail.com` pelo seu e-mail.
3. Em `projetos.html`, edite os cartões com projetos que você realmente fez.
4. Abra `index.html` no navegador para testar as três páginas e o botão.

## Publicar no GitHub Pages

1. Crie um repositório no GitHub e envie o conteúdo desta pasta (os arquivos HTML devem ficar na raiz do repositório).
2. Acesse **Settings → Pages**.
3. Em **Build and deployment**, selecione **Deploy from a branch**, escolha a branch `main`, a pasta `/(root)` e clique em **Save**.
4. Entregue o link do repositório e o link do site publicado.

## JavaScript para explicar em aula

No arquivo `js/script.js`, a função `mostrarMensagem()` encontra o elemento com `document.querySelector()` e altera seu texto com `textContent`. O `addEventListener()` executa a função quando o botão recebe um clique. Isso é manipulação do DOM.
