import React, { Component } from 'react'
import { Text, View, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: 'Friend#1', age: 21 },
        { name: 'Friend#2', age: 20 },
        { name: 'Friend#3', age: 19 },
        { name: 'Friend#4', age: 15 },
        { name: 'Friend#5', age: 23 },
        { name: 'Friend#6', age: 51 },
        { name: 'Friend#7', age: 32 },
        { name: 'Friend#8', age: 51 },
        { name: 'Friend#9', age: 24 },
    ]
    return (
        <FlatList
            //horizontal
            //showsHorizontalScrollIndicator={false}
            keyExtractor={(friends) => friends.name}
            data={friends}
            renderItem={({ item }) => {
                return (<Text style={styles.textStyle}>{item.name} -  Age: {item.age}</Text>)
            }} />
    )
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
})

export default ListScreen