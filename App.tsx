import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <View style={styles.container}>
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
    fontWeight: '700',
    fontSize: 32,
    color: '#fff',
  },
});
