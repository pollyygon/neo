import {  StyleSheet, Text, View, FlatList, Image } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect } from 'react';
import { useLocalSearchParams } from 'expo-router';
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_100Thin, Inter_300Light } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';

type Neo = {
    name: string;
    diameterFeet: number;
    velocityMph: number;
    missDistanceMiles: number;
    isPotentiallyHazardous: boolean;
  }
/*  todo: 
 make the boolean value readable
 maybe add a loading screen or prefetch
 */
export default function Neo(){
  const demokey = 'lTHPxbpwqnn3thI5aiCieLtOpT1MZ85pxbkRI9tN';
  const [neosObj, setNeosObj] = useState<Neo[]>([]);
  const { id } = useLocalSearchParams<{id: string}>();
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${id}&end_date=${id}&detailed=true&api_key=${demokey}`;

  let [fontsLoaded, error] = useFonts({
    Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_100Thin, Inter_300Light
  })
     
   const getNeos = async () => {
       try {
         const response = await fetch(url);
         const json = await response.json();
         
         let neosObj2: Neo[] = [];
          // iterating through objects to get the necessary data, using math.round instead of toFixed for better performance and keep as numbers
         json.near_earth_objects[id].forEach((element : any) => {
            let neo : Neo= {
             name: element.name,
             diameterFeet: Math.round(element.estimated_diameter.feet.estimated_diameter_max * 100) / 100,
             velocityMph: Math.round(element.close_approach_data[0].relative_velocity.miles_per_hour * 100) / 100,
             missDistanceMiles: Math.round( element.close_approach_data[0].miss_distance.miles * 100) / 100,
             isPotentiallyHazardous: element.is_potentially_hazardous_asteroid
            }
            neosObj2.push(neo);
          });
             
         setNeosObj(neosObj2);
         
       }catch (error) {
         console.error('Error fetching NEOs:', error);
       }
     }

     useEffect(() => {
       getNeos();
     }, []);
      
      return (
        <SafeAreaProvider>
          <SafeAreaView>
            <View>
                <FlatList
                  data = {neosObj}
                  renderItem= {
                    ({item}) => {
                      console.log(id + ' item: ' + item.name + item.isPotentiallyHazardous);
                      return (
                      <View style={styles.line}>
                        <Text style={styles.name}>{item.name}</Text>
                        <Image source={require('../../assets/images/ida_dactyl.png')}/>
                        <Text style={styles.head}>Diameter: <Text style={styles.regular}>{item.diameterFeet}</Text></Text>
                        <Text style={styles.head}>Velocity: <Text style={styles.regular}>{item.velocityMph} </Text></Text>
                        <Text style={styles.head}>Miss Distance: <Text style={styles.regular}>{item.missDistanceMiles}</Text> </Text>
                        <Text style={styles.head}>Hazardous: {item.isPotentiallyHazardous} </Text> 
                      </View>
                      )}
                  }
                />
            </View>
          </SafeAreaView>
        </SafeAreaProvider>
      );
    }

    const styles = StyleSheet.create({
      head: {
        fontFamily: 'Inter_300Light',
        fontSize: 24,
        color: 'white',
        paddingVertical: 1,
      },
      line: {
        borderBottomWidth: 1,
        borderColor: 'gray',
        marginHorizontal: 20,
        paddingVertical: 10,
      },
      regular: {
        fontFamily: 'Inter_100Thin',
        fontSize: 24,
        color: 'white',
      },
      name:{
        textAlign: 'center', 
        fontFamily: 'Inter_400Regular', 
        fontSize: 24, color: 'white',
        paddingVertical: 1
      }
    });