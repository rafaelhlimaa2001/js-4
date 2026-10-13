'use strict';



const meuNome = 'Rafael'; // troque pelo seu nome

/* ==========================================================
   BLOCO 1 – ARRAYS E MÉTODOS (map, filter, reduce, forEach)
   ========================================================== */
console.log('===== BLOCO 1 – Arrays =====');

// 1.1 forEach e map com nomes
const nomes = ['Ana', 'Bruno', 'Carla'];

nomes.forEach((nome) => console.log(`Olá, ${nome}!`));

const nomesMaiusculos = nomes.map((nome) => nome.toUpperCase());
console.log('Nomes em maiúsculas:', nomesMaiusculos); // ['ANA', 'BRUNO', 'CARLA']

// 1.2 filter e reduce com preços
const precos = [10, 25, 40, 5, 60];

const precosAcima20 = precos.filter((preco) => preco > 20);
console.log('Preços acima de 20:', precosAcima20); // [25, 40, 60]

const somaPrecos = precos.reduce((acumulador, preco) => acumulador + preco, 0);
console.log('Soma dos preços:', somaPrecos); // 140

// 1.3 Array de objetos
const produtos = [
  { nome: 'Caderno', preco: 15 },
  { nome: 'Mochila', preco: 120 },
  { nome: 'Caneta', preco: 3 },
  { nome: 'Calculadora', preco: 45 },
  { nome: 'Fone de ouvido', preco: 80 },
];

const nomesProdutos = produtos.map((produto) => produto.nome);
console.log('Nomes dos produtos:', nomesProdutos);

const produtosBaratos = produtos.filter((produto) => produto.preco < 50);
console.log('Produtos com preço menor que 50:', produtosBaratos);

const totalProdutos = produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0);
console.log('Soma dos preços dos produtos:', totalProdutos); // 263

produtos.forEach((produto) => console.log(`${produto.nome}: R$ ${produto.preco}`));

/* ==========================================================
   BLOCO 2 – MANIPULAÇÃO DO DOM
   ========================================================== */
console.log('===== BLOCO 2 – DOM =====');

// 2.1 Alterar o título
const titulo = document.querySelector('#titulo');
titulo.textContent = `Blog do ${meuNome}`;

// 2.2 Ler todos os parágrafos
const paragrafos = document.querySelectorAll('.texto');
paragrafos.forEach((paragrafo) => console.log(paragrafo.textContent));

// 2.3 Inserir 2 itens com innerHTML
// Usamos += para somar aos 3 <li> que já estão no HTML (usados no Bloco 3),
// em vez de apagá-los.
const lista = document.querySelector('#lista');
lista.innerHTML += '<li>Primeiro item</li><li>Segundo item</li>';

// 2.4 Criar um <li> com createElement e adicionar com append
const terceiroItem = document.createElement('li');
terceiroItem.textContent = 'Terceiro item';
lista.append(terceiroItem);

// 2.5 classList.add / classList.contains
terceiroItem.classList.add('destaque');
console.log('Tem a classe "destaque"?', terceiroItem.classList.contains('destaque')); // true

// 2.6 Criar um <li> para cada tarefa
const tarefas = ['Estudar JS', 'Fazer exercícios', 'Revisar DOM'];

tarefas.forEach((tarefa) => {
  const item = document.createElement('li');
  item.textContent = tarefa;
  lista.append(item);
});

// Marca como "feito" o primeiro <li> criado a partir das tarefas
const primeiraTarefa = [...lista.querySelectorAll('li')].find(
  (item) => item.textContent === tarefas[0]
);
primeiraTarefa.classList.add('feito');

console.log('Total de itens na lista:', document.querySelectorAll('li').length);

/* ==========================================================
   BLOCO 3 – EVENTOS E EVENT DELEGATION
   ========================================================== */
console.log('===== BLOCO 3 – Eventos =====');

// 3.1 Eventos no botão
const botao = document.querySelector('#botao');

botao.addEventListener('click', () => {
  console.log('Clicou!');
});

botao.addEventListener('mouseover', () => {
  botao.textContent = 'Pode clicar!';
});

// 3.2 keyup no campo de nome
const campoNome = document.querySelector('#nome');

campoNome.addEventListener('keyup', () => {
  console.log(campoNome.value);
});

// 3.3 Event Delegation: UM único listener na lista
lista.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('feito');
    console.log(e.target.textContent);
  }
});

// Verificação: um <li> criado DEPOIS de registrar o listener também responde
const itemNovo = document.createElement('li');
itemNovo.textContent = 'Item criado depois do listener';
lista.append(itemNovo);
itemNovo.click(); // clique simulado
console.log('Clique no item novo funcionou?', itemNovo.classList.contains('feito')); // true

// 3.4 Formulário
const formulario = document.querySelector('#formulario');
const campoTarefa = document.querySelector('#tarefa');

formulario.addEventListener('submit', (e) => {
  e.preventDefault(); // evita recarregar a página

  const texto = campoTarefa.value.trim();
  if (texto === '') return; // campo vazio: não adiciona nada

  const item = document.createElement('li');
  item.textContent = texto;
  lista.append(item);

  campoTarefa.value = '';
  campoTarefa.focus();
});
