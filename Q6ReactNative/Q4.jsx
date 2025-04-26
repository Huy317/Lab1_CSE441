import React from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function Hailstone(){
    var number = 0;
    function updateNumber(value){
        number = value;
    }
    function hailstone(n){
        var hailstoneSequence = "";
        while (n != 1) {
            hailstoneSequence += n + " ";
            if (n % 2 == 0) {
                n = n / 2;
            } else {
                n = 3 * n + 1;
            }
        }
        hailstoneSequence += 1;
        alert("Hailstone sequence: " + hailstoneSequence);
    }
    return(
        <View style={{flex:1, alignItems:"center", backgroundColor:"white"}}>
            <TextInput placeholder="Enter a number" onChangeText={(value)=>updateNumber(value)}></TextInput>
            <Button title="Get Answer" onPress={()=>hailstone(number)}></Button>
        </View>
    );
}