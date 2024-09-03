import React from "react";
import { View, StyleSheet, Image} from "react-native";

  const styles = StyleSheet.create({
    image: {  
      width: 620,
      height: 456,
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
                    uri: 'https://super.abril.com.br/wp-content/uploads/2018/07/55f9c38b82bee15a980297bealegria.jpeg '
                }}/>
        </View>
    </View>    
    );
}
export default DisplayAnImageWithStyle
