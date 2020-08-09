import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'
import { BorderlessButton } from 'react-native-gesture-handler';

import styles from './styles';

import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import giveClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';

function Landing() {
    const { navigate } = useNavigation();

    function handleNavigateToGiveClassesPage() {
        navigate('GiveClasses')
    }

    function handleNavigateToStudyPage() {
        navigate('Study')
    }

    return (
        <View style={styles.container}>
            <Image source={landingImg} style={styles.banner} />
            <Text style={styles.title}>
                Seja Bem vindo, {'\n'}
                <Text style={styles.titleBold}>
                    O que vamos estudar, hoje?
                </Text>
            </Text>
            <View style={styles.buttonsContainer}>
                <BorderlessButton 
                    onPress={handleNavigateToStudyPage}
                    style={[styles.button, styles.buttonPrimary]}
                >
                    <Image source={studyIcon} />
                    <Text style={styles.buttonText}>Estudar</Text>
                </BorderlessButton>
                <BorderlessButton 
                    onPress={handleNavigateToGiveClassesPage} 
                    style={[styles.button, styles.buttonSecondary]}
                >
                <Image source={giveClassesIcon} />
                    <Text style={styles.buttonText}>Dar Aulas</Text>
                </BorderlessButton>
            </View>
            <Text style={styles.totalConnections}>
                Total de 200 conexões realizadas {' '}
                <Image source={heartIcon} />
            </Text>
        </View>
    )
}

export default Landing;