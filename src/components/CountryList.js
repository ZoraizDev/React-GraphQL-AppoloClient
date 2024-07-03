import React from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import { useQuery, gql } from '@apollo/client';

const COUNTRIES_QUERY = gql`
  query {
    countries {
      code
      name
      emoji
    }
  }
`;

const CountryList = () => {
  const { loading, error, data } = useQuery(COUNTRIES_QUERY);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      {data.countries.map(country => (
        <Text key={country.code}>
          {country.name} {country.emoji}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});

export default CountryList;
