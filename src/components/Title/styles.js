import colors from '../../constnts/colors';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  title: {
    color: colors.black,
    fontSize: 28,
    fontWeight: 'bold',
    paddingVertical: 24,
  },
  thin: {
    fontWeight: '300',
    paddingHorizontal: 24,
    color: colors.purple,
    fontSize: 24,
  },
});

export default styles;
