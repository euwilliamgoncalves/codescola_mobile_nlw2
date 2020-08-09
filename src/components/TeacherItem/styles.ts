import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#4caac2',
        borderRadius: 8,
        marginHorizontal: 16,
        marginBottom: 16,
        overflow: 'hidden'
    },

    profile: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 24,
    },

    avatar: {
        width: 64,
        height: 64,
        borderRadius: 32,
        backgroundColor: '#eee'
    },

    profileInfo: {
        marginLeft: 16,
    },

    name: {
        fontFamily: 'Play_700Bold',
        fontSize: 20,
        color: '#135764'
    },

    subject: {
        fontFamily: 'Montserrat_400Regular',
        color: '#6A6180',
        fontSize: 12,
        marginTop: 4
    },
    bio: {
        marginHorizontal: 24,
        fontFamily: 'Montserrat_400Regular',
        fontSize: 14,
        lineHeight: 28,
        color: '#6A6180',
    },

    footer: {
        backgroundColor: '#fafafc',
        padding: 24,
        alignItems: 'center',
        marginTop: 24
    },

    price: {
        fontFamily: 'Montserrat_400Regular',
        color: '#0f404b',
        fontSize: 14,
    },
    
    priceValue: {
        fontFamily: 'Play_700Bold',
        color: '#135764',
        fontSize: 16,
    },

    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },

    favoriteButton: {
        backgroundColor: '#16697A',
        width: 56,
        height: 56,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8
    },

    favorited: {
        backgroundColor: '#e33d3d'
    },

    contactButton: {
        backgroundColor: '#FFA62B',
        flex: 1,
        height: 56,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 8,
    },

    contactButtonText: {
        color: '#fff',
        fontFamily: 'Play_700Bold',
        fontSize: 16,
        marginLeft: 16
    }
});

export default styles;