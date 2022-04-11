import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Login</Text>
      <View style={styles.inputView}>
        <TextInput
          style={styles.inputText}
          placeholder="Email..."
          placeholderTextColor="#EBF5FB"
          onChangeText={text => setEmail(text)}
          accessibilityLabel="emailFieldID"
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Password..."
          placeholderTextColor="#EBF5FB"
          onChangeText={text => setPassword(text)}
          accessibilityLabel="passwordID"
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot} accessibilityLabel="forgotPasswordID">
          Forgot Password?
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText} accessibilityLabel="loginButtonID">
          LOGIN
        </Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.loginText} accessibilityLabel="signUpID">
          Signup
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CCD1D1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 50,
    color: '#3CB371',
    marginBottom: 40,
  },
  inputView: {
    width: '80%',
    backgroundColor: '#85929E',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
  },
  forgot: {
    color: '#EBF5FB',
    fontSize: 11,
  },
  loginBtn: {
    width: '80%',
    backgroundColor: '#3CB371',
    borderRadius: 10,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  loginText: {
    color: 'white',
  },
});
export default Login;
