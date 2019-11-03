import React, { useState, useMemo } from 'react'; // useMeno: observa o valor da variavel e ao alterar muda o valor
import api from '../../services/api';

import camera from '../../assets/camera.svg'

import './styles.css';

export default function New({ history }) {

  const [thumbnail, setThumbnail] = useState(null);
  const [company, setCompany] = useState('');
  const [techs, setTechs] = useState('');
  const [price, setPrice] = useState('');

  const preview = useMemo(() => {
    return thumbnail ? URL.createObjectURL(thumbnail) : null;
  }, [thumbnail])

  async function handleSubmit(event) { // chamar api para gravar os dados
    event.preventDefault(); // previne o corportamento padrão de enviar a algum lugar, dessa forma irá ser levado a rota que foi mencionada abaixo

    const data = new FormData();
    const user_id = localStorage.getItem('user'); // guarda id do usuario logado

    data.append('thumbnail', thumbnail); // guardar todos as infos que serão enviadas, pois não esta em formato JSON
    data.append('company', company);
    data.append('techs', techs);
    data.append('price', price);
    
    await api.post('/spots', data, {
      headers: { user_id }
    })

    history.push('/dashboard'); // envia user para a rota dashboard novamente

  }

  return (
    <form onSubmit={handleSubmit}>

      <label id="thumbnail"
        style={{ backgroundImage: `url(${preview})` }}
        className={thumbnail ? 'has-thumbnail' : ''}        
      >
        <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
        <img src={camera} alt="Select img "/>

      </label>

      <label htmlFor="company">EMPRESA *</label>
      <input
        id="company"
        placeholder="Sua empresa incrivel"
        value={company}
        onChange={event => setCompany(event.target.value)}
      />

    <label htmlFor="company">TECNOLOGIAS *<span> (separadas por vírgula)</span></label>
      <input
        id="techs"
        placeholder="Quais tecnologias usam?"
        value={techs}
        onChange={event => setTechs(event.target.value)}
    />

    <label htmlFor="price">VALOR DA DÍARIA *<span> (em branco para GRATUITO)</span> </label>
      <input
        id="price"
        placeholder="Valor cobrado por dia?"
        value={price}
        onChange={event => setPrice(event.target.value)}
    />

    <button type="submit" className="btn">Cadastrar</button>
  </form>
  )
}