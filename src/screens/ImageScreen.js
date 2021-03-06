import React, { Component } from 'react'
import { Text, View, StyleSheet, ScrollView } from 'react-native'
import ImageDetail from '../components/ImageDetail'
//ScrollView is bad practice
const ImageScreen = () => {
    return (
        <View>
            <ScrollView> 
            <ImageDetail title="Forest"
                imageSource={require('../../assets/forest.jpg')}
                score={9} />
            <ImageDetail title="Beach"
                imageSource={require('../../assets/beach.jpg')}
                score={7} />
            <ImageDetail title="Mountain"
                imageSource={require('../../assets/mountain.jpg')}
                score={10} />
                </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

});

export default ImageScreen