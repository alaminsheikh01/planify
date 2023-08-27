import React from 'react';
import {Pressable, View} from 'react-native';
import styles from './styles';

const Checkbox = ({checked, onPress}) => {
  return (
    <Pressable
      style={[styles.container, checked ? styles.checkBox : {}]}
      onPress={onPress}>
      {checked ? <View style={styles.innerSqure} /> : null}
    </Pressable>
  );
};

export default Checkbox;
