import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import styles from './styles';
import Input from '../../../components/Input';
import {Alert, Text} from 'react-native';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [values, setValues] = useState({});

  const onChange = (value, key) => {
    setValues(vals => ({
      ...vals,
      [key]: value,
    }));
  };

  const onSubmit = () => {
    if (!values.email || !values.password) {
      Alert.alert('Please enter email and password');
      return;
    }
    auth()
      .signInWithEmailAndPassword(values.email, values.password)
      .then(() => {
        console.log('User signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        } else {
          Alert.alert(error.message);
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Welcome Back</Title>
      <Input
        onChangeText={val => onChange(val, 'email')}
        placeholder={'Email'}
        keyboardType={'email-address'}
      />
      <Input
        onChangeText={val => onChange(val, 'password')}
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
