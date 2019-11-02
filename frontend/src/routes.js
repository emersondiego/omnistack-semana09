import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Switch permite que apenas ua rota seja chamada, nao sendo chamadas duas rotas por exemplo

// exact somente retorna a rota se for exatamento o que for esperado

import Login from './pages/Login/index';
import Dashboard from './pages/Dashboard/index';
import New from './pages/New/index';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />  
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/new" component={New} />

      </Switch>
    
    </BrowserRouter>
  );
}