import {StyleSheet, View, Text, Image } from "react-native"
import { Neo } from '../types/Neo';
import { Inter_400Regular, Inter_300Light, Inter_100Thin, useFonts } from '@expo-google-fonts/inter';

export  function DisplayNeos(item: Neo) {
    useFonts({
        Inter_400Regular,
        Inter_300Light,
        Inter_100Thin
    })
    return(
        <View style={styles.line}>
            <Text style={[styles.head,  {fontFamily: 'Inter_400Regular'}]}>{item.name}</Text>
            <Image style={{alignSelf:'center'}} source={require('../assets/images/ida_dactyl.png')}/>
            <Text style={styles.head}>Diameter: <Text style={styles.regular}>{item.diameterFeet}</Text></Text>
            <Text style={styles.head}>Velocity: <Text style={styles.regular}>{item.velocityMph} </Text></Text>
            <Text style={styles.head}>Miss Distance: <Text style={styles.regular}>{item.missDistanceMiles}</Text> </Text>
            <Text style={styles.head}>Hazardous: <Text style={styles.regular}> {(item.isPotentiallyHazardous) ?'YES': 'NO'}  </Text> </Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    head: {
      fontFamily: 'Inter_300Light',
      fontSize: 24,
      color: 'white',
      paddingVertical: 1,
      textAlign: 'center'
    },
    line: {
      borderBottomWidth: 1,
      borderColor: 'gray',
      marginHorizontal: 20,
      paddingVertical: 10,
    },
    regular: {
      fontFamily: 'Inter_100Thin'
    },
  });
