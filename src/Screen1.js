import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Screen1 extends Component {

    render() {
        title='Título Screen 1';
        texto='Pantalla principal';

        return (
            <View>
                <Text style='container'>{title}</Text>
                <Text style='container'>{texto}</Text>
                <Button
                    title="Pulsa para ir a la pantalla 2"
                    onPress={ () => Actions.screen2() }
                />
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
