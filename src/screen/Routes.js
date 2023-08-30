import React, {useState, useEffect} from 'react';
import onboarding from './auth/onboarding';
import Login from './auth/signIn';
import SignUp from './auth/signUp';
import auth from '@react-native-firebase/auth';
import Task from './auth/Task';
import AddTask from './auth/AddTask';
import Home from './auth/Home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const Routes = () => {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) {
      setInitializing(false);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return null;
  }

  // if (user) {
  //   const logout = () => {
  //     auth()
  //       .signOut()
  //       .then(() => console.log('User signed out!'));
  //   };
  //   return (
  //     <>
  //       <Text style={{margin: 40}}>Welcome</Text>
  //       <Text onPress={logout} style={{margin: 40}}>
  //         Log out
  //       </Text>
  //     </>
  //   );
  // }

  const Tabs = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Task" component={Task} />
      </Tab.Navigator>
    );
  };

  if (user) {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Tabs" component={Tabs} />
        <Drawer.Screen name="AddTask" component={AddTask} />
      </Drawer.Navigator>
    );
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Onboarding" component={onboarding} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default React.memo(Routes);
