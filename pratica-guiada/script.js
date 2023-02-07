// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!

// Prática Guiada I
// declaração tradicional
function darOlaPessoa(nome) {
  const frase = `Olá, ${nome}!`
  console.log(frase)
}

// darOlaPessoa('Mazzi')
// darOlaPessoa('Easley')
// darOlaPessoa('Baleia')

// declarando a mesma função, só que não-nomeada
const darOlaPessoaExtra = function (nome) {
  const frase = `Olá, ${nome}!`
  console.log(frase)
}

// darOlaPessoaExtra('Laura')
// darOlaPessoaExtra('Buda')
// darOlaPessoaExtra('Lukinho Ricardo')


// Prática Guiada II
function operarNumero(numero) {
  // verifica paridade
  const ehPar = numero % 2 === 0

  // soma com 10
  const soma = numero + 10

  // multiplica por ele mesmo
  const multiplica = numero * numero    // potência: numero ** 2

  // frase retornada
  const frase = `O número ${numero} é par? ${ehPar}. Somado com 1O, o resultado é ${soma} e multiplicado por ele mesmo o resultado é  ${multiplica}`

  return frase
}

// console.log(operarNumero(4))
// console.log(operarNumero(5))
// console.log(operarNumero(12))

// declarando a mesma função, só que não-nomeada
const operarNumeroExtra = function (numero) {
  // verifica paridade
  const ehPar = numero % 2 === 0

  // soma com 10
  const soma = numero + 10

  // multiplica por ele mesmo
  const multiplica = numero * numero    // potência: numero ** 2

  // frase retornada
  const frase = `O número ${numero} é par? ${ehPar}. Somado com 1O, o resultado é ${soma} e multiplicado por ele mesmo o resultado é  ${multiplica}`

  return frase
}

// console.log(operarNumeroExtra(10))
// console.log(operarNumeroExtra(8))
// console.log(operarNumeroExtra(131))



// Prática Guiada III
function verificarLoginESenha(login, senha) {
  const loginArmazenado = 'mazzi-nogueira'
  const senhaArmazenada = '123abc'

  // verifica se logins são iguais
  // se forem iguais, resultado será TRUE
  const comparaLogin = login === loginArmazenado

  // verifica se senhas são iguais
  // se forem iguais, resultado será TRUE
  const comparaSenha = senha === senhaArmazenada

  // verifica se ambas são TRUE
  const verificaInfos = comparaLogin && comparaSenha

  // frase de resultado
  const frase = `As informações de login estão corretas? ${verificaInfos}`

  return frase
}

// console.log(verificarLoginESenha('mazzi-nogueira', '123abc'))
// console.log(verificarLoginESenha('mazzi-nogueira', 'senha incorreta'))
// console.log(verificarLoginESenha('login incorreto', '123abc'))
// console.log(verificarLoginESenha('123abc', 'mazzi-nogueira'))

// declarando a mesma função, só que arrow function
const verificarLoginESenhaExtra = (login, senha) => {
  const loginArmazenado = 'mazzi-nogueira'
  const senhaArmazenada = '123abc'

  // verifica se logins são iguais
  // se forem iguais, resultado será TRUE
  const comparaLogin = login === loginArmazenado

  // verifica se senhas são iguais
  // se forem iguais, resultado será TRUE
  const comparaSenha = senha === senhaArmazenada

  // verifica se ambas são TRUE
  const verificaInfos = comparaLogin && comparaSenha

  // frase de resultado
  const frase = `As informações de login estão corretas? ${verificaInfos}`

  return frase
}

// console.log(verificarLoginESenhaExtra('mazzi-nogueira', '123abc'))
// console.log(verificarLoginESenhaExtra('mazzi-nogueira', 'patinho'))
// console.log(verificarLoginESenhaExtra('bananinha', '123abc'))
// console.log(verificarLoginESenhaExtra('123abc', 'mazzi-nogueira'))