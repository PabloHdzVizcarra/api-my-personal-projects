exports.home = (req, res) => {
  res.render('index.html')
}

exports.sendData = (req, res) => {
  console.log(req.body);
  res.status(200).json({"exito": "true"})
}