//Get input value
function gatherInput() {
  let inpValue = document.getElementById('inp').value

  return inpValue
}

const manipulateArray = {
  //Create an array from the given input and changes letters for numbers
  //and so on
  manipulateString() {
    let myArray = Array.from(gatherInput().toLocaleLowerCase(), x => {
      switch (x) {
        case 'a':
          return 1
          break;
        case 'b':
          return 2
          break;
        case 'c':
          return 3
          break;
        case 'd':
          return 4
          break;
        case 'e':
          return 5
          break;
        case 'f':
          return 6
          break;
        case 'g':
          return 7
          break;
        case 'h':
          return 8
          break;
        case 'i':
          return 9
          break;
        case 'j':
          return 10
          break;
        case 'k':
          return 11
          break;
        case 'l':
          return 12
          break;
        case 'm':
          return 13
          break;
        case 'n':
          return 14
          break;
        case 'o':
          return 15
          break;
        case 'p':
          return 16
          break;
        case 'q':
          return 17
          break;
        case 'r':
          return 18
          break;
        case 's':
          return 19
          break;
        case 't':
          return 20
          break;
        case 'u':
          return 21
          break;
        case 'v':
          return 22
          break;
        case 'w':
          return 23
          break;
        case 'x':
          return 24
          break;
        case 'y':
          return 25
          break;
        case 'z':
          return 26
          break;
        case ',':
          return ','
          break;
        case '!':
          return '!'
          break;
        case '?':
          return '?'
          break;
        case '.':
          return '.'
          break;
        case ' ':
          return ' '
          break;
        case 'á':
          return '1(á)'
          break;
        case 'ã':
          return '1(ã)'
          break;
        case 'ó':
          return '15(ó)'
          break;
        case 'õ':
          return '15(õ)'
          break;
        case 'ô':
          return '15ô'
          break;
        case 'é':
          return '5(é)'
          break;
        case 'ê':
          return '5(ê)'
          break;
        case 'ç':
          return '3(ç)'
          break;
        case ',':
          return ','
          break;
        case '0':
          return 'Num(0)'
          break;
        case '1':
          return 'Num(1)'
          break;
        case '2':
          return 'Num(2)'
          break;
        case '3':
          return 'Num(3)'
          break;
        case '4':
          return 'Num(4)'
          break;
        case '5':
          return 'Num(5)'
          break;
        case '6':
          return 'Num(6)'
          break;
        case '7':
          return 'Num(7)'
          break;
        case '8':
          return 'Num(8)'
          break;
        case '9':
          return 'Num(9)'
          break;
        default:
          return 404;
      }
    })

    return myArray
  },

  //Format the array so it doesn't look confusing
  formatArray() {
    let formattedArray = this.manipulateString().map(y => {
      switch (y) {
        case '':
          return ''
          break;
        case ' ':
          return ' '
          break;
        case ',':
          return ','
          break;
        case "!":
          return y
          break;
        default:
          return `[${y}]`
          break;
      }
    }).join(' - ')

    return formattedArray
  },

  //Prints the array and erases the input text field
  printArrayAndCleanP() {
    document.getElementById('demo').innerHTML = this.formatArray()

    document.getElementById('inp').value = ''
  }
}
