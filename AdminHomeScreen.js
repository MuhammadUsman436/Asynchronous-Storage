import React from 'react';
import { View, Text, Button } from 'react-native';

const AdminHomeScreen = ({ navigation }) => {
  const handleregistration = () => {
    navigation.navigate('StudentRegistration');
  };

  return (
    <View>
      <Text>Welcome Admin!</Text>
      <Button title="register student" onPress={handleregistration} />
    </View>
  );
};

export default AdminHomeScreen;
