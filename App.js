import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactInfo from './components/contactInfo';
import { PersonalInfo } from './components/personalInfo';
import { AddressInfo } from './components/addresInfo';

const Stack = createNativeStackNavigator();

export default function App() {
  const PersonalInfos = PersonalInfo();
  const AddressInfos = AddressInfo();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Personal' component={PersonalInfos} />
        <Stack.Screen name='Contact' component={ContactInfo} />
        <Stack.Screen name='Address' component={AddressInfos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: '#a9c0c1',
    height: 40,
    backgroundColor: '#3e824e',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    padding: 8,
    backgroundColor: '#cec9c7',
  },
  input: {
    backgroundColor: 'white',
    borderColor: '#afaa9e',
    borderWidth: 3,
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});
