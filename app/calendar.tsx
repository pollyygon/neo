import { StyleSheet, View } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import DateTimePicker, { DateType, useDefaultStyles } from 'react-native-ui-datepicker';
import { useState } from 'react';
import { useRouter} from 'expo-router';
import { ThemedButtons } from '@/components/ThemedButtons';
import { Inter_400Regular, Inter_500Medium,  Inter_100Thin, Inter_300Light } from '@expo-google-fonts/inter';
import{ useFonts } from 'expo-font';


export default function Calendar() {
  const defaultStyles =   useDefaultStyles('dark');
  const [selected, setSelected] = useState<DateType>(new Date());
  const router = useRouter();
  useFonts({
      Inter_400Regular, Inter_500Medium, Inter_100Thin, Inter_300Light
  })
  
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
                  today: styles.today,
                  weekday_label: styles.weekdaysLabel,
                  weekdays: styles.weekDayWrapper,
                  button_next_image: styles.buttonStyles,
                  button_prev_image: styles.buttonStyles,
                  month_selector_label: styles.headerStyles,
                  year_selector_label: styles.headerStyles,
                  day_label: styles.dayLabel,
                  
                }}    
          />
        </View>     
        <ThemedButtons 
          text='Explore NEOS' 
          style= {{width: 350, height: 50}} 
          onPress={() => router.push(
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
  },
  buttonStyles: {
    height: 20, 
    width: 20, 
    tintColor: 'white'
  },
  headerStyles:{
    fontFamily: 'Inter_300Light', 
    fontSize: 20, 
    color: 'white'
  },
  dayLabel: {
    fontSize: 15, 
    fontFamily: 'Inter_300Light', 
    color: 'white'
  },
  weekDayWrapper:{
    height: 65, 
    paddingBottom: 10, 
    alignItems: 'flex-end', 
    borderBottomColor: 'gray', 
    borderWidth: 1
  },
  weekdaysLabel: {
    fontFamily: 'Inter_500Medium', 
    color: 'white'
  },
  today:{
    borderColor: 'gray', 
    borderWidth: 1
  }
});

