import React from 'react'
import { View, Text, TouchableOpacity, Linking , ScrollView} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import * as MailComposer from 'expo-mail-composer';
import { Feather } from '@expo/vector-icons';

import styles from './styles';

export default function Detail(){  

    const route = useRoute();

    const calendar = route.params.calendar;

    const navigation = useNavigation();

    const message = 'Olá, tudo bem? Gostaria de efetuar a doação, mas tenho dúvidas, vocês poderiam me ajudar?';

    function navigationBack(){
        navigation.goBack();
    }

    function sendMail(){
        MailComposer.composeAsync({
            subject: 'Um Novo Herói quer doar sangue.',
            recipients: 'a.moreiraskate@gmail.com',
            body: message
        });
    }

    function sendWhatsapp(){
        Linking.openURL(`whatsapp://send?phone=+5519991915348&text=${message}`);
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={[{fontSize: 10}]}>Be The</Text>
                    <Text style={styles.logo}>Hero Of Blood</Text>
                </View>
                <TouchableOpacity 
                    style={styles.backButton}
                    onPress={navigationBack}
                >
                    <Feather name="arrow-left"  size={16}  color="#E02041" />
                    <Text style={styles.backButtonText}>Voltar</Text>
                    
                </TouchableOpacity>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.calendar}>
                <Text style={[styles.calendarProperty, { marginTop: 0}]}>
                    Hemocentro: <Text style={[styles.calendarValue, {fontWeight: 'normal'}]}>{calendar.name}</Text>
                </Text>
            
                <Text style={styles.calendarProperty}>
                    Cidade: <Text style={[styles.calendarValue, {fontWeight: 'normal'}]}>{calendar.city}</Text>
                </Text>
                <Text style={styles.calendarProperty}>
                    Local: <Text style={[styles.calendarValue, {fontWeight: 'normal'}]}>{calendar.place}</Text>
                </Text>

                <Text style={styles.calendarProperty}>
                    Data: <Text style={[styles.calendarValue, {fontWeight: 'normal'}]}>{calendar.data}</Text>
                </Text>

                <Text style={styles.calendarProperty}>
                    Horário: <Text style={[styles.calendarValue, {fontWeight: 'normal'}]}>{calendar.hour}</Text>
                </Text>
            </View>
            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Contato</Text>
                <Text style={styles.heroDescription}>Para esclarecer dúvidas entre em contato</Text>
                
                <View style={styles.actions}>
                    <TouchableOpacity 
                        style={styles.action} 
                        onPress={sendWhatsapp}
                    >
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={styles.action} 
                        onPress={sendMail}
                    >
                        <Text style={styles.actionText}>E-Mail</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
            </ScrollView>
            

        </View>
    );
}