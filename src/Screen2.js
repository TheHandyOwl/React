import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
