function generatePassword() {
  // Criando conjunto de caracteres que serão utilizados na criação da senha
  const chars =
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789?!@#$%&*()[]{}'

  // Variável onde irá ficar armazenado o valor da senha
  let password = ''

  // Esse loop vai percorrer a quantidade de caracteres para a criação de senha, e gerar uma senha com o tamanho de 8 caracteres
  for (let i = 0; i < 8; i++) {
    // Eu transformo o número e gero um número aleatório vezes a quantidade de caracteres
    const randomNumber = Math.floor(Math.random() * chars.length)
    // Atribuo a senha vazia com o conjunto de caracteres recortados pela função substring, com o inicio do randomNumber, e o final dele
    password += chars.substring(randomNumber, randomNumber + 1)
  }

  console.log(password)
}

generatePassword()
