import React from 'react';
import { StyleSheet, TouchableOpacity, ViewPropTypes } from 'react-native';
import { Text, View } from './Themed';




export default function AppButton2 ({text, onPress2}){
    return (
        <TouchableOpacity onPress={onPress2}>
            <View style={styles.button}>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

       
const styles = StyleSheet.create( {
    button:{
        borderRadius:100 ,
        paddingVertical:50,
        paddingHorizontal: 20,
        backgroundColor: "black",
        transform: [{
            scaleX: 2
        }],
        width:"auto",
        marginTop:80,
        
        
    },
    
    buttonText:{
        color:"white",
        fontWeight: "normal",
        textTransform:"uppercase",
        fontSize: 14,
        lineHeight:14,
        width:"auto",
        textAlign:"center",
        overflow:"hidden",
        fontFamily:"Helvetica Neue",
        
        

    }
})