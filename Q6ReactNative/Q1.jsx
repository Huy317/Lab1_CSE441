import React from "react";
import { Button, Text, TextInput, View } from "react-native";
const styles = {
    input: {
        backgroundColor: "#ccc",
    }
};

export default function EntryScene() {
    var values = {
        name: "",
        age: "",
        occupation: ""
    }
    function handleChangeText(name, value) {
        values[name] = value;
    }
    function onPress() {
        alert(`Name: ${values.name}, Age: ${values.age}, Occupation: ${values.occupation}`);
    }
    return (
        <View style={{ flex: 1, alignItems: "center", backgroundColor: 'white' }}>
            <TextInput placeholder="Full Name" style={styles.input} onChangeText={(value) => handleChangeText("name", value)}></TextInput>
            <TextInput placeholder="Age" style={styles.input} onChangeText={(value) => handleChangeText("age", value)} ></TextInput>
            <TextInput placeholder="Occupation" style={styles.input} onChangeText={(value) => handleChangeText("occupation", value)}></TextInput>
            <Button title="Update" onPress={onPress}></Button>
        </View>
    );
}