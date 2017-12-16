import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Screen1 extends Component {

    render() {
        title='Título Screen 1';
        texto='Pantalla principal';

        return (
            <View>
                <Text>{title}</Text>
                <Text>{texto}</Text>
                <Button
                    title="Pulsa para ir a la pantalla 2"
                    onPress={ () => Actions.screen2( { info: 'Info de prueba' } ) }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
