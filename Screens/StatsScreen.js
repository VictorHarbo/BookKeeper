import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function StatsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Stats!</Text>
        <Text>Pages read in 2024:</Text>
      </View>
    );
  }

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#F3D9B1',
    padding: 15,
    alignItems: 'center',
  },
  headerText: {
    color: '#A22522',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default StatsScreen;