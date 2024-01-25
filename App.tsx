/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';
import {fontFamilies} from './src/constants/fontFamilies';

const App = () => {
  return (
    <View style={styles.container}>
      <Text
        style={{
          color: '#fafafa',
          fontSize: 18,
          fontFamily: fontFamilies.bold,
        }}
      />
      <Text style={styles.title}>Todo list</Text>
      <Button title="Click me" onPress={() => {}} />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontFamily: 'Poppins-bold',
    fontSize: 32,
    color: '#fff',
  },
});
