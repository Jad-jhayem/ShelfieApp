import { Link } from 'expo-router';
import { Text, View, useColorScheme } from 'react-native';
import { Colors } from '../constants/colors';

const About = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: theme.background,
        }}
      >
        <Text style={[styles.title, { color: theme.title }]}>
          About Shelfie
        </Text>
        <Text style={[styles.subtitle, { color: theme.text }]}>
          Shelfie is the number one reading list app,{'\n'}designed to help you
          keep track of your reading journey.
        </Text>
        <Link
          href="/"
          style={[
            styles.link,
            { color: theme.linkText, borderBottomColor: theme.linkText },
          ]}
        >
          Go back to Home
        </Link>
      </View>
    </>
  );
};
export default About;

const styles = {
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
  link: {
    padding: 10,
    marginTop: 20,
    fontSize: 16,
    borderWidth: 1,
    textDecorationLine: 'none',
  },
};
