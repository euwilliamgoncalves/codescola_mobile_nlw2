import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16697A',
        justifyContent: 'center',
        padding: 40
    },
    banner: {
        width: '100%',
        resizeMode: 'contain'
    },
    title: {
        fontFamily: 'Montserrat_400Regular',
        color: '#fff',
        fontSize: 20,
        lineHeight: 30,
        marginTop: 80
    },
    titleBold: {
        fontFamily: 'Montserrat_600SemiBold'
    },
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 40,
        justifyContent: 'space-between',
    },
    button: {
        height: 150,
        width: '48%',
        backgroundColor: '#333',
        borderRadius: 8,
        padding: 24,
        justifyContent: 'space-between'
    },
    buttonPrimary: {
        backgroundColor: '#4caac2'
    },
    buttonSecondary: {
        backgroundColor: '#FFA62B'
    },
    buttonText: {
        fontFamily: 'Play_700Bold',
        color: '#fff',
        fontSize: 20,
    },
    totalConnections: {
        fontFamily: 'Montserrat_400Regular',
        color: '#efecf7',
        fontSize: 12,
        lineHeight: 20,
        maxWidth: 140,
        marginTop: 40,
    }
});

export default styles