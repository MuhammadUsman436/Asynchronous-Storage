import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState('');

  const handleSearch = async () => {
    // Search for the student data based on name or registration number
    const studentDataString = await AsyncStorage.getItem('@studentData');
    const studentData = JSON.parse(studentDataString);

    if (studentData && (studentData.studentName === searchText || studentData.registrationNumber === searchText)) {
      setSearchResult(`Name: ${studentData.studentName}, Registration Number: ${studentData.registrationNumber}`);
    } else {
      setSearchResult('Student not found');
    }
  };

  return (
    <View>
      <Text>Search Student</Text>
      <TextInput
        placeholder="Search by Name or Registration Number"
        value={searchText}
        onChangeText={setSearchText}
      />
      <Button title="Search" onPress={handleSearch} />
      <Text>{searchResult}</Text>
    </View>
  );
};

export default SearchScreen;
