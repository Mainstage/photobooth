const express = require('express');
const logging = require('./config/logging.js');
const bodyParser = require('body-parser');

const app = express();
app.use(logging.requestLogger);

const dotenv = require('dotenv');
dotenv.config();

app.use(express.static(`${__dirname}/../client`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./config/routes.js')(app);

app.use(logging.errorLogger);

const port = process.env.PORT || 4444;
app.listen(port, () => {
  logging.info(`listening on *:${port}`);
});
