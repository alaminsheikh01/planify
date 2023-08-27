import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Button from '../../../components/Button';
import Title from '../../../components/Title';
import styles from './styles';
import Input from '../../../components/Input';
import {Text, View} from 'react-native';
import Checkbox from '../../../components/CheckBox';

const SignUp = ({navigation}) => {
  const [agreed, setAgreed] = useState(false);
  const checkboxClicked = () => {
    setAgreed(value => !value);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Title>Join The Hub</Title>
      <Input placeholder={'First Name'} secureTextEntry />
      <Input placeholder={'Last Name'} secureTextEntry />
      <Input placeholder={'Email'} keyboardType={'email-address'} />
      <Input placeholder={'Password'} secureTextEntry />
      <Input placeholder={'Confirm Password'} secureTextEntry />

      <View style={styles.row}>
        <Checkbox checked={agreed} onPress={checkboxClicked} />
        <Text style={styles.agreeText}>
          I agree to
          <Text style={styles.textLink}>Terms and condition</Text> and
          <Text style={styles.textLink}> Privecy Policy</Text>
        </Text>
      </View>
      <Button>Create An Account</Button>

      <Text
        style={styles.footerText}
        onPress={() => navigation.navigate('Login')}>
        AlReady Registered ?<Text style={styles.footerLink}> Sign In</Text>
      </Text>
    </SafeAreaView>
  );
};

export default SignUp;
