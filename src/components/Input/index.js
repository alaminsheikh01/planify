import React from 'react';
import {TextInput} from 'react-native';
import styles from './styles';
import colors from '../../constnts/colors';

const Input = ({...props}) => {
  return (
    <TextInput
      placeholderTextColor={colors.midGrey}
      style={styles.input}
      {...props}
    />
  );
};

export default Input;
