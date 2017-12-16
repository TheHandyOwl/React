import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import axios from 'axios'

export default class HousesList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: [],
            selected: null
        }
    }

    componentWillMount(){
        axios.get('http://146.185.137.85/got/web/casas')
        .then( (response) => {
            console.log("axios get response: ", response);
            const list = response.data && response.data.records ? response.data.records : []
            this.setState( { list: list } )
        })
        .catch( (error) => {
            console.log("axios get error: ", error);
            return []
        })
    }

    render() {
        texto='Listado de casas';
        console.log("Recuperamos this.state.list: ", this.state.list);

        return (
            <View>
                <Text>{texto}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
