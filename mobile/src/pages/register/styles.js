import {StyleSheet} from 'react-native';
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

    description:{
        fontSize: 16,
        lineHeight: 24,
        color: '#737380',
        marginTop: 14,
    },

    register: {
        padding: 24,
        borderRadius: 8,
        marginBottom: 16,
        backgroundColor: '#FFF',
        marginTop: 14,
    },

    resgisterInput:{
        borderBottomWidth: 1,
        height: 50,
        borderColor: '#737380',
    },

    registerButton:{
        backgroundColor: '#e02041',
        borderRadius: 8,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 24,
    },

    registerButtonText:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },

});