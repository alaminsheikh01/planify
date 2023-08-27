import colors from '../../constnts/colors';

const {StyleSheet} = require('react-native');

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: colors.purple,
    borderRadius: 3,
    height: 18,
    width: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerSqure: {
    width: 10,
    height: 10,
    backgroundColor: colors.purple,
  },
  checkBox: {
    borderWidth: 2,
  },
});

export default styles;
