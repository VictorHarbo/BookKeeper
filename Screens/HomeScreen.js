import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';


function HomeScreen() {
    const [seachText, setText] = React.useState("");

    const handleSearchTextChange = (searchText) => {
      setText(searchText);
    };

    return (
      <View style={ styles.container}>
        <SearchField onChangeText={handleSearchTextChange} />
        <Text>Home!</Text>
        <Text>Currently reading: {seachText}</Text>
      </View>
    );
  }


  
const SearchField = ({ onChangeText }) => {
  return (
    <TextInput
      placeholder='Search for book'
      onChangeText={onChangeText}
      style={styles.searchButton}
    />
  );
};  

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center',
  },
  searchButton: {
    width: "100%",
  }
});

export default HomeScreen;

