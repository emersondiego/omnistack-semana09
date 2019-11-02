import React, { useEffect, useState } from 'react';  // useEffect retorna filtos de algo que desejo
import { Link } from 'react-router-dom' // lin serve para criar links para levar a outras rotas
import api from '../../services/api';

import './styles.css';

export default function Dashboard() {
  const [spots, setSpots] = useState([]); // melhor forma de inicializar é com uma lista vazia

  useEffect(() => {
    async function loadSpots() {

      const user_id = localStorage.getItem('user'); // variavel que busca o id do user do bd do navegador 

      const response = await api.get('/dashboard', { //
        headers: { user_id } // passa o user_id no headers da request 
      });

      setSpots(response.data);
    }

    loadSpots();

  }, []);

  // ul - lista
  return (
    <>
      <ul className='spot-list'>
        {spots.map( spot => (
          <li key={spot._id}>
            <header style={{ backgroundImage: `url(${spot.thumbnail_url})` }} />
            <strong> {spot.company} </strong>  
            <spam> {spot.price ? `R$${spot.price}/dia` : 'GRATUITO' } </spam>
          </li>
        ))}
      </ul>

      <Link to="/new">
        <button className="btn">Cadastrar novo spots</button>
      </Link>
    </>
  )
}