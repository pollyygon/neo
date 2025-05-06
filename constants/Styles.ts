import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_100Thin, Inter_300Light } from '@expo-google-fonts/inter';
import { useFonts } from 'expo-font';
import { StyleSheet } from 'react-native';


export const buttonColor = '#F2F2F2';
export const background = 'rgb(1, 1, 1)';
export const regularText = 'Inter_400Regular';
export const lightText = Inter_300Light;
export const mediumText = Inter_500Medium;

export const globalStyles = StyleSheet.create({
    container:{
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});

