import * as React from 'react';
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import ContactInfo from './contactInfo';

export const PersonalInfo = (props) => {
        const [fname, setfName] = useState("");
        const [mname, setmName] = useState("");
        const [lname, setlName] = useState("");
        const { register, setValue, handleSubmit, control, formState: { errors } } = useForm({
            defaultValues: {
                firstName: '',
                lastName: '',
                middleName: '',
                birthDate: '',
                gender: '',
                contactTelephone: '',
                contactCellphone: '',
                contactEmail: '',
                civilStatus: '',
                unitAddress: '',
                street: '',
                barangay: '',
                municipality: '',
                city: '',
                province: '',
                zipcode: '',
                region: ''
            }
        });
        return (
            <View style={styles.container}>
                <Text style={styles.label}>First name</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={(text)=>setfName(text)}
                        />
                    )}
                    name="firstName"
                    rules={{ required: true }} />
                <Text style={styles.label}>Middle name</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={(text)=>setmName(text)}
                            />
                    )}
                    name="middleName"
                    rules={{ required: true }} />
                <Text style={styles.label}>Last name</Text>
                <Controller
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                        <TextInput
                            style={styles.input}
                            onBlur={onBlur}
                            onChangeText={(text)=>setlName(text)}
                            />
                    )}
                    name="lastName"
                    rules={{ required: true }} />

                <View style={styles.button}>
                    <Button
                        style={styles.button}
                        title="Go to Contact Information"
                        onPress={() => props.navigation.navigate("Address", 
                            {
                                fname,
                                mname,
                                lname
                            }
                        )} />
                </View>
            </View>
        )
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