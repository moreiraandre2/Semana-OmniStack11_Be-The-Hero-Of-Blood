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

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerText: {
        fontSize: 15,
        color: '#E02041',
    },

    backButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    backButtonText: {
        color: '#e02141',
        fontSize: 15,
        fontWeight: 'bold',
        marginLeft: 5,
    },

    calendar: {
        padding: 24,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#FFF',
        marginTop: 28,
    },

    calendarProperty: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#41414d',
        marginTop: 14,
    },

    calendarValue: {
        marginTop: 4,
        color: '#737380',
        fontSize: 15,
    },

    contactBox:{
        padding: 24,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#FFF',
    },

    heroTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#13131a',
    },

    heroDescription: {
        fontSize: 14,
        color: '#737380',
        marginTop: 16,
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    action:{
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    actionText:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
});