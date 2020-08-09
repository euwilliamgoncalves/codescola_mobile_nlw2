import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import TeacherList from '../pages/TeacherList';
import Favorites from '../pages/Favorites';

const { Navigator, Screen } = createBottomTabNavigator();

function StudyTabs() {
    return (
        <Navigator
            tabBarOptions={{
                style: {
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 64,
                },
                tabStyle: {
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                },
                iconStyle: {
                    flex: 0,
                    width: 20,
                    height: 20,
                },
                labelStyle: {
                    fontFamily: 'Play_700Bold',
                    fontSize: 13,
                    marginLeft: 16,
                },
                inactiveBackgroundColor: '#555',
                activeBackgroundColor: '#ddd',
                inactiveTintColor: '#333',
                activeTintColor: '#333',
            }}
        >
            <Screen 
                name="TeacherList" 
                component={TeacherList} 
                options={{
                    tabBarLabel: 'Professores',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-easel" size={size} color={focused ? '#FFA62B' : color} />
                        )
                    }
                }}
            />
            <Screen 
                name="Favorites" 
                component={Favorites}
                options={{
                    tabBarLabel: 'Favoritos',
                    tabBarIcon: ({ color, size, focused }) => {
                        return (
                            <Ionicons name="ios-heart" size={size} color={focused ? '#FFA62B' : color} />
                        )
                    }
                }}
            />
        </Navigator>
    )
}

export default StudyTabs;