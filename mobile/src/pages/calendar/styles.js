import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
    },

    logo:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#e02141'
    },

    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 15,
        color: '#737380',
    },

    headerTextBold:{
        fontWeight: 'bold',
    },

    title:{
        fontSize: 30,
        marginBottom: 16,
        marginTop: 28,
        color: '#13131a',
        fontWeight: 'bold',
    },

    description:{
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
    },

    calendarList:{
        marginTop: 32,
    },

    calendar: {
        padding: 24,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#FFF',
        
    },

    calendarProperty: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#41414d',
    },

    calendarValue: {
        marginTop: 4,
        marginBottom: 14,
        color: '#737380',
        fontSize: 15,
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    detailsButtonText: {
        color: '#e02141',
        fontSize: 15,
        fontWeight: 'bold',
    },

});