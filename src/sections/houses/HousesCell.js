import React, { Component } from 'react'
import { Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Colors } from 'RepasoParaProbar/src/commons';

export default class HousesCell extends Component {

    static defaultProps = {
        item: {},
        onSelectItem: () => {},
    }

    render() {
        const { item, onSelectItem } = this.props
        const image = item.image_dir ? { uri: item.image_dir } : null
        console.log("image: ", image)
        
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
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        margin: 10,
        width: Dimensions.get('window').width / 2 - 20, // 857/600
        height: (Dimensions.get('window').width / 2 - 20 ) * (857/600),

        ...Platform.select({
            ios: {
              shadowColor: 'rgba(255,255,255,0.1)',
              shadowOpacity: 1,
              shadowOffset: { height: 4, width: 4 },
              shadowRadius: 2,
            },
            android: {
              elevation: 4,
            },
        })
    },
    image: {
        resizeMode: 'contain', // 'contain', 'cover', 'stretch'
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
    }
    
});
