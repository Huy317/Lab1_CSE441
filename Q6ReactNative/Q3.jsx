import React from "react";
import { Button, Text, TextInput, View } from "react-native";
export default function MinimumOfThree(){
    var number = [0,0,0];
    function updateNumber(index, value){
        number[index] = value;
    }
    function minimum(arr){
        var min = Math.min(arr[0],arr[1],arr[2]);
        alert("Minimum number is: "+min);
    }
    return(
        <View style={{flex:1, alignItems:"center", backgroundColor:"white"}}>
            <TextInput placeholder="Enter first number" onChangeText={(value)=>updateNumber(0,value)}></TextInput>
            <TextInput placeholder="Enter second number" onChangeText={(value)=>updateNumber(1,value)}></TextInput>
            <TextInput placeholder="Enter third number" onChangeText={(value)=>updateNumber(2,value)}></TextInput>
            <Button title="Get Answer" onPress={()=>minimum(number)}></Button>
        </View>
    );
}