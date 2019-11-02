const express = require ('express');
const mongoose = require ('mongoose'); // importando a dependencia 
const cors = require ('cors');
const routes = require ('./routes');
const path = require ('path');


const app = express();

mongoose.connect('mongodb://omnistack:omnistack@omnistack-shard-00-00-xiuxl.mongodb.net:27017,omnistack-shard-00-01-xiuxl.mongodb.net:27017,omnistack-shard-00-02-xiuxl.mongodb.net:27017/test?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// GET, POST, PUT, DELETE

// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação e edição)

app.use(cors());
app.use(express.json()); // informar que o retorno será um json - utilizada form json

app.use(routes); // deve vir depois do express.json
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads'))); // retorna arquivos estaticos 
app.listen(3333);



