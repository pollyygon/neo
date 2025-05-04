import { Image } from 'expo-image';
import { Link, useRouter } from 'expo-router';
import { Platform, StyleSheet, Text, View, Button, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import { useEffect, useState } from 'react';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import { ThemedButtons } from '@/components/ThemedButtons';

import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const {height, width} = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();

  let [fontsLoaded, error] = useFonts({
    Inter_400Regular, Inter_500Medium, Inter_600SemiBold
  })


  return (
    <View style={styles.container}> 
      <ImageBackground
        source={require('../assets/images/neo-canva.png')}
        resizeMode='contain'
        style={{ flex: 1, justifyContent: "center", alignContent: 'center', width: width, height: height}}/>
        <SafeAreaProvider>
          <SafeAreaView style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end'}}>
         
          <ThemedButtons text= 'Get Started' style= {{width: 350, height: 50}} onPress={() => router.navigate('/calendar')}> </ThemedButtons>
          </SafeAreaView>
        </SafeAreaProvider>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },
  head:{
    fontWeight:'bold',
    fontSize: 24,
    color: 'white'
  }
 
});
