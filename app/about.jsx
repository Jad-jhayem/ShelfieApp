import { Link } from 'expo-router';
import { useColorScheme } from 'react-native';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';
import { Colors } from '../constants/colors';

const About = () => {
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
        <ThemedText style={[styles.title]}>About Shelfie</ThemedText>

        <Spacer />

        <ThemedText style={[styles.text]}>
          Shelfie is the number one reading list app,{'\n'}designed to help you
          keep track of your reading journey.
        </ThemedText>

        <Spacer />

        <Link
          href="/"
          style={[
            styles.link,
            { color: theme.linkText, borderBottomColor: theme.linkText },
          ]}
        >
          Go back to Home
        </Link>
      </ThemedView>
    </>
  );
};
export default About;

const styles = {
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
  },
  link: {
    padding: 10,
    fontSize: 16,
    borderWidth: 1,
    textDecorationLine: 'none',
  },
};
