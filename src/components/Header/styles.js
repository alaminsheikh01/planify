import React from 'react';
import {StyleSheet} from 'react-native';
import colors from '../../constnts/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 16,
    color: colors.purple,
    fontWeight: 'bold',
  },
  image: {
    width: 24,
    height: 24,
  },
});

export default React.memo(styles);
