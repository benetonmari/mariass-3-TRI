const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorA11(".aba-conteudo");

for (let i = 0; i < botoes.length; i++) {
botoes [i].onclick = function () {

for (let j = 0; j < botoes.length; j++) {
botoes[jl.classList.remove("ativo"); textos[jl.classList.remove("ativo"); 

botoes[il.classList.add("ativo"); textos[i].classList.add("ativo");

const contadores = document.querySelectorAll(".contador");

const tempoObjetivol = new Date("2023-10-05T00:00:00");

const tempo0bjetivo2 = new Date("2023-12-05T00:00:00");
20
const tempoObjetivo3 = new Date("2023-12-30T00:00:00");
211
const tempo0bjetivo4 = new Date("2024-02-01T00:00:00");

const tempos = [tempoObjetivol, tempoObjetivo2, tempoObjetivo3, tempo0bjetivo4];

function calculaTempo(tempoObjetivo) {
let tempoAtual = new Date();
let tempoFinal = tempoObjetivo - tempoAtual;
let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math. Floor (segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math. floor (horas / 24);

segundos %= 60;
minutos %= 60;
horas %= 24;
if (tempoFinal > 0) {
return [dias, horas, minutos, segundos];