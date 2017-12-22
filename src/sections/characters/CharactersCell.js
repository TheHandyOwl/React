import React, { Component } from 'react'
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from 'RepasoParaProbar/src/commons';

export default class CharactersCell extends Component {

    static defaultProps = {
        item: {},
        onSelectItem: () => {},
    }

    render() {
        const { item, onSelectItem } = this.props

        const nombre = item.nombre ? item.nombre : ''
        const edad = item.edad ? item.edad : ''
        const image = item.image_dir ? { uri: item.image_dir } : null
        
        return (
            <TouchableOpacity
                style={styles.container}
                onPress={ () => onSelectItem(item) }
                onLayout={ e => this.setState({ layout: e.nativeEvent.layout}) }
            >
                <Image
                    style={styles.image}
                    source={image}
                />

                <View style={styles.textContainer}>
                    <Text style={styles.name}>{nombre}</Text>
                    <Text style={styles.age}>{edad}</Text>
                </View>

            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    
    image: {
        width: '100%',
        height: 200,
    },

    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        position: 'absolute',
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: Colors.whiteShadowBG,
    },

    name: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.white,
    },
    
    age: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.white,
    }
})