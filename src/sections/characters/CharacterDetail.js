import React, { Component } from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { Button } from 'RepasoParaProbar/src/widgets'
import { Colors } from 'RepasoParaProbar/src/commons'

import * as CharactersActions from 'RepasoParaProbar/src/redux/actions/characters'

// Redux
import { connect } from 'react-redux'

class CharacterDetail extends Component {

    onDelete(character) {
        this.props.deleteCharacter(character)
    }

    render() {
        const { character } = this.props
        const nombre = character ? character.nombre : ''
        const edad = character ? character.edad : ''
        const image = character && character.image_dir ? { uri: character.image_dir } : require('RepasoParaProbar/src/resources/placeholder.png')
        
        return (
            <View style={styles.container}>

                <Image source={image} style={styles.image} resizeMode={'cover'} /> 
                <View style={styles.textContainer}>
                    <Text style={styles.name}>{ nombre }</Text>
                    <Text style={styles.edad}>{ 'Edad: ' + edad }</Text>
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        label       = {'Eliminar'}
                        onPress     = { () => this.onDelete(character) }
                        isFetching  = {this.props.isFetching}
                    />
                </View>

            </View>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        character: state.characters.item,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        deleteCharacter: (character) => {
            character && dispatch(CharactersActions.deleteCharacter(character))
        },
    }
}

export default connect (mapStateToProps, mapDispatchToProps) ( CharacterDetail )

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