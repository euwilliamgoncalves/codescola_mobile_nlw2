import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ddd',
    },

    teacherList: {
        marginTop: -40,
        borderTopLeftRadius: 8
    },

    searchForm: {
        marginBottom: 24,
    },

    label: {
        color: '#eee',
        fontFamily: 'Montserrat_400Regular'
    },

    inputGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    inputBlock: {
        width: '48%',
    },

    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: 'center',
        paddingHorizontal: 16,
        marginTop: 4,
        marginBottom: 16,
    },

    submitButton: {
        backgroundColor: '#04b461',
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    submitButtonText: {
        color: '#fff',
        fontFamily: 'Play_700Bold',
        fontSize: 16
    }
})

export default styles;