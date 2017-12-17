import React, { Component } from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { AsyncCalls, Colors } from 'RepasoParaProbar/src/commons';

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

    checkIsSelected(item) {
        if( (this.state.selected != null) && (this.state.selected.id == item.id) ) {
            return true
        } else {
            return false
        }
    }

    renderItem(item, index) {
        const isSelected = this.checkIsSelected(item)
        const cellStyle = isSelected ? { backgroundColor: Colors.red } : { backgroundColor: Colors.yellow }
        const titleStyle = isSelected ? { color: Colors.yellow } : { color: Colors.red }
        const titleColor = isSelected ? Colors.yellow : Colors.red
        
        return(            
            <View style={ [styles.cell, cellStyle] }>
                <Text style={ titleStyle }>{ index }.- { item.nombre }</Text>
                <Button
                    title={item.nombre}
                    onPress={ () => {
                            this.setState( { selected: item } )
                        }
                    }
                    color={titleColor}
                />
            </View>
        )
    }

    render() {
        const nombre = this.state.selected && this.state.selected.nombre ?
            this.state.selected.nombre : 'Seleccione una casa'

        return (
            <View>
                <Text style={styles.title}>{ nombre }</Text>
                <FlatList
                    data={this.state.list}
                    renderItem={ ( { item, index } ) => this.renderItem(item, index) }
                    // Para forzar el repintado en el FlatList
                    extraData={this.state}
                    // Esto quita uno de los warning
                    keyExtractor={ (item, index) => item.id }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({

    cell: {
        height: 100,
        marginVertical: 10
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 20
    }
    
});
