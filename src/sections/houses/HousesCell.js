import React, { Component } from 'react'
import { View, Text, StyleSheet , TouchableOpacity } from 'react-native'
import { Colors } from 'RepasoParaProbar/src/commons';

export default class HousesCell extends Component {

    static defaultProps = {
        item: {},
        index: null,
        onSelectItem: () => {},
    }

    render() {
        const { item, index, onSelectItem } = this.props
        
        return (
            <View>
                <TouchableOpacity
                    style={ styles.button }
                    onPress={ () => onSelectItem(item) }
                >
                    <Text>{ index }.- { item.nombre }</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    button: {
        borderColor: Colors.grey,
        borderWidth: 3,
        padding: 10,
        margin: 20,
        borderRadius: 12,
    }
    
});
