import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps} from "react-native";
import { Inter_500Medium } from "@expo-google-fonts/inter";
import { useFonts } from 'expo-font';

interface ThemedButtonsProps extends TouchableOpacityProps {
    text: string;
}

export function ThemedButtons({ text, style, ...props} : ThemedButtonsProps) {
    useFonts({
         Inter_500Medium
      });

    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.buttons, style]}>
          <Text style={styles.buttonsText}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttons: {
        backgroundColor: '#F2F2F2',
        padding: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'visible',
        
      },
      buttonsText:{
        fontFamily: 'Inter_500Medium',
        fontSize: 15,
        color: 'black',
      }
});