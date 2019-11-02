import React, { useState } from 'react';
import api from '../../services/api';

export default function Login({ history }) { // history utilizado para fazer navegação

  const [email, setEmail] = useState(''); // IMPORTANTE no REAC ESTADO Testado componente / funcao ira retornar dois valores variavel email sempre atualizada com o ultimo valor, setEmail atualiza o valor do estado

  async function handleSubmit(event){
    event.preventDefault(); // previne o funcionando padrao da chamada, enviar user pra outra tela
    const response = await api.post('/sessions', { // post na rota criada passando email
      email,
    });  // aguardar a chamada api e quando devolver valor armazenado na variavel 

    const { _id } = response.data

    localStorage.setItem('user', _id); // grava a informacao no BD do navegador

    history.push('./dashboard'); // enviar usuario para rota desejada
  }

  return (
    // <> tag vazia para o react reconhecer /fragment - como se fosse uma div que nao aparece no html
    <> 
      <p>
        Ofereça <strong>spots</strong> para programadores e encontre <strong>talentos</strong> para sua empresa
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-MAIL *</label>
        <input 
          type="email"
          id="email"
          placeholder="Seu melhor email" 
          value={email} // manter sempre o campo atualizado
          onChange={ event => setEmail(event.target.value) } // valor que foi preechido dentro do input e seta o valor
        />

        <button className="btn" type="submit">Entrar</button>

      </form>
    </>
  );
}