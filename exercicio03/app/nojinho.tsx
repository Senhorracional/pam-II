import React from "react";
import {Button, Text, View, Linking, StyleSheet, Image} from "react-native";

  const styles = StyleSheet.create({
    image: {  
      width: 770,
      height: 430,
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
                    uri: 'https://miro.medium.com/v2/resize:fit:1400/0*1HcvZ6m5jfshlYle'
                }}/>
        </View>
    </View>    
    );
}
export default DisplayAnImageWithStyle
