import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#16697A',
        justifyContent: 'center',
        padding: 40
    },
    content: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontFamily: 'Play_700Bold',
        fontSize: 32,
        color: '#fff',
        lineHeight: 37,
        maxWidth: 180
    },
    description: {
        marginTop: 24,
        color: '#efecf7',
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'Montserrat_400Regular',
        maxWidth: 240
    },
    okButton: {
        marginVertical: 40,
        backgroundColor: '#FFA62B',
        height: 58,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8
    },
    okButtonText: {
        fontFamily: 'Play_700Bold',
        fontSize: 16,
        color: '#fff'
    }
});

export default styles