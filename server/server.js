require('dotenv').config();
const bodyParser = require("body-parser")
    , express = require("express")
    , massive = require('massive')
    , cors = require('cors')

const app = express();

app.use(cors());
app.use(bodyParser.json());

const PORT = 4200;
app.listen(PORT, console.log(`I'm listening.. port: ${PORT}`));