import React, { Component } from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'


const ImageDetail = (props) => {
   
        return (
            <View style={styles.container}>
                <Image source={props.imageSource} />
                <Text> Image Detail: {props.title}</Text>
                <Text> Image Score - {props.score}</Text>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ImageDetail