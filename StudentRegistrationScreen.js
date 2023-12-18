import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StudentRegistrationScreen = ({ navigation }) => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [studentName, setStudentName] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = async () => {
    // Save student registration data to AsyncStorage
    const studentData = {
      registrationNumber,
      studentName,
      password,
    };
    await AsyncStorage.setItem('@studentData', JSON.stringify(studentData));
    alert('Student registered successfully');
  };
  const handlestudentlogin = () => {
    navigation.navigate('StudentLogin');
  };
  return (
    <View>
      <Text>Student Registration</Text>
      <TextInput
        placeholder="Registration Number"
        value={registrationNumber}
        onChangeText={setRegistrationNumber}
      />
      <TextInput
        placeholder="Student Name"
        value={studentName}
        onChangeText={setStudentName}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Register" onPress={handleRegistration} />
      <Button title="student login" onPress={handlestudentlogin} />


    </View>
  );
};

export default StudentRegistrationScreen;
