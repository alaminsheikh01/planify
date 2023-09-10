import React from 'react';
import {Image, Pressable, SafeAreaView, Text} from 'react-native';
import styles from './styles';
import Title from '../../../components/Title';
import Input from '../../../components/Input';

const AddTask = ({navigation}) => {
  const handleBack = () => [navigation.goBack()];
  return (
    <SafeAreaView style={styles.container}>
      <Pressable style={styles.backContainer} hitSlop={8} onPress={handleBack}>
        <Image
          style={styles.backIcon}
          source={require('../../../assets/back.png')}
        />
      </Pressable>
      <Title type="thin">Add New Task</Title>
      <Text style={styles.describe}>Describe The Task</Text>
      <Input outlined placeholder="Type here..." />
    </SafeAreaView>
  );
};

export default React.memo(AddTask);
