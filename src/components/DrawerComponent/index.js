import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {Linking, StyleSheet, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import colors from '../../constnts/colors';
import {PRIVACY_POLICY_LINK, TERMS_CONDITIONS_LINK} from '../../constnts/links';

function DrawerContent(props) {
  const {navigation} = props;
  const logOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out'));
  };

  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <Text style={styles.link} onPress={() => navigation.navigate('Home')}>
        Home
      </Text>
      <Text style={styles.link} onPress={() => navigation.navigate('Task')}>
        Task
      </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL(PRIVACY_POLICY_LINK)}>
        Privacy Policy
      </Text>
      <Text
        style={styles.link}
        onPress={() => Linking.openURL(TERMS_CONDITIONS_LINK)}>
        Terms and Conditions
      </Text>
      <Text style={styles.link} onPress={logOut}>
        Log Out
      </Text>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  link: {
    color: colors.black,
    fontWeight: '500',
    fontSize: 13,
    margin: 8,
    marginHorizontal: 16,
  },
});

export default React.memo(DrawerContent);
