import React from 'react';
import {Image, Pressable, Text, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Header = ({title}) => {
  const navigation = useNavigation();
  const openDrawer = () => {
    navigation.openDrawer();
  };
  return (
    <Pressable onPress={openDrawer} style={styles.container}>
      <Image style={styles.image} source={require('../../assets/menu.png')} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.icon} />
    </Pressable>
  );
};

export default Header;
