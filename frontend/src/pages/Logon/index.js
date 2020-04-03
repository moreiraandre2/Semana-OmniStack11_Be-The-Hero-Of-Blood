import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {FiLogIn} from 'react-icons/fi';//npm install react-icons

import api from '../../services/api';

import './styles.css';

export default function Logon(){
    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogon(e){
        e.preventDefault();

        try{
            const response = await api.post('session', { id });

            localStorage.setItem('userName', response.data.name);
            localStorage.setItem('userId', id);

            history.push('/profile');
        }catch(err){
            alert('Erro ao efetuar logon, tente novamente.' + err);
        }
    }
    return (
        <div className="logon-container">
            <section>
                <h3>Be the</h3><h3 className="logo">Hero Of Blood</h3>

                <form  className="section-form" onSubmit={handleLogon}>
                    <h1 className="logon-title"> Faça seu Logon</h1>

                    <input 
                        placeholder="Sua ID" 
                        value={id}
                        onChange={e => setId(e.target.value)}    
                    />
                    <button className="button" type="submit" > Entrar</button>

                    <div className="link-container" >
                        <Link to="/register" className="link">
                            Não tenho cadastro
                        </Link>
                        <FiLogIn  size={16} color='#e02141' className="space-icon"/>
                    </div>
                    
                </form>
            </section>
        </div>
    );
}
