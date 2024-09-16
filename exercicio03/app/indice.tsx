import React from "react";
import {Text, View, ScrollView, StyleSheet, Image} from "react-native";
import { Link } from "expo-router";
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#DB4E44',
      alignItems: 'center'
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    color: '#DB4E44'
  },
  buttons:{
    flexDirection: 'column',
    gap: 20
  },
  button: {
    backgroundColor: 'white',
    paddingTop: 10,
    paddingRight: 20,
    paddingBottom: 10,
    paddingLeft: 20,
    borderRadius: 10,
    marginBottom: 10
  }
  });

  const DisplayAnImageWithStyle = () => {
    return (
    <View style={styles.container}>
      <View style={styles.buttons}>
          <Link href={"/MoviesWatched"}>
            <View style={styles.button}>
              <Text style={styles.titulo}>Filmes Assistidos </Text>
            </View>
          </Link>
          <Link href={"/NextMovies"}>
            <View style={styles.button}>
              <Text style={styles.titulo}>  Próximos Filmes</Text>
            </View>
          </Link>
        </View>
    </View>
    );
}
export default DisplayAnImageWithStyle
