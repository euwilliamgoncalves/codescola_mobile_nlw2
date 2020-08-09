import React, { useState } from 'react';
import { View, ScrollView, AsyncStorage } from 'react-native';

import PageHeader from '../../components/PageHeader';
import TeacherItem, { Teacher } from '../../components/TeacherItem';

import styles from './styles';
import { useFocusEffect } from '@react-navigation/native';

const Favorites: React.FC = () => {
    const [favorites, setFavorites] = useState<[]>([]);

    useFocusEffect(
        React.useCallback(() => {
          loadFavorites();
        }, [])
      )
 
    function loadFavorites() {
        AsyncStorage
            .getItem('favorites')
            .then(response => {
                if (response) {
                    const favoritedTeachers = JSON.parse(response);
                    setFavorites(favoritedTeachers);
                }
            });
    }
    
    return (
        <View style={styles.container}>
            <PageHeader title='Meus favoritos'/>
            <ScrollView 
                style={styles.teacherList}
            >
                {
                    favorites.map((teacher: Teacher) => (
                        <TeacherItem 
                            key={teacher.id} 
                            teacher={teacher} 
                            favorited
                        />
                    ))
                }
            </ScrollView>
        </View>
    );
}

export default Favorites;