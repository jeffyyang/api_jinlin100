var express = require("express");
var logfmt = require("logfmt");
var app = express();
var wx  = new require("wx");
({
  app_id: 'xx-xxx',
  app_secret: 'ddd',
  token: 'dd',
  encoding_aes_key:''
});


app.use(logfmt.requestLogger());

app.use('/wx', wx);

app.get('/', function(req, res) {
  res.send('近邻微信平台2015，即将盛大开启！');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});