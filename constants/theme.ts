import { Inter_400Regular } from "@expo-google-fonts/inter"
import { DarkTheme } from "@react-navigation/native";
 export const MyTheme = {
    
   ...DarkTheme,
    colors: {
        ...DarkTheme.colors,
        primary: '#F2F2F2',
        background: 'rgb(1, 1, 1)',
        text: 'white',
        border: 'rgb(39, 39, 41)',
        notification: 'rgb(255, 69, 58)',
      }
};