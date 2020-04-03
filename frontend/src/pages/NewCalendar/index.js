import React, {useState} from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';

import api from '../../services/api';

import './styles.css';

export default function NewCalendar(){
    const [place, setPlace] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');
    const [data, setData] = useState('');
    const [hour, setHour] = useState('');

    const userId = localStorage.getItem('userId');

    const history = useHistory();

    async function handleNewCalendar(e){
        e.preventDefault();

        const values = ({
            place,
            city,
            uf,
            data,
            hour
        });

        try{
            const response = await api.post('calendar', values, {
                headers: {
                    Authorization: userId,
                }
            });
            alert(`Cadastro efetuado, ID  ${response.data.id}`);
            history.push('/profile');
        }catch(err){
            alert('Erro no cadastro, tente novamente.' + err);
        }
    }

    return(
        <div className="new-calendar-container">
            <div className="content">
                <section>
                    <h3>Be the</h3><h3 className="logo">Hero Of Blood</h3>
                    <h1>Cadastro de nova visita</h1>
                    <p>Cadastre o local em que haverá uma unidade do hemocentro.</p>
                    
                    <FiArrowLeft  size={16} color='#e02141'/>
                    <Link className="link" to="/profile">
                        Voltar à Home
                    </Link>
                    
                </section>

                <form onSubmit={handleNewCalendar}>
                    <input 
                        placeholder="Local" 
                        value={place}
                        onChange={e => setPlace(e.target.value)}
                    />
                    <input  
                        placeholder="Cidade"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                     />
                    <input 
                        placeholder="Estado" 
                        value={uf}
                        onChange={e => setUf(e.target.value)}
                        />
                    <input 
                        placeholder="Data ex: 01/01/2020" 
                        value={data}
                        onChange={e => setData(e.target.value)}
                        />
                    <input 
                        placeholder="Horário" 
                        value={hour}
                        onChange={e => setHour(e.target.value)}
                    />
                    

                    <button className="button" type="submit">Cadastar</button>
                    
                </form>
            </div>
        </div>
    );
}