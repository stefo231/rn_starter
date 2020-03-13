import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View>
      <Text>Text tutorial: type your name in text input field</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Insert your name here"
        value={name}
        onChangeText={newValue => {
          setName(newValue);
        }}
      />

      <Text>My name is {name}</Text>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Password"
        value={password}
        onChangeText={newValue => {
          setPassword(newValue);
        }}
      />

      {password.length < 4 ? (
        <Text>Password must be atleast 4 characters</Text>
      ) : (
        <Text> Yey!!</Text>
      )}
    </View>
  );
};

export default TextScreen;
//! Always add Style to TextInput
const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 5,
    borderColor: "black",
    borderWidth: 1
  }
});
