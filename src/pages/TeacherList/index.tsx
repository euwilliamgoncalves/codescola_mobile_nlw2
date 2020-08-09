import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { ScrollView, BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons'

import PageHeader from '../../components/PageHeader';

import TeacherItem from '../../components/TeacherItem';


import styles from './styles'


function TeacherList() {

    const [isFiltersVisible, setIsFiltersVisible] = useState(false);

    function handleToggleFiltersVisible() {
        setIsFiltersVisible(!isFiltersVisible);
    }

    return (
        <View style={styles.container}>
            <PageHeader 
                title="Professores disponíveis" 
                headerRight={(
                    <BorderlessButton onPress={handleToggleFiltersVisible}>
                        <Feather name="filter" size={32} color="#fff" />
                    </BorderlessButton>
                )}
            >
                { isFiltersVisible && (<View style={styles.searchForm}>
                    <Text style={styles.label}>Matéria</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Escolha uma..."
                        placeholderTextColor="#999"
                    />
                    <View style={styles.inputGroup}>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Dia da semana</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Escolha um..."
                                placeholderTextColor="#999"
                            />
                        </View>
                        <View style={styles.inputBlock}>
                            <Text style={styles.label}>Horário</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Qual horário?"
                                placeholderTextColor="#999"
                            />
                        </View>
                    </View>
                    <RectButton style={styles.submitButton}>
                        <Text style={styles.submitButtonText}>Filtrar</Text>
                    </RectButton>
                </View>
                )}
            </PageHeader>
            <ScrollView style={styles.teacherList}>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
                <TeacherItem/>
            </ScrollView>
        </View>
    )
}

export default TeacherList;