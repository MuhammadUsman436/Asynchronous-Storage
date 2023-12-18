import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StudentLoginScreen = ({ navigation }) => {
  const [registrationNumber, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Validate student credentials
    const studentDataString = await AsyncStorage.getItem('@studentData');
    const studentData = JSON.parse(studentDataString);

    if (studentData && studentData.registrationNumber === registrationNumber && studentData.password === password) {
      // Save student login status
      await AsyncStorage.setItem('@isStudentLoggedIn', 'true');
      navigation.navigate('StudentHome', {
        studentName: studentData.studentName,
        registrationNumber: studentData.registrationNumber,
      });
    } else {
     alert('Invalid credentials');
    }
  };

  return (
    <View>
      <Text>Student Login</Text>
      <TextInput
        placeholder="Registration Number"
        value={registrationNumber}
        onChangeText={setRegistrationNumber}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default StudentLoginScreen;
