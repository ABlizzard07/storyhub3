import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Read from "./screens/Read";
import Write from "./screens/Write";
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default class App extends React.Component {
  render(){
    return (
      <View style={styles.container}>
         <AppContainer />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Write: {screen: Write},
  Read: {screen: Read}
})

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
     flex: 1,
     backgroundColor: '#fff',
     alignItems: 'center',
     justifyContent: 'center',
  }
})