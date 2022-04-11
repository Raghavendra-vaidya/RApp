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
        color="#787A7B"
      />
      <View style={{width: 20, height: 20}}></View>

      <View
        style={{
          borderColor: '#A2DAF7',
          borderWidth: 1,
        }}>
        <Button
          title="Search something"
          onPress={() => navigation.navigate('SearchScreen')}
          accessibilityLabel="searchScreenID"
          color="#787A7B"
        />
      </View>

      <View style={{width: 20, height: 20}}></View>

      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
        accessibilityLabel="loginButtonID"
        color="#787A7B"
      />
    </View>
  );
};

export default HomeScreen;
