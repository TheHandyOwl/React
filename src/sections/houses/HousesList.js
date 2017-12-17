import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AsyncCalls, Colors } from 'RepasoParaProbar/src/commons';

import HousesCell from './HousesCell'

export default class HousesList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: [],
            selected: null,
        }
    }

    componentWillMount(){
        AsyncCalls.fetchHousesList()
            .then( response => {
                console.log("HousesList fetch response: ", response)
                this.setState( { list: response.records } )
            })
            .catch( error => {
                console.log("HousesList fetch error:", response)
                this.setState( { list: [] } )
            })
    }

    onSelectItem(house) {
        console.log("house: ", house)
        this.setState({ selected: house })
    }

    renderItem(item, index) {
        return (
            <HousesCell
                item={item}
                onSelectItem={ (house) => this.onSelectItem(house) }
            />
        )
    }

    render() {

        return (
            <View style={styles.container}>
                <FlatList
                    data={this.state.list}
                    renderItem={ ( { item, index } ) => this.renderItem(item, index) }
                    // Para forzar el repintado en el FlatList
                    extraData={this.state}
                    // Esto quita uno de los warning
                    keyExtractor={ (item, index) => item.id }
                    numColumns={2}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    }
    
});
