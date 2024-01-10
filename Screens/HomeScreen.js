import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Button } from 'react-native-paper';


function HomeScreen() {
    const [seachText, setText] = React.useState("");
    const [data, setData] = React.useState(null);

    const handleSearchTextChange = (searchText) => {
      setText(searchText);
    };

    const fetchData = async () => {
      try {
        // Make a GET request to a sample JSONPlaceholder API endpoint
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/2');
  
        // Parse the response as JSON
        const result = await response.json();
  
        // Update the state with the fetched data
        setData(result);
        console.log(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    return (
      <View style={ styles.container}>
        <SearchField onChangeText={handleSearchTextChange} />
        <Text>Home!</Text>
        <Text>Currently reading: {seachText}</Text>
        <TestButton fetchData={fetchData} />
        {data && (
          <View>
            <Text>Data from API:</Text>
            <Text>Title: {data.title}</Text>
            <Text>Completed: {data.completed ? 'Yes' : 'No'}</Text>
          </View>
        )}
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

const TestButton = ({fetchData}) => (
  <Button mode="contained" 
          onPress={fetchData}>
    Test API Call
  </Button>
);

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

