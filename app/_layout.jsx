import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, useColorScheme } from 'react-native';
import { Colors } from '../constants/colors';

const RootLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;
  return (
    <>
      <StatusBar value="auto" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: theme.navBackground,

            fontWeight: 'bold',
          },
          headerTintColor: theme.title,
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="about" options={{ title: 'About Shelfie' }} />
        <Stack.Screen name="contact" options={{ title: 'Contact Us' }} />
      </Stack>
    </>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
    color: '#eee',
  },
});
