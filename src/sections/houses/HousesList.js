import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class HousesList extends Component {

    render() {
        texto='Listado de casas';

        return (
            <View>
                <Text>{texto}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
