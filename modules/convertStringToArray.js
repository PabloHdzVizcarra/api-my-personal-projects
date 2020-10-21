const convertStringToArray = (string, separator) => {
  const data = string.split(separator)
  return data.map(elem => elem.trim())
}


module.exports = {
  convertStringToArray
}