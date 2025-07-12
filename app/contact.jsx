import { Link } from 'expo-router';
import { useColorScheme } from 'react-native';
import Spacer from '../components/Spacer';
import ThemedText from '../components/ThemedText';
import ThemedView from '../components/ThemedView';
import { Colors } from '../constants/colors';

const Contact = () => {
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
        <ThemedText style={[styles.title, { color: theme.title }]}>
          Contact Us
        </ThemedText>
        <Spacer />
        <ThemedText style={[styles.subtitle, { color: theme.text }]}>
          If you have any questions or feedback, feel free to reach out to us!
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
export default Contact;

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
    fontSize: 16,
    borderWidth: 1,
    textDecorationLine: 'none',
  },
};
