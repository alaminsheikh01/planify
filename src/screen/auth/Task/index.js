import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';
import Header from '../../../components/Header';
import Title from '../../../components/Title';

const Task = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Task" />
      <Title type="thin">To Do Task</Title>
    </SafeAreaView>
  );
};

export default React.memo(Task);
