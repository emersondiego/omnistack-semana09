// Index (retorna listagem) , Show (unica sessao), Store (criar sessao), Update (alterar sessao), Destroy (deletar)

const User = require('../models/User'); 

module.exports = {
  async store(req, res) { // passar async pois é algo que pode demorar um pouco 
    const { email }  = req.body; // desustruturação nao precisa passar req.body.email

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email }); // await só permite prosseguir quando a linha acima é finalizada
    }

    return res.json(user);
  }
};