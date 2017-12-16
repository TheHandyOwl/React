import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import axios from 'axios'

export default class HousesList extends Component {

    componentWillMount(){
        axios.get('http://146.185.137.85/got/web/casas')
        .then( function (response) {
            console.log("axios get response: ", response);
        })
        .catch( function (error) {
            console.log("axios get error: ", error);
        })
    }

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
