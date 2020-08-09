import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

import AppStack from './src/routes/AppStack';

import { Montserrat_400Regular, Montserrat_600SemiBold, useFonts } from '@expo-google-fonts/montserrat';
import { Play_400Regular, Play_700Bold } from '@expo-google-fonts/play';

export default function App() {
  let [fontsLoaded] = useFonts({
    Play_400Regular,
    Play_700Bold,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />
  }else{
    return (
      <>
        <AppStack />
        <StatusBar style="light" />  
      </>
    );
  }
}