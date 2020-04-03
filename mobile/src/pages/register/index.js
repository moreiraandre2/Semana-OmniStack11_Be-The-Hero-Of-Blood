import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import api from '../../services/api';

import styles from './styles';

export default function Register(){

    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const navigation = useNavigation();

    const route = useRoute();

    const user = route.params.user;

    const name = user.name;

    const email = user.email;

    const data = {
        name,
        email,
        whatsapp,
        city,
        uf
    }

    async function handleRegister(){
        try{
            const response = await api.post('users', data);
            alert('Cadastro finalizado');
            navigation.navigate('Calendar', { user });
        }catch(err){
            alert('Erro no cadastro, tente novamente.' + err);
        }
    }

    return(
    
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={[{fontSize: 10}]}>Be The</Text>
                    <Text style={styles.logo}>Hero Of Blood</Text>
                </View>
                
            </View>

        <Text style={styles.description}>Olá <Text style={[{fontWeight: 'bold',}]}>{name}</Text>, precisamos de mais alguns dados seu para finalizar o seu cadastro.</Text>

            <ScrollView style={styles.register} showsVerticalScrollIndicator={false}>
                
                <TextInput 
                    style={styles.resgisterInput}
                    placeholder={'Whatsapp'}
                    onChangeText={whatsapp => setWhatsapp(whatsapp)}
                />
                <TextInput 
                    style={styles.resgisterInput}
                    placeholder={'Cidade'}
                    onChangeText={city => setCity(city)}
                />
                <TextInput 
                    style={styles.resgisterInput}
                    placeholder={'UF'}
                    onChangeText={uf => setUf(uf)}
                />

                <TouchableOpacity 
                    style={styles.registerButton} 
                    onPress={() => {}}
                    onPress={handleRegister}
                >
                    <Text style={styles.registerButtonText}>Finalizar Cadastro</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}