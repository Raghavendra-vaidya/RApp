import * as React from 'react';
import {Button, View, Alert} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View
      accessibilityLabel="viewID"
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        spacersize: 200,
      }}>
      <Button
        title="Navigate to list"
        onPress={() => navigation.navigate('ListScreen')}
        accessibilityLabel="listScreenID"
      />
      <View style={{width: 20, height: 20}}></View>

      <Button
        title="Search something"
        onPress={() => navigation.navigate('SearchScreen')}
        color="#841584"
        accessibilityLabel="searchScreenID"
      />
      <View style={{width: 20, height: 20}}></View>

      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
        accessibilityLabel="loginButtonID"
      />
    </View>
  );
};

export default HomeScreen;
