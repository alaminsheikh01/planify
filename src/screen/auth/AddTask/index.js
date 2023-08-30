import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

const AddTask = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>AddTask</Text>
    </SafeAreaView>
  );
};

export default React.memo(AddTask);
