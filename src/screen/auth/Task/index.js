import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';

const Task = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Task</Text>
    </SafeAreaView>
  );
};

export default React.memo(Task);
