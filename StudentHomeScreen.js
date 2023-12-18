import React from 'react';
import { View, Text, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StudentHomeScreen = ({ route, navigation }) => {
  const { studentName, registrationNumber } = route.params;

  const handleregistration = async () => {
    // Clear student login status on logout
    await AsyncStorage.getItem('@isStudentLoggedIn');
    navigation.navigate('CourseRegistration');
  };

  return (
    <View>
      <Text>Welcome, {studentName}!</Text>
      <Text>Registration Number: {registrationNumber}</Text>
      <Button title="course registration" onPress={handleregistration} />
    </View>
  );
};

export default StudentHomeScreen;
