//Get input value
function gatherInput() {
  let inpValue = document.getElementById('inp').value

  return inpValue
}

// Transform letters in alphabet indexes
function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz '

  if (text != undefined && !text.match(/[^A-Za-z ]/g, "")) {
    const string = text.toString().toLowerCase()
    const stringArray = Array.from(string)

    let output = stringArray.map(e => {
      let letter = ''
      alphabet.indexOf(e) != 26
        ? letter = `[${alphabet.indexOf(e) + 1}]`
        : letter = `[Espaço]`
      return letter
    })

    return output.join("-")

  } else {
    return 'Somente letras são permitidas.'
  }
}

// Prints the result and clear input and result fields
function printResult() {
  let container = document.querySelector('p#demo')
  container.innerHTML = ''
  container.innerHTML = alphabetPosition(gatherInput())
  document.querySelector('input#inp').value = ''
}
