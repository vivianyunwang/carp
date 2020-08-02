import React, {Component, useState} from 'react';
import {ImageButton} from 'react-native-image-button-text';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    CheckBox,
    TouchableHighlight,
    onPress
} from 'react-native';
import {CustomButton} from './survey/custom-button.js';


export default function App() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <Text style={styles.questions}>How many hours of sleep did you get last night?</Text>
          <View style={styles.buttons}>
            <CustomButton
              title="0"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="1"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="2"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="3"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="4"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="5"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="6"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="7"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
            />
            <CustomButton
              title="8"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
            />
            <CustomButton
              title="9"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
            />
            <CustomButton
              title="10"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
            />
            <CustomButton
              title="10+"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
            />
          </View>
          <Text style={styles.questions}>How many hours of exercise did you get today?</Text>
          <View style={styles.buttons}>
            <CustomButton
              title="0"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="1"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="2"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="3"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="4"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="5"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="5+"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
          </View>
          <Text style={styles.questions}>How are you feeling right now? </Text>
          <View style={styles.buttons}>
            <ImageButton style = {styles.emojiButtons}
                width={25}
                height={25}
                text=""
                source={require('./survey/emoji-images/1.png')}/>
            <ImageButton style = {styles.emojiButtons}
                width={25}
                height={25}
                text=""
                source={require('./survey/emoji-images/2.png')}/>
            <ImageButton style = {styles.emojiButtons}
                width={25}
                height={25}
                text=""
                source={require('./survey/emoji-images/3.png')}/>
            <ImageButton style = {styles.emojiButtons}
                width={25}
                height={25}
                text=""
                source={require('./survey/emoji-images/4.png')}/>
            <ImageButton style = {styles.emojiButtons}
                width={25}
                height={25}
                text=""
                source={require('./survey/emoji-images/5.png')}/>
            <ImageButton style = {styles.emojiButtons}
                width={25}
                height={25}
                text=""
                source={require('./survey/emoji-images/6.png')}/>
            <ImageButton style = {styles.emojiButtons}
                width={25}
                height={25}
                text=""
                source={require('./survey/emoji-images/7.png')}/>
          </View>
          <Text style={styles.questions}>How many glasses of water did you drink today? </Text>
          <View style={styles.buttons}>
            <CustomButton
              title="0"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="1"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="2"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="3"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="4"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="5"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="6"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="7"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
            />
            <CustomButton
              title="8"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
            />
          </View>
          <Text style={styles.questions}>How many full meals did you have today? </Text>
          <View style={styles.buttons}>
            <CustomButton
              title="0"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="1"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="2"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
            <CustomButton
              title="3"
              onPress={() => Alert.alert(`Why you opened me? Go away, it’s mine!`)}
          />
          </View>
          <Text style={styles.questions}>What types of food did you eat today?</Text>

              <BouncyCheckbox
              isNotChecked
              textColor="black"
              fillColor="#53D3D1"
              unfillColor="white"
              //iconComponent={Icon}
              text="Grains 🌾"
            />
            <BouncyCheckbox
              isNotChecked
              textColor="black"
              fillColor="#53D3D1"
              unfillColor="white"
              //iconComponent={Icon}
              text="Dairy 🧀"
            />
            <BouncyCheckbox
              isNotChecked
              textColor="black"
              fillColor="#53D3D1"
              unfillColor="white"
              //iconComponent={Icon}
              text="Fruits & Vegetables 🍎"
            />
            <BouncyCheckbox
              isNotChecked
              textColor="black"
              fillColor="#53D3D1"
              unfillColor="white"
              //iconComponent={Icon}
              text="Protein 🍗"
            />
            <BouncyCheckbox
              isNotChecked
              textColor="black"
              fillColor="#53D3D1"
              unfillColor="white"
              //iconComponent={Icon}
              text="Junk Food 🍿"
            />
            <TouchableHighlight style={styles.submit}  underlayColor='#99d9f4'>
          <Text style={{fontSize: '130%', color:'#fff'}}>Save</Text>
        </TouchableHighlight>
                  </View>
                  </View>
                );
            }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFBF4B',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',

  },
  container2:{
    width: 'auto',
    height: '90%',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    shadowColor: '#002447',
    shadowOffset: {
	     width: 2,
	     height: 8,
    },
    shadowOpacity: 0.30,
    shadowRadius: 20,
    display: "flex",

  },
  questions:{
    fontSize: '130%',
    padding: 20,
    alignItems:'center',
    justifyContent:'center',
    lineHeight: '1.5em',
    color: '#002447'
  },
  emojiButtons:{
    //flex: 1,
    //padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly'

  },
  buttons:{
    //flex: 1,
    //padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  submit:{
    height: 36,
    backgroundColor: '#002447',
    borderColor: '#53D3D1',
    borderWidth: 1,
    borderRadius: 20,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    textColor: '#fffff',
    textAlign: 'center'
  }
});
