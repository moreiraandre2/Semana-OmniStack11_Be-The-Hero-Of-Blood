import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function Profile(){
    const [ calendars, setCalendars] = useState([]);

    const userName = localStorage.getItem('userName');
    const userId = localStorage.getItem('userId');

    const history = useHistory();

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: userId,
            }  
        }).then(response => {
            setCalendars(response.data);
        })
    }, [userId]);

    async function handleDelete(id){
        try{
            await api.delete(`calendar/${id}`, {
                headers: {
                    Authorization: userId,
                }  
            });

            setCalendars(calendars.filter(calendar => calendar.id !== id));

        } catch(err){
            alert(`Erro ao deletar visita, tente novamente. Erro: ${err}`);
        }
    }

    function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-container">
            <header>
                <div>
                    <h4>Be the</h4><h3 className="logo">Hero Of Blood!</h3>
                </div>
                
                <span>Bem vindo, { userName }</span>

                <Link className="button" to="/calendar/new" >
                    Cadastrar nova visita
                </Link>
                <button onClick={handleLogout} type="button"><FiPower size={18} color="#e02048" /></button>
            </header>
            <h2>Visitas Cadastradas</h2>
            <ul>
                {calendars.map(calendar => (
                    <li key={ calendar.id }>

                        <strong>Local</strong>
                        <p>{ calendar.place }</p>

                        <strong>Cidade</strong>
                        <p>{ calendar.city } / { calendar.uf }</p>

                        <strong>Data e Horário</strong>
                        <p>{ calendar.data } às { calendar.hour } horas</p>

                        <button onSubmit={() => handleDelete(calendar.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>

                    </li>
                ))}
            </ul>
        </div>
    );
}