import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import styles from './styles';
import Input from '../../../components/Input';
import {Text} from 'react-native';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome Back</Title>
      <Input placeholder={'Email'} keyboardType={'email-address'} />
      <Input placeholder={'Password'} secureTextEntry />
      <Button>Log In</Button>

      <Text
        style={styles.footerText}
        onPress={() => navigation.navigate('SignUp')}>
        Not Registered ?<Text style={styles.footerLink}> Sign Up</Text>
      </Text>
    </SafeAreaView>
  );
};

export default Login;
