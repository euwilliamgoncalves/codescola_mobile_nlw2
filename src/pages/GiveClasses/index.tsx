import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNavigateBack() {
        goBack();
    }
    
    return (
        <View style={styles.container}>
            <ImageBackground 
                resizeMode="contain" 
                source={giveClassesBgImage} 
                style={styles.content}
            >
                <Text style={styles.title}>Que bom poder contar contigo!</Text>
                <Text style={styles.description}>
                    Para começar, você precisa se cadastrar como professor na nossa plataforma web.
                </Text>
            </ImageBackground>
            <BorderlessButton onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>
                    Vamos lá!
                </Text>
            </BorderlessButton>
        </View>
    );
}

export default GiveClasses;