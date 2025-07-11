import { Link } from 'expo-router';
import { Text, View, useColorScheme } from 'react-native';
import { Colors } from '../constants/colors';

const Contact = () => {
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
        <Text style={[styles.title, { color: theme.title }]}>Contact Us</Text>
        <Text style={[styles.subtitle, { color: theme.text }]}>
          If you have any questions or feedback, feel free to reach out to us!
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
    marginTop: 20,
    fontSize: 16,
    borderWidth: 1,
    textDecorationLine: 'none',
  },
};
