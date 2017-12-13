import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Screen2 extends Component {

    render() {
        
        title='Título Screen 2';
        texto='Pantalla secundaria';

        return (
            <View>
                <Text style='container'>{title}</Text>
                <Text style='container'>{texto}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
