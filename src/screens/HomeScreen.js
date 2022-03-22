import * as React from 'react';
import {Button, View, Alert} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        spacersize: 200,
      }}>
      <Button
        title="Navigate to list"
        onPress={() => navigation.navigate('ListScreen')}
      />
      <View style={{width: 20, height: 20}}></View>

      <Button
        title="Search something"
        onPress={() => navigation.navigate('SearchScreen')}
        color="#841584"
      />
      <View style={{width: 20, height: 20}}></View>

      <Button
        title="Tap me for an alert"
        onPress={() => Alert.alert('Simple Button tapped')}
      />
    </View>
  );
};

export default HomeScreen;
