import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

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

    renderItem(item, index) {
        console.log("item: ", item)
        console.log("index: ", index)
        return(
            <View>
                <Text>{ index }.- { item.nombre }</Text>
                <Button
                    title={item.nombre}
                    onPress={ () => console.log("Has pulsado en ", item.nombre) }
                />
            </View>
        )
    }

    render() {
        texto='Listado de casas';
        console.log("Recuperamos this.state.list: ", this.state.list);

        return (
            <View>
                <Text>{texto}</Text>
                <FlatList
                    data={this.state.list}
                    renderItem={ ( { item, index } ) => this.renderItem(item, index) }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

});
