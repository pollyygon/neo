import { FlatList, ActivityIndicator} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useState, useEffect} from 'react';
import { useLocalSearchParams } from 'expo-router';
import { DisplayNeos } from '@/components/DisplayNeos';
import { Neo } from '@/types/Neo';
import { globalStyles } from '@/constants/Styles';



/*  todo: 
 maybe add a loading screen or prefetch
 */


export default function Results(){
  const demokey = 'lTHPxbpwqnn3thI5aiCieLtOpT1MZ85pxbkRI9tN';
  const [neosObj, setNeosObj] = useState<Neo[]>([]);
  const [notReady, setNotReady] = useState(true);
  const { id } = useLocalSearchParams<{id: string}>();
  const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${id}&end_date=${id}&detailed=true&api_key=${demokey}`;

  
     
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
         setNotReady(false);
         
       }catch (error) {
         console.error('Error fetching NEOs:', error);
       }
     }

     useEffect(() => {
       getNeos();
     }, []);
      
     if(notReady){
      return (
        <SafeAreaProvider>
          <SafeAreaView style={globalStyles.container}>
          <ActivityIndicator animating= {notReady} size="large" />
          </SafeAreaView>
        </SafeAreaProvider>

      )
     }
    
      return (
        <SafeAreaProvider>
          <SafeAreaView style={{ flex:1 }}>
                <FlatList
                  data = {neosObj}
                  renderItem= {
                    ({item}) => {
                      return (
                        <DisplayNeos {...item} />
                      )}
                  }
                />    
          </SafeAreaView>
         </SafeAreaProvider>
      );
    }

    