const express = require ('express');
const mongoose = require ('mongoose'); // importando a dependencia 
const routes = require ('./routes');

const app = express();

mongoose.connect('mongodb://<user>:<password>@omnistack-shard-00-00-xiuxl.mongodb.net:27017,omnistack-shard-00-01-xiuxl.mongodb.net:27017,omnistack-shard-00-02-xiuxl.mongodb.net:27017/test?ssl=true&replicaSet=OmniStack-shard-0&authSource=admin&retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// GET, POST, PUT, DELETE

// req.query = acessar query params (para filtros)
// req.params = acessar route params (para edição, delete)
// req.body = Acessar corpo da requisição (para criação e edição)

app.use(express.json()); // informar que o retorno será um json - utilizada form json

app.use(routes); // deve vir depois do express.json
app.listen(3333);



