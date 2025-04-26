import React from "react";
import {Button, Text, TextInput, View } from "react-native";

export default function SumDigit(){
    var number = 0;
    function updateNumber(value){
        number = value;
    }
    function firstDigit(n){
        while (n>=10){
            n/=10;
        }
        return Math.floor(n);
    }
    function lastDigit(n){
        return Math.floor(n%10);
    }
    function sum(n){
        alert(firstDigit(n)+lastDigit(n));
    }
    return(
        <View style={{flex:1, alignItems:"center", backgroundColor:"white"}}>
            <TextInput placeholder="Enter a number" onChangeText={(value)=>updateNumber(value)}></TextInput>
            <Button title="Get Answer" onPress={()=>sum(number)}></Button>
        </View>
    );
}