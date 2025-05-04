import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import { MyTheme } from '@/constants/theme';


export default function RootLayout() {
  

  return (
    <ThemeProvider value={MyTheme}>
      {/* 
          todo:
          fix headers not showing up on the web
          style the header
      
      */}
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Welcome', headerShown: false}} />
        <Stack.Screen name="calendar" options={{ title: 'Calendar', headerShown: false}} />
        <Stack.Screen name="explore" options={{ title: 'Explore' }} />
        <Stack.Screen name="neo/[id]" options={{ title: 'Near Earth Objects'}} />
      </Stack>
    </ThemeProvider>
  );
}
