import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import api from './src/services/api';  

export default function App() {
  const [cats, catImageUrl] = useState(null);

  async function buscar() {
    try {
      const result = await api.get('https://api.thecatapi.com/v1/images/search?limit=1');
      catImageUrl(result.data[0].url);
      console.log(result.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CatFinderUwU</Text>
      <Button title="Ver gatinhos :3" onPress={buscar} />
      {cats && (
        <Image
          source={{ uri: cats }}
          style={styles.image}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'pink',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
    borderRadius: 10,
  },
});
