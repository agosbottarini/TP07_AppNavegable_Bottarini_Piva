import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FormLogin from '../components/FormLogin';

const Login = () => {
  return (
    <View style={styles.container}>
        <FormLogin></FormLogin>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default Login;
