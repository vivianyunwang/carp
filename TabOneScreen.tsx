import * as React from 'react';
import { StyleSheet, ViewComponent, ViewPropTypes, Alert,} from 'react-native';
//import {fontFamily} from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Text, View } from '../components/Themed';
import AppButton from "../components/customButton";
import AppButton2 from "../components/customButton2";


export const picFromGallery = async()=>{
  const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
  if(granted){
     let data= await ImagePicker.launchImageLibraryAsync({
          mediaTypes:ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect:[1,1],
          quality:1,
      })
      console.log(data)
  }
  else{
       Alert.alert("Permission required to access Camera roll")
  }
 }
 export const picFromCamera = async()=>{
  const {granted} = await Permissions.askAsync(Permissions.CAMERA);
  if(granted){
     let data= await ImagePicker.launchCameraAsync({
          mediaTypes:ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect:[1,1],
          quality:1,
      })
      console.log(data)
  }
  else{
       Alert.alert("Permission required to access Camera roll")
  }
 }



function TabOneScreen() {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Take a Picture!</Text>
      <AppButton text="+ Take a Pic!" onPress={()=>picFromCamera()}></AppButton>
      <AppButton2 text= "Upload a Pic!" onPress2={()=> picFromGallery()}></AppButton2>
      
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 32,
    color:"#000000",
    fontFamily: "Helvetica Neue",
  
  },
  
});
export default TabOneScreen