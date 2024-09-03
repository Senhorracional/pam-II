import React from "react";
import {Button, Text, View, ScrollView, StyleSheet, Image} from "react-native";
import { FlipInEasyX, RotateInDownRight } from "react-native-reanimated";

  const styles = StyleSheet.create({
    image: {  
      width: 680,
      height: 478,
      resizeMode: 'stretch',
      flexDirection: 'row'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: -150
  },
  images: {
    marginTop: -100,
    display: 'flex',
    flexDirection: 'row'
    
  }
  });

  const DisplayAnImageWithStyle = () => {
    return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Filmes Assistidos:</Text>
      </View>
        <View style={styles.images}>
          <View>
            <Image 
                style={styles.image}
                source={{
                    uri: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg'
                }}/>
          </View>
          <View>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://assets.cinebelasartes.com.br/wp-content/uploads/2016/03/ILHA-DO-MEDO.jpg'
                }}/>
          </View>
          <View>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/pt/3/33/Taxi_Driver_%281976_film_poster%29.jpg'
                }}/>
          </View>
          <View>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReEWEag1g2Pqsy4ffG1vtMNBN1whgFQTtXWg&s'
                }}/>
          </View>    
        </View> 
    </View>    
    );
}
export default DisplayAnImageWithStyle
