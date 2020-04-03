import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import {FiArrowLeft} from 'react-icons/fi';
import api from '../../services/api';
import './styles.css';

export default function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e){
        e.preventDefault();
        
        const data = ({
            name,
            email,
            whatsapp,
            city,
            uf
        });

        try{
            const response = await api.post('users', data);
            alert(`Cadastro efetuado, sua ID de acesso ${response.data.id}`);
            history.push('/');
        }catch(err){
            alert('Erro no cadastro, tente novamente.' + err);
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <h3>Be the</h3><h3 className="logo">Hero Of Blood</h3>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e cadastre os locais de visitas dos hemocentros.</p>
                    
                    <FiArrowLeft  size={16} color='#e02141'/>
                    <Link className="link" to="/">
                        Voltar ao Logon
                    </Link>
                   
                </section>

                <form onSubmit={handleRegister}>
                    <input 
                        placeholder="Seu Nome" 
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <input 
                        type="email" 
                        placeholder="Seu E-Mail" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input 
                        placeholder="Seu Whatsapp" 
                        value={whatsapp}
                        onChange={e => setWhatsapp(e.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            placeholder="Sua Cidade" 
                            value={city}
                            onChange={e => setCity(e.target.value)}
                        />
                        <input 
                            placeholder="UF" 
                            styles={{ width: 80 }}
                            value={uf}
                            onChange={e => setUf(e.target.value)}
                        />
                    </div>

                    <button className="button" type="submit">Cadastar</button>
                    
                </form>
            </div>
        </div>

    );
}