//rodar o npm install react-router-dom para criar as rotas
// com a propriedade exact o caminho da rota precisa ser exato
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewCalendar from './pages/NewCalendar';



export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/calendar/new" component={NewCalendar} />

            </Switch>
        </BrowserRouter>
    );
}