// Input de range sempre irá iniciar com um tamanho de 16
let passwordLength = 16

// Seleciono o input onde ira ficar a nossa senha gerada
const inputEl = document.getElementById('password')

function generatePassword() {
  // Criando conjunto de caracteres que serão utilizados na criação da senha
  const chars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789?!@#$%&*()[]{}'

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
}

function copy() {
  navigator.clipboard.writeText(inputEl.value)
}

// Recuperando o input de range e adicionando um evento onde toda vez que for arrastado o range, o tamanho do password irá aumentar de acordo com o valor do input range e é criado uma nova senha ao fazer isso
const passwordLengthEl = document.getElementById('password-length')
passwordLengthEl.addEventListener('input', () => {
  passwordLength = passwordLengthEl.value
  generatePassword()
})

document.getElementById('copy').addEventListener('click', copy)
document.getElementById('copy-icon').addEventListener('click', copy)

generatePassword()
