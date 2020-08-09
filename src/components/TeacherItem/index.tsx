import React from 'react';
import { View, Image, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';


function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/euwilliamgoncalves.png' }}
                />
                <View style={styles.profileInfo}>
                    <Text style={styles.name}>William Gonçalves</Text>
                    <Text style={styles.subject}>UI/UX</Text>
                </View>    
            </View>

            <Text style={styles.bio}>
            Desenvolvedor FullStack em aprendizado, apaixonado por Front-End, Design, UI e UX. Pai, namorido, carioca e flamenguista que já sonhou em ser fotógrafo.
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/hora {'   '}
                    <Text style={styles.priceValue}>R$ 50</Text> 
                </Text>
                <View style={styles.buttonsContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        <Image source={heartOutlineIcon} />
                        {/* <Image source={unfavoriteIcon} /> */}
                    </RectButton>
                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon} />
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>

            

        </View>
    )
}

export default TeacherItem;