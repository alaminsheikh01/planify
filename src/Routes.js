import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import onboarding from './screen/auth/onboarding';
import Login from './screen/auth/signIn';
import SignUp from './screen/auth/signUp';

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default React.memo(Routes);
