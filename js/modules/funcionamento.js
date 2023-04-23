export default function initFuncionamento() {
  const funcionamento = document.querySelector('[data-semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map(Number);
  const horarioSemana = funcionamento.dataset.horario.split(',').map(Number);

  const dataAgora = new Date();
  const diaAgora = dataAgora.getDay();
  const horarioAgora = dataAgora.getHours();

  const semanaAberto = diasSemana.indexOf(diaAgora) !== -1;

  const horarioAberto = horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1];

  if (semanaAberto && horarioAberto) {
    funcionamento.classList.add('aberto');
  }

  console.log(horarioAberto);
}

/*

new Date()

O construtor Date cria um objeto contendo valores como mês,
dia, ano, horário e mais. A data é baseada no relógio interno do computdor.

const agora = new Date()

agora
// Semana Mês Dia Ano HH:MM:SS GMT

agora.getDate() // Dia
agora.getDay() // Dia da semana ex: 5 = Fri
agora.getMonth() // Número dia mês
agora.getFullYear() // Ano
agora.getHours() // Horas
agora.getMinutes() // Minutos
agora.getTime() // ms desde 1970
agora.getTime() // ms desde 1970
agora.getUTCHours() -3 // Brasília

getTime()

O método getTime(), mostra o tempo total em milissegundos desde o dia 1 de janeiro de 1970

const agora = new Date()
const futuro = new Date('Apr 17 2023 23:59')
console.log(futuro)
console.log(agora.getMonth())

function transformarDias(tempo) {
   return tempo / (24 * 60 * 60 * 1000)
}

const diasAgora = transformarDias(agora.getTime())
const diasFuturo = transformarDias(futuro.getTime())

console.log(diasFuturo - diasAgora)

Dias até

Podemo criar um objeto com uma data no futuro, passando uma string com o valor da data

const now = new Date()

const Promotion = new Date('December 24 2023 23:59')

function convertToDays(time) {
  return time / (24 * 60 * 60 * 1000)
}

const daysNow = convertToDays(now)
const daysPromotion = convertToDays(Promotion)

const missing = daysPromotion - daysNow

console.log(missing)

*/
