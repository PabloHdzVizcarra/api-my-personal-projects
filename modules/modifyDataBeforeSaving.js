const modifyDataBeforeSaving = (data, dataToReplace) => {
  data.technologies = dataToReplace
  return {...data}
}


module.exports = {
  modifyDataBeforeSaving
}