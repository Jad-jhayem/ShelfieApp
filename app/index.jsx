import { Link } from 'expo-router';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Colors } from '../constants/colors';

import Spacer from '../components/Spacer';
import ThemedLogo from '../components/ThemedLogo';
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
        <ThemedLogo style={styles.Image} />

        <Spacer />

        <Text style={[styles.title, { color: theme.text }]}>The Number 1</Text>

        <Spacer />

        <Text style={[styles.subtitle, { color: theme.text }]}>
          Reading List App
        </Text>

        <View style={styles.linkContainer}>
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
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
  },
  Image: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
  link: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    textDecorationLine: 'none',
    marginHorizontal: 10,
    borderRadius: 5,
    borderBottomWidth: 2,
  },
  linkContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    borderRadius: 10,
    marginTop: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
