import {StyleSheet} from 'react-native';
import colors from '../../../constnts/colors';

const styles = StyleSheet.create({
  imageContainer: {
    height: '80%', // Adjust this as needed
  },
  image: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.white,
  },
  title: {
    color: colors.black,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 22,
  },
  subtitle: {
    fontSize: 15,
    color: colors.grey,
    textAlign: 'center',
    marginVertical: 16,
  },

  footer: {
    height: 50,
    width: '100%',
    backgroundColor: colors.white,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
