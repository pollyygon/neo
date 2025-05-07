
import {  useRouter } from 'expo-router';
import {  StyleSheet, View, ImageBackground, Dimensions} from 'react-native';
import { ThemedButtons } from '@/components/ThemedButtons';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '@/constants/Styles';


SplashScreen.hideAsync();


export default function HomeScreen() {
  
  const router = useRouter();
  const {height, width} = Dimensions.get('window');

  return (
    <View style={styles.container}> 
      <ImageBackground
        source={require('../assets/images/neo-canva.png')}
        resizeMode='contain'
        style={[globalStyles.container, {width: width, height: height}]}/>
        <SafeAreaProvider>
          <SafeAreaView style={[styles.containerStyle, styles.container]}>
            <ThemedButtons 
              text= 'Find Them' 
              style= {{width: 350, height: 50}} 
              onPress={() => router.navigate('/calendar')}> 
            </ThemedButtons>
          </SafeAreaView>
        </SafeAreaProvider>
    </View> 
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  containerStyle: {
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'flex-end'
  }
});
