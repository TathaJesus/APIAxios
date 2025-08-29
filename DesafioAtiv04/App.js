import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import api from './src/services/api';

const DogsFinder = () => {
  const [imageUrl, setImageUrl] = useState(null);

  const fetchDogImage = async () => {
    try {
      const response = await api.get('https://dog.ceo/api/breeds/image/random');
      setImageUrl(response.data.message);
    } catch (error) {
      console.error('Erro ao buscar imagem:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>DogsFinder</Text>
      <Button title="Ver Cachorro Aleatório" onPress={fetchDogImage} />
      {imageUrl && (
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'grey',
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

export default DogsFinder;
