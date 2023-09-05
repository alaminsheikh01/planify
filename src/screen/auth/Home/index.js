import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import styles from './styles';
import Header from '../../../components/Header';

const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Home" />
    </SafeAreaView>
  );
};

export default React.memo(Home);
