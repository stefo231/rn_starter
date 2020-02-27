import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const ComponentScreen = () => {
    const name = "Stefan";
    const greetings = <Text style={styles.nameStyle}>My name is {name}</Text>;

    return (
        <View>
            <Text style={styles.textStyle}>Getting started with react native</Text>

            {greetings}
        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    nameStyle: {
        fontSize: 20
    }
});

export default ComponentScreen;