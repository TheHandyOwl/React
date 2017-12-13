import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Screen1 extends Component {

    render() {

        title='Título Screen 1';
        texto='Pantalla principal';

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
});
