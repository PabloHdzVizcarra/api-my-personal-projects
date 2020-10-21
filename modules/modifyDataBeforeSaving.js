const modifyDataBeforeSaving = (data, field, dataToReplace) => {
  data[field] = dataToReplace
  return {...data}
}


module.exports = {
  modifyDataBeforeSaving
}