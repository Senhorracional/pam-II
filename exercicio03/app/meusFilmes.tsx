import React from "react";
import {Text, View, ScrollView, StyleSheet, Image} from "react-native";
import { Link } from "expo-router";
  const styles = StyleSheet.create({
    image: {  
      display: 'flex',
      width: 210,
      height: 320,
      resizeMode: 'stretch',
      flexDirection: 'row'
    },
    container: {
      display: 'flex',
      flexDirection: 'column',
      flexWrap: 'wrap',
      alignContent: 'center',
      gap: 20
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: -320,
    marginLeft: 10,
    color: '#F5F1EB'
  },
  images: {
    
  }
  });

  const DisplayAnImageWithStyle = () => {
    return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.titulo}>Filmes Assistidos:</Text>
      </View>
        <View style={styles.images}>
          <View>
            <Link href={"https://pt.wikipedia.org/wiki/Fight_Club"}>
            <Image 
                style={
                  styles.image
                   }
                source={{
                    uri: 'https://br.web.img3.acsta.net/medias/nmedia/18/90/95/96/20122166.jpg'
                }}
                />
            </Link>    
          </View>
          <View>
          <Link href={"https://pt.wikipedia.org/wiki/Shutter_Island"}>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://assets.cinebelasartes.com.br/wp-content/uploads/2016/03/ILHA-DO-MEDO.jpg'
                }}/>
          </Link>
          </View>
          <View>
          <Link href={"https://pt.wikipedia.org/wiki/Taxi_Driver"}>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://upload.wikimedia.org/wikipedia/pt/3/33/Taxi_Driver_%281976_film_poster%29.jpg'
                }}/>
          </Link>
          </View>
          <View>
          <Link href={"https://pt.wikipedia.org/wiki/O_Pianista"}>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReEWEag1g2Pqsy4ffG1vtMNBN1whgFQTtXWg&s'
                }}/>
          </Link>
          </View>    
          <View>
          <Link href={"https://pt.wikipedia.org/wiki/Blade_Runner"}>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://i0.wp.com/metagalaxia.com.br/wp-content/uploads/2017/10/blade-runner-poster.jpg?resize=1068%2C1520&ssl=1'
                }}/>
          </Link>
          </View>    
          <View>
          <Link href={"https://pt.wikipedia.org/wiki/Gisaengchung"}>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://veja.abril.com.br/wp-content/uploads/2020/02/poster-filme-parasite.jpg?quality=70&strip=info&w=720&crop=1'
                }}/>
          </Link>
          </View>    
          <View>
          <Link href={"https://pt.wikipedia.org/wiki/Dune:_Part_Two"}>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://ingresso-a.akamaihd.net/prd/img/movie/duna-parte-2/3971d5d6-702d-40d8-b990-872d4ffe3e32.webp'
                }}/>
          </Link>
          </View>    
          <View>
          <Link href={"https://pt.wikipedia.org/wiki/Joker_(filme)"}>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://img.elo7.com.br/product/main/2A1A4B7/big-poster-filme-joker-coringa-joaquin-phoenix-tam-90x60-cm-nerd.jpg'
                }}/>
          </Link>
          </View>    
          <View>
          <Link href={"https://pt.wikipedia.org/wiki/Deadpool_%26_Wolverine"}>
                 <Image 
                style={styles.image}
                source={{
                    uri: 'https://osascoplaza.com.br/wp-content/uploads/2024/07/deadpol_wolverine.jpg'
                }}/>
          </Link>
          </View>    
        </View> 
    </ScrollView>    
    );
}
export default DisplayAnImageWithStyle
