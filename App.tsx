import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native';

function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to CPAN 213</Text>
        <Text style={styles.subtitle}>Cross-Platform Mobile Development</Text>
      </View>
      <View style={styles.content}>
        <Text style={styles.greeting}>Hello, I'm Jyot Harshakumar Bhavsar!</Text>
        <Text style={styles.info}>Student ID: N01738884</Text>
        <Text style={styles.info}>Program: Computer Programming</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f0f0f0'},
  header: {backgroundColor: '#3498db', padding: 20, alignItems: 'center'},
  title: {fontSize: 24, fontWeight: 'bold', color: 'white'},
  subtitle: {fontSize: 16, color: 'white', fontStyle: 'italic'},
  content: {flex: 1, padding: 20},
  greeting: {fontSize: 22, fontWeight: 'bold', textAlign: 'center'},
  info: {fontSize: 16, textAlign: 'center', marginBottom: 5},
});

export default App;
