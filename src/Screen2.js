import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class Screen2 extends Component {

    render() {
        
        title='Título Screen 2';
        texto='Pantalla secundaria';

        info = this.props && this.props.info ? this.props.info : 'Sin información';

        return (
            <View>
                <Text>{title}</Text>
                <Text>{texto}</Text>
                <Text>{info}</Text>
                <Button
                    title="Volver"
                    onPress={ () => { Actions.pop() } }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
