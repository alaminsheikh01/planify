import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import styles from './styles';
import Input from '../../../components/Input';
import {Text} from 'react-native';

const Login = ({navigation}) => {
  const [values, setValues] = useState({});
  const onChangeText = (value, key) => {
    console.log('value', value);
    setValues(vals => ({
      ...vals,
      [key]: value,
    }));
  };

  const onSubmit = () => {
    console.log('valuessss', values?.email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome Back</Title>
      <Input
        onChage={val => onChangeText(val, 'email')}
        placeholder={'Email'}
        keyboardType={'email-address'}
      />
      <Input
        onChage={val => onChangeText(val, 'password')}
        placeholder={'Password'}
        secureTextEntry
      />
      <Button onPress={onSubmit}>Log In</Button>

      <Text
        style={styles.footerText}
        onPress={() => navigation.navigate('SignUp')}>
        Not Registered ?<Text style={styles.footerLink}> Sign Up</Text>
      </Text>
    </SafeAreaView>
  );
};

export default Login;
