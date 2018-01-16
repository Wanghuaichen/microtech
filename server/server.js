require('dotenv').config();
const bodyParser = require("body-parser")
    , express = require("express")
    , massive = require('massive')
    , cors = require('cors')
    , prerender = require('prerender-node')

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(require('prerender-node'));

const PORT = 4200;
app.listen(PORT, console.log(`I'm listening.. port: ${PORT}`));