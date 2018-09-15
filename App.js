import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Header from "./components/Header";
import Footer from "./components/Footer"

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <Text>Basic ReactNative ToDo App!</Text>
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      android: {
        paddingTop: 30
      }
    })
  },
  content: {
    flex: 1
  }
});
