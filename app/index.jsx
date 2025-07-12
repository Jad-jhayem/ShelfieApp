import { Link } from 'expo-router';
import { Image, StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Colors } from '../constants/colors';

import Logo from '../assets/logo/Logo.jpg';

import ThemedView from '../components/ThemedView';

const Home = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
      <ThemedView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image source={Logo} style={styles.Image} />

        <Text style={[styles.title, { color: theme.text }]}>The Number 1</Text>
        <Text style={[styles.subtitle, { color: theme.text }]}>
          Reading List App
        </Text>

        <View style={styles.card}>
          <Link
            href="/about"
            style={[
              styles.link,
              { color: theme.linkText, borderBottomColor: theme.linkText },
            ]}
          >
            Learn more
          </Link>
          <Link
            href="/contact"
            style={[
              styles.link,
              { color: theme.linkText, borderBottomColor: theme.linkText },
            ]}
          >
            Contact Us
          </Link>
        </View>
      </ThemedView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginVertical: 10,
  },
  Image: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 20,
    padding: 15,
    borderRadius: 10,
  },
  link: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    textDecorationLine: 'none',
    marginHorizontal: 10,
  },
});
