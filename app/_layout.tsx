import { DarkTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';

export default function RootLayout() {

  return (
    <ThemeProvider value={DarkTheme}>
      <Stack screenOptions={{headerTintColor: 'white'}}>
        <Stack.Screen name="index" options={{ title: 'Welcome', headerShown: false}} />
        <Stack.Screen name="calendar" options={{ title: 'Back', headerShown: false}} />
        <Stack.Screen name="neo/[id]" options={{ title: "Results",  }}/>
      </Stack>
    </ThemeProvider>
  );
}
