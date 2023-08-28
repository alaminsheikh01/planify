import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import styles from './styles';
import Input from '../../../components/Input';
import {ScrollView, Text, View, Alert, Linking} from 'react-native';
import Checkbox from '../../../components/CheckBox';
import auth from '@react-native-firebase/auth';
import {
  PRIVACY_POLICY_LINK,
  TERMS_CONDITIONS_LINK,
} from '../../../constnts/links';

const SignUp = ({navigation}) => {
  const [agreed, setAgreed] = useState(false);
  const [values, setValues] = useState({});
  const checkboxClicked = () => {
    setAgreed(value => !value);
  };

  const onLinkPress = url => {
    Linking.openURL(url);
  };

  const onChange = (value, key) => {
    setValues(vals => ({
      ...vals,
      [key]: value,
    }));
  };

  const onSubmit = () => {
    if (!values.first_name || !values.last_name) {
      Alert.alert('Please enter first name and last name');
      return;
    }
    if (values.password !== values.confirm_password) {
      Alert.alert('Passwords do not match');
      return;
    }
    if (!agreed) {
      Alert.alert('You should agree to the terms');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(values.email, values.password)
      .then(() => {
        auth().currentUser.updateProfile({
          displayName: `${values.first_name} ${values.last_name}`,
        });
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Join The Hub</Title>
        <Input
          onChangeText={val => onChange(val, 'first_name')}
          placeholder={'First Name'}
        />
        <Input
          onChangeText={val => onChange(val, 'last_name')}
          placeholder={'Last Name'}
        />
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
        <Input
          onChangeText={val => onChange(val, 'confirm_password')}
          placeholder={'Confirm Password'}
          secureTextEntry
        />

        <View style={styles.row}>
          <Checkbox checked={agreed} onPress={checkboxClicked} />
          <Text style={styles.agreeText}>
            I agree to
            <Text
              style={styles.textLink}
              onPress={() => onLinkPress(TERMS_CONDITIONS_LINK)}>
              Terms and condition
            </Text>{' '}
            and
            <Text
              style={styles.textLink}
              onPress={() => onLinkPress(PRIVACY_POLICY_LINK)}>
              {' '}
              Privecy Policy
            </Text>
          </Text>
        </View>
        <Button onPress={onSubmit}>Create An Account</Button>

        <Text
          style={styles.footerText}
          onPress={() => navigation.navigate('Login')}>
          AlReady Registered ?<Text style={styles.footerLink}> Sign In</Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
