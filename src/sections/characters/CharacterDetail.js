import React, { Component } from 'react'
import { Button, Dimensions, Image, StyleSheet, Text, View } from 'react-native'

import { Colors } from 'RepasoParaProbar/src/commons'

export default class CharacterDetail extends Component {

    onSubmit() {
        console.log("Ha puslado el botón Eliminar")
    }

    render() {
        const { character } = this.props
        const nombre = ''
        const edad = ''
        const image = null

        return (
            <View style={styles.container}>

                <Image source={image} style={styles.image} resizeMode={'cover'} /> 
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{ nombre }</Text>
                    <Text style={styles.edad}>{ 'Edad: ' + edad }</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Button title={'Eliminar'} onPress={ () => this.onSubmit(character) } isFetching={this.props.isFetching} />
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
    },

    name: {
        flex: 1,
        fontSize: 20,
        fontWeight: '600',
        color: Colors.white,
    },

    edad: {
        fontSize: 16,
        color: Colors.white,
    },

    image: {
        width: Dimensions.get('window').width,
        height: 200,
    },

    buttonContainer: {
        margin: 20,
    },

});