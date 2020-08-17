/*
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Navigation} from 'react-native-navigation'
*/

import React, {Component, useState} from 'react';
import {ImageButton} from 'react-native-image-button-text';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {
    StyleSheet,
    Text,
    View,
    Alert,
    TouchableHighlight,
    CheckBox
} from 'react-native';
//import {Calendar, Agenda} from 'react-native-calendars';
//import CalendarList from './calendar-list/CalendarList';
import {CustomButton} from './custom-button.js';
import Emoji from './emoji-buttons.js';
//import t from './survey-data.js';


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
                source={require('./1.png')}/>
            <ImageButton style = {styles.emojiButtons} 
                width={25} 
                height={25} 
                text="" 
                source={require('./2.png')}/>
            <ImageButton style = {styles.emojiButtons} 
                width={25} 
                height={25} 
                text="" 
                source={require('./3.png')}/>
            <ImageButton style = {styles.emojiButtons} 
                width={25} 
                height={25} 
                text="" 
                source={require('./4.png')}/>
            <ImageButton style = {styles.emojiButtons} 
                width={25} 
                height={25} 
                text="" 
                source={require('./5.png')}/>
            <ImageButton style = {styles.emojiButtons} 
                width={25} 
                height={25} 
                text="" 
                source={require('./6.png')}/>
            <ImageButton style = {styles.emojiButtons} 
                width={25} 
                height={25} 
                text="" 
                source={require('./7.png')}/>
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
          <Text style={styles.questions}>Save</Text>
        </TouchableHighlight>
                  </View>
                  </View>
                );
            }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'thistle',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'gray',

  },
  container2:{
    width: '70%',
    height: 'auto',
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
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});

/**
//import ExampleB from './ExampleB';
//import ExampleC from './ExampleC';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff',
    },
    container2: {
        flex: 1,
    },
    bar: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        flexDirection: 'row',
        borderTopWidth: 1,
        borderTopColor: '#fff'
    },
    barButton: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
    },
    barText: {
        color: 'white',
        textAlign: 'center',
    },
});

export default class App extends Component {

    constructor(props) {
        super(props);
        this.state = {selected: 2};

        this.changeExample = this.changeExample.bind(this);
    }

    /**changeExample() {
        switch (this.state.selected) {
            case 0:
                return <ExampleA/>;
            case 1:
                return <ExampleB />;
            case 2:
                return <ExampleC />;
        }
    }

    render() {
        return (
            <View style={[styles.container, {paddingTop: Platform.select({ios: 20, android: 0})}]}>
              <CalendarList/>

                <View style={{backgroundColor: 'black'}}>
                    <Text style={styles.barText}>Choose an example</Text>
                    <View style={styles.bar}>
                        <TouchableOpacity style={styles.barButton} onPress={() => this.setState({selected: 0})}>
                            <Text style={styles.barText}>Light</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.barButton} onPress={() => this.setState({selected: 1})}>
                            <Text style={styles.barText}>Dark</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.barButton} onPress={() => this.setState({selected: 2})}>
                            <Text style={styles.barText}>Pastel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}
**/
