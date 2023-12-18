import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const AdminLoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === '123') {
      navigation.navigate('AdminHome');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <View>
      <Text>Admin Login</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
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

export default AdminLoginScreen;
