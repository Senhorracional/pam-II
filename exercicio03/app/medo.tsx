import React from "react";
import {Button, Text, View, Linking, StyleSheet, Image} from "react-native";

  const styles = StyleSheet.create({
    image: {  
      width: 398,
      height: 500,
      resizeMode: 'stretch'
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 20,
  }
  });

  const DisplayAnImageWithStyle = () => {
    return (
    <View style={styles.container}>
        <View>
            <Image 
                style={styles.image}
                source={{
                    uri: 'https://i0.wp.com/essenciaexponencial.com.br/wp-content/uploads/2023/11/personagem-medo.jpg?resize=398%2C500&ssl=1'
                }}/>
        </View>
    </View>    
    );
}
export default DisplayAnImageWithStyle
