import React, { useState} from 'react';
import { TouchableOpacity, Text, View, Alert } from 'react-native';
import * as Facebook from 'expo-facebook';
import { useNavigation } from '@react-navigation/native';
import api from '../../services/api';

import styles from './styles';

export default function Login(){
    
    const navigation = useNavigation();

    async function navigateTo(user){
        const response = await api.post('appsession', user);
        if(response.data.email !== user.mail){
            navigateToRegister(user);
        }
        else{
            navigateToCalendar(user);
        }
    }

    async function navigateToRegister(user){
        navigation.navigate('Register', { user });
    }

    function navigateToCalendar(user){
        navigation.navigate('Calendar', { user });
    }

    async function logIn(){
        try{
            await Facebook.initializeAsync('213446393274192');
            const{
                type,
                token,
                expires,
                permissions,
                declinedPermissions,
            } = await Facebook.logInWithReadPermissionsAsync({
                permissions: ['public_profile', 'email'],
            });

            if(type === 'success'){
                const response = await fetch(`https://graph.facebook.com/me?access_token=${token}&fields=email,name`);
                
                navigateTo(await response.json());
                
               
            }
            else{
                alert('Cancel Login');
            }

        }catch(error){
            alert(`Fcebook Login error: ${error}`);
        }
    }

    return (
        <View style={styles.container}>
           
                <View>
                    <Text style={[{fontSize: 10}]}>Be The</Text>
                    <Text style={styles.logo}>Hero Of Blood</Text>
                </View>
            <TouchableOpacity style={styles.logInButton} onPress={logIn}>
                <Text style={styles.logInButtonText}>Login com Facebook</Text>
            </TouchableOpacity>
        </View>
    );
}