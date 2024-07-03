import React from 'react';
import { SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import { ApolloProvider } from '@apollo/client';
import client from './src/services/Environment';
import CountryList from './src/components/CountryList';

const App = () => (
  <ApolloProvider client={client}>
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <CountryList />
      </SafeAreaView>
    </ScrollView>
  </ApolloProvider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default App;
