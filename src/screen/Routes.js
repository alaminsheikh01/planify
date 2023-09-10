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
import {Image, StyleSheet} from 'react-native';
import DrawerComponent from '../components/DrawerComponent';

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

  const Tabs = () => {
    return (
      <Tab.Navigator
        screenOptions={{tabBarShowLabel: false, headerShown: false}}>
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={style.icon}
                  source={
                    focused
                      ? require('../assets/home_active.png')
                      : require('../assets/home_inactive.png')
                  }
                />
              );
            },
          }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({focused}) => {
              return (
                <Image
                  style={style.icon}
                  source={
                    focused
                      ? require('../assets/calendar_active.png')
                      : require('../assets/calendar_inactive.png')
                  }
                />
              );
            },
          }}
          name="Task"
          component={Task}
        />
      </Tab.Navigator>
    );
  };

  if (user) {
    return (
      <Drawer.Navigator
        screenOptions={{headerShown: false}}
        drawerContent={props => <DrawerComponent {...props} />}>
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

const style = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});

export default React.memo(Routes);
