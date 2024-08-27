import React from "react";
import {
    Image,
    View,
    StyleSheet,
    Linking,
    Button
} from "react-native";

const styles = StyleSheet.create({
    image: {
        width: 1000,
        height: 600,
        resizeMode: 'stretch'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 20,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 40,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#'
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: '#f1f1f1'
    }
});

const DisplayAnImageWithStyle = () => {
    return (
    <View style={styles.container}>
        <View>
            <Image 
                style={styles.image}
                source={{
                    uri: 'https://i.pinimg.com/originals/e5/c1/af/e5c1af135c5411309c237647528bc37e.gif'
                }}/>
        </View>
        <View style={styles.button}> 
            <Button
                title="Terra Média"
                color="#BF9D73"
                onPress={() => Linking.openURL('https://youtu.be/mJZZNHekEQw?si=QNQsUdg_4XjYYs3n')}></Button >
        </View>
    </View>    
    );
}
export default DisplayAnImageWithStyle