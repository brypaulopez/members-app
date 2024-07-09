import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import Constants from 'expo-constants';
import PersonalInfo from './personalInfo';

export const AddressInfo=(props)=>{
    const {fname, mname, lname} = props.route.params;
    const { register, setValue, handleSubmit, control, formState: { errors } } = useForm({
        defaultValues: {
          firstName: {fname},
          lastName: {lname},
          middleName: {mname},
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
      const handleClick = () => {
        handleSubmit(onSubmit);
      }
      const onSubmit = data => {
        console.log(data);
      };
    return (
        <View style={styles.container}>
        <Text style={styles.label}>Municipality</Text>
        <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
            <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
            />
            )}
            name="municipality"
            rules={{ required: true }}
        />
        <Text style={styles.label}>City</Text>
        <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
            <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={firstName}
            />
            )}
            name="city"
            rules={{ required: true }}
        />
        <Text style={styles.label}>Region</Text>
        <Controller
            control={control}
            render={({field: { onChange, onBlur, value }}) => (
            <TextInput
                style={styles.input}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
            />
            )}
            name="region"
            rules={{ required: true }}
        />

        <View style={styles.button}>
            <Button
            style={styles.button}
            title="Go to Personal Information"
            onPress={handleSubmit(onSubmit)}
            />
        </View>
        </View>
        );
    };

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