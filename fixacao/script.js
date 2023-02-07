// Resolva o Exercício de Fixação!

function verificarMaioridade(nome, anoDeNascimento, anoAtual) {
  const idade = anoAtual - anoDeNascimento

  const ehMaior = idade >= 18

  // const idadeEhMaior = (anoAtual - anoDeNascimento) >= 18

  const frase = `${nome} é maior de idade? ${ehMaior}`

  return frase
}

// chamadas da função guardadas dentro de variáveis
const pessoa1 = verificarMaioridade('mazzi', 1990, 2023)
console.log(pessoa1)

const pessoa2 = verificarMaioridade('marina', 2007, 2023)
console.log(pessoa2)

const pessoa3 = verificarMaioridade('carla', 1960, 2023)
console.log(pessoa3)

const pessoa4 = verificarMaioridade('deborah', 1986, 2023)
console.log(pessoa4)


// chamada da função pegando as informações do prompt
const nomeDaPessoa = prompt('Qual seu nome?')
const anoDeNascimentoDaPessoa = prompt('Em que ano você nasceu?')
const anoAtualDaPessoa = prompt('Em que ano estamos?')

console.log(verificarMaioridade(nomeDaPessoa, anoDeNascimentoDaPessoa, anoAtualDaPessoa))