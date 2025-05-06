
import {  useRouter } from 'expo-router';
import {  StyleSheet, View, ImageBackground, Dimensions} from 'react-native';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import { ThemedButtons } from '@/components/ThemedButtons';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '@/constants/Styles';

const {height, width} = Dimensions.get('window');
SplashScreen.hideAsync();


export default function HomeScreen() {
  
  const router = useRouter();

  return (
    <View style={styles.container}> 
      <ImageBackground
        source={require('../assets/images/neo-canva.png')}
        resizeMode='contain'
        style={[globalStyles.container, {width: width, height: height}]}/>
        <SafeAreaProvider>
          <SafeAreaView style={{flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-end'}}>
         {/* sometimes this component doesn't render correctly, why??? */}
          <ThemedButtons text= 'Find Them' style= {{width: 350, height: 50}} onPress={() => router.navigate('/calendar')}> </ThemedButtons>
          </SafeAreaView>
        </SafeAreaProvider>
      
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  }
});
