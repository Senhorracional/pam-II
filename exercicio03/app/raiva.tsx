import React from "react";
import {View, StyleSheet, Image} from "react-native";

  const styles = StyleSheet.create({
    image: {  
      width: 560,
      height: 346,
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
                    uri: 'https://static.wixstatic.com/media/8cd306_75ca192824524aea942f99defc8496da~mv2.jpg/v1/fill/w_560,h_346,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/8cd306_75ca192824524aea942f99defc8496da~mv2.jpg'
                }}/>
        </View>
    </View>    
    );
}
export default DisplayAnImageWithStyle
