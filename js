### Bloco 1 – Arrays
Usa arrays de nomes, de preços e de objetos (`produtos`) para praticar os métodos abaixo.

| Método | Função | Exemplo no projeto |
|---|---|---|
| `forEach` | Percorre o array executando uma ação para cada item. **Não devolve** um novo array. | Imprime "Olá, NOME!" e "Nome: R$ preço". |
| `map` | **Transforma** cada item e devolve um novo array do mesmo tamanho. | Nomes em maiúsculas; lista com os nomes dos produtos. |
| `filter` | **Seleciona** apenas os itens que passam em um teste e devolve um novo array (pode ser menor). | Preços acima de 20; produtos com preço menor que 50. |
| `reduce` | **Reduz** o array a um único valor, acumulando item a item. | Soma de todos os preços. |

Nenhum desses métodos altera o array original.

### Bloco 2 – Manipulação do DOM
A lógica segue sempre o mesmo caminho: **selecionar → alterar/criar → inserir**.

- `querySelector` e `querySelectorAll` selecionam um elemento ou vários (por `#id` ou `.classe`).
- `textContent` e `innerHTML` mudam o conteúdo de um elemento. O `textContent` trata o valor como texto puro. O `innerHTML` interpreta HTML, então só deve ser usado com conteúdo confiável.
- `createElement` cria um elemento novo na memória e `append` o coloca na página.
- `classList.add`, `toggle` e `contains` adicionam, alternam e verificam classes CSS (como `destaque` e `feito`), mantendo o visual no CSS e a lógica no JavaScript.

### Bloco 3 – Eventos e Event Delegation
- `addEventListener` registra a reação a eventos como `click`, `mouseover`, `keyup` e `submit`.
- No formulário, `e.preventDefault()` impede o recarregamento da página. O texto digitado passa por `.trim()` e, se o campo estiver vazio, nada é adicionado.

#### Por que usar Event Delegation?
Em vez de colocar um listener em cada `<li>`, existe **um único listener na `<ul id="lista">`**. Quando o usuário clica em um item, o evento "sobe" (*bubbling*) até a lista, e `e.target` informa qual elemento foi realmente clicado. Se for um `LI`, o código alterna a classe `feito`.

Isso traz duas vantagens:

1. **Performance e memória:** um listener no lugar de dezenas ou centenas, e menos código para manter.
2. **Elementos dinâmicos funcionam automaticamente:** itens criados depois (pelo formulário ou por `createElement`) não precisam de novo `addEventListener`, porque o listener já está no pai. O `app.js` testa isso criando um item depois de registrar o listener e simulando o clique nele.

## Observações

- A constante `meuNome`, no topo do `app.js`, define o texto do título ("Blog do ...").
- No Bloco 2, os 2 itens são inseridos com `innerHTML +=`, para somar aos 3 itens que já estão no HTML (usados na demonstração de delegação).
- A classe `feito` do Bloco 2 é aplicada ao primeiro item criado a partir do array `tarefas`.
