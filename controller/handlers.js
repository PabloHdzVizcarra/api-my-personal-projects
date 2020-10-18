exports.home = (req, res) => {
  res.render('index.html')
}

exports.sendData = (req, res) => {
  console.log(req.body);
}