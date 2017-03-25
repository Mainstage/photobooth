
const fs = require('fs');

module.exports = (app) => {
  app.post('/photo', (req, res) => {
    f = fs.createWriteStream(`client/photos/${Date.now()}.${req.headers['content-type'].split('/')[1]}`);
    f.on('pipe', (data) => {
      res.send()
    });
    req.pipe(f)
  });
  app.get('/photos', (req, res) => {
    fs.readdir('client/photos', (err, files) => {
      res.send(err || files);
    });
  })
}
