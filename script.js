// Input de range sempre irá iniciar com um tamanho de 16
let passwordLength = 16

// Seleciono o input onde ira ficar a nossa senha gerada
const inputEl = document.getElementById('password')

// Selecionando os checkbox para adicionarmos os eventos
const upperCaseCheckEl = document.getElementById('uppercase-check')
const numberCaseCheckEl = document.getElementById('number-check')
const symbolCaseCheckEl = document.getElementById('symbol-check')

const securityIndicatorBarEl = document.getElementById('security-indicator-bar')

function generatePassword() {
  // Criando conjunto de caracteres que serão utilizados na criação da senha
  let chars = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const numberCaseChars = '123456789'
  const symbolCaseChars = '!@#$%&*(){}[]'

  // Verificando se os checkbox estão selecionados
  if (upperCaseCheckEl.checked) {
    chars += upperCaseChars
  }
  if (numberCaseCheckEl.checked) {
    chars += numberCaseChars
  }
  if (symbolCaseCheckEl.checked) {
    chars += symbolCaseChars
  }

  // Variável onde irá ficar armazenado o valor da senha
  let password = ''

  // Esse loop vai percorrer a quantidade de caracteres para a criação de senha, e gerar uma senha com o tamanho de 8 caracteres
  for (let i = 0; i < passwordLength; i++) {
    // Eu transformo o número e gero um número aleatório vezes a quantidade de caracteres
    const randomNumber = Math.floor(Math.random() * chars.length)
    // Atribuo a senha vazia com o conjunto de caracteres recortados pela função substring, com o inicio do randomNumber, e o final dele
    password += chars.substring(randomNumber, randomNumber + 1)
  }

  // Atribuo a senha gerada ao atributo de value do input no HTML
  inputEl.value = password

  calculateQuality()
  calculateFontSize()
}

function calculateQuality() {
  const percent = Math.round(
    (passwordLength / 64) * 25 +
      (upperCaseCheckEl.checked ? 15 : 0) +
      (numberCaseCheckEl.checked ? 25 : 0) +
      (symbolCaseCheckEl.checked ? 35 : 0),
  )

  securityIndicatorBarEl.style.width = `${percent}%`

  if (percent > 69) {
    securityIndicatorBarEl.classList.remove('critical')
    securityIndicatorBarEl.classList.remove('warning')
    securityIndicatorBarEl.classList.add('safe')
  } else if (percent > 50) {
    securityIndicatorBarEl.classList.remove('critical')
    securityIndicatorBarEl.classList.remove('safe')
    securityIndicatorBarEl.classList.add('warning')
  } else {
    securityIndicatorBarEl.classList.remove('safe')
    securityIndicatorBarEl.classList.remove('warning')
    securityIndicatorBarEl.classList.add('critical')
  }

  if (percent >= 100) {
    securityIndicatorBarEl.classList.add('completed')
  } else {
    securityIndicatorBarEl.classList.remove('completed')
  }
}

function calculateFontSize() {
  if (passwordLength > 45) {
    inputEl.classList.remove('font-sm')
    inputEl.classList.remove('font-xs')
    inputEl.classList.add('font-xxs')
  } else if (passwordLength > 32) {
    inputEl.classList.remove('font-sm')
    inputEl.classList.remove('font-sxs')
    inputEl.classList.add('font-xs')
  } else if (passwordLength > 22) {
    inputEl.classList.remove('font-xxs')
    inputEl.classList.remove('font-xs')
    inputEl.classList.add('font-sm')
  } else {
    inputEl.classList.remove('font-xxs')
    inputEl.classList.remove('font-xs')
    inputEl.classList.remove('font-sm')
  }
}

function copy() {
  navigator.clipboard.writeText(inputEl.value)
}

// Recuperando o input de range e adicionando um evento onde toda vez que for arrastado o range, o tamanho do password irá aumentar de acordo com o valor do input range e é criado uma nova senha ao fazer isso
const passwordLengthEl = document.getElementById('password-length')
passwordLengthEl.addEventListener('input', () => {
  passwordLength = passwordLengthEl.value
  document.getElementById('password-length-text').innerText =
    passwordLengthEl.value
  generatePassword()
})

// Adicionando evento que toda vez que tiver marcado o checked ou não regera a senha
upperCaseCheckEl.addEventListener('click', generatePassword)
numberCaseCheckEl.addEventListener('click', generatePassword)
symbolCaseCheckEl.addEventListener('click', generatePassword)

document.getElementById('copy').addEventListener('click', copy)
document.getElementById('copy-icon').addEventListener('click', copy)
document
  .getElementById('refresh-icon')
  .addEventListener('click', generatePassword)

generatePassword()
