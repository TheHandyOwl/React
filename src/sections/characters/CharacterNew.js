import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { Colors } from 'RepasoParaProbar/src/commons'
import { Input } from 'RepasoParaProbar/src/widgets'

// Redux
import { connect } from 'react-redux';
import * as CharactersActions from 'RepasoParaProbar/src/redux/actions/characters'

class CharacterNew extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name        : '',
            nameError   : '',
        }

    }

    render() {
        console.log("this.state.name: ", this.state.name)
        return (
            <View style={styles.container}>
                <Input
                    onChangeText    = { (v) => this.setState( { name: v } )}
                    value           = { this.state.name }
                    error           = { this.state.nameError }
                    label           = { 'Nombre:' }
                    placeholder     = { 'Eddard Stark' }
                />
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {

    }
}

export default connect (null, null) (CharacterNew)

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 20,
    },

    imageContainer: {
        width: '100%',
        height: 200,
        backgroundColor: 'grey',
        alignItems: 'center',
        justifyContent: 'center',
    },

    imageContainerBackground: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },

    button: {
        padding: 10,
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 6,
    },

    textButton: {
        color: 'white',
        fontWeight: '600',
    },

    inputContainer: {
        margin: 20,
    },

    buttonContainer: {
        margin: 20,
    },

})