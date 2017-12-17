import React, { Component } from 'react'
import { Image, View, Text, StyleSheet , TouchableOpacity } from 'react-native'
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
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={ () => onSelectItem(item) }
                >
                    <Image
                        style={styles.image}
                        source={image}
                    />
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex:1
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: 'contain', // 'contain', 'cover', 'stretch'
    }
    
});
