import React, { useState, useEffect} from 'react'
import { FlatList, View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { useNavigation, useRoute} from '@react-navigation/native';

import api from '../../services/api';

import styles from './styles';

export default function Calendar(){
    const [calendars, setCalendars]  = useState([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const navigation = useNavigation();

    const route = useRoute();

    const user = route.params.user.name;

    function navigateToDetail(calendar){
        navigation.navigate('Detail', { calendar });
    }

    async function loadCalendars(){
        if(loading){
            return;
        }

        if(total > 0 && calendars.length === total){
            return;
        }

        setLoading(true);

        const response = await api.get('calendar', {
            params: { page },
        });

        setCalendars([...calendars, ...response.data]);
        setTotal(response.headers['x-total-count']);
        setPage(page + 1);
        setLoading(false);
    }

    useEffect(() => {
        loadCalendars();
    },[])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View>
                    <Text style={[{fontSize: 10}]}>Be The</Text>
                    <Text style={styles.logo}>Hero Of Blood</Text>
                </View>
                
                <Text style={styles.headerText}>
                    <Text style={styles.headerTextBold}>{user}</Text>

                </Text>
            </View>
            <Text style={styles.title}>Bem Vindo</Text>
            <Text style={styles.description}>Escolha um dos locais para fazer a sua doação de sangue</Text>

            <FlatList
                data={calendars}
                style={styles.calendarList}
                keyExtractor={calendar => String(calendar.id)}
                showsVerticalScrollIndicator={false}
                onEndReached={loadCalendars} //carrega a lista quando chega fim do scroll
                onEndReachedThreshold={0.1}//quantos porcento prximo do fim da lista va carregar novos itens
                renderItem={({ item: calendar }) => (
                    <View style={styles.calendar}>
                        <Text style={styles.calendarProperty}>Hemocentro:</Text>
                        <Text style={styles.calendarValue}>{calendar.name}</Text>

                        <Text style={styles.calendarProperty}>Cidade</Text>
                        <Text style={styles.calendarValue}>{calendar.city}</Text>

                        <Text style={styles.calendarProperty}>Data:</Text>
                        <Text style={styles.calendarValue}>{calendar.data}</Text>

                        <TouchableOpacity 
                            style={styles.detailsButton}
                            onPress={() => navigateToDetail(calendar)}
                        >
                            <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                            <Feather name="arrow-right"  size={16}  color="#E02041" />
                        </TouchableOpacity>
                    </View>
                )}
            />

        </View>
    );
}