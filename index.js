class Formatter {
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }
  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'\s]+/g, "")
  }
  static titleize(str) {
    let newArr = []
    str.split(' ').forEach(word => {
      if (word !== 'the' && word !== 'a' && word !== 'an' && word !== 'but' && word !== 'of'
        && word !== 'and' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from') {

        newArr.push(word.charAt(0).toUpperCase() + word.substring(1))

      } else {
        newArr.push(word)
      }
    })
    newArr.splice(0, 1, newArr[0].charAt(0).toUpperCase() + newArr[0].slice(1))
    return newArr.join(' ')
  }
}

// function capital(str) {
  
// }

// console.log(capital(`a tale of two cities`))

