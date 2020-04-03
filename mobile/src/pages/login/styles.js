import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    container:{
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    logo:{
        fontWeight: 'bold',
        fontSize: 20,
        color: '#e02141'
    },

    logInButton:{
        marginTop: 24,
        backgroundColor: '#3b5998',
        borderRadius: 8,
        height: 50,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },

    logInButtonText:{
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
});
