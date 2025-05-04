import { StyleSheet, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import DateTimePicker, { DateType, useDefaultStyles } from 'react-native-ui-datepicker';
import { useState } from 'react';
import { useRouter} from 'expo-router';
import { ThemedButtons } from '@/components/ThemedButtons';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_100Thin, Inter_300Light } from '@expo-google-fonts/inter';
import{ useFonts } from 'expo-font';


export default function Calendar() {
  const defaultStyles =   useDefaultStyles();
  const [selected, setSelected] = useState<DateType>(new Date());
  const router = useRouter();
  let [fontsLoaded, error] = useFonts({
      Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_100Thin, Inter_300Light
  })
  // todo: change the color of the selected date
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={{flex: 2}}>
          <DateTimePicker
              mode="single"
              date={selected}
              onChange={({ date }) =>  setSelected(date)}
              containerHeight={600}
              weekdaysHeight={80}

              styles={{
                 ...defaultStyles, 
                  today: { borderColor: 'gray', borderWidth: 1},
                  weekday_label: {fontFamily: 'Inter_500Medium', color: 'white'},
                  days: {fontFamily: 'Inter_500Medium'},
                  button_next_image: {height: 20, width: 20},
                  button_prev_image: {height: 20, width: 20},
                  header: {fontFamily: 'Inter_500Medium', color: 'white'},
                }}    
          />
        </View>     
        <ThemedButtons 
          text='Explore NEOS' 
          style= {{width: 350, height: 50}} onPress={() => router.push(
          {
            pathname: '/neo/[id]',
             params: { id: selected?.toISOString().slice(0, 10) }
          })} >
        </ThemedButtons>    
      </SafeAreaView>
    </SafeAreaProvider>
    );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
  }
});

