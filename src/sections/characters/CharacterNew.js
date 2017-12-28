import React, { Component } from 'react'
import { Image, StyleSheet, Text, View, Picker, TouchableOpacity, TextInput } from 'react-native'

import { Colors } from 'RepasoParaProbar/src/commons'
import { Input } from 'RepasoParaProbar/src/widgets'
import { Button } from 'RepasoParaProbar/src/widgets'

import ImagePicker from 'react-native-image-picker' 

// Redux
import { connect } from 'react-redux';
import * as CharactersActions from 'RepasoParaProbar/src/redux/actions/characters'

class CharacterNew extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name        : '',
            nameError   : '',
            age         : '',
            ageError    : '',
            image       : null,
        }

    }

    validateForm() {

        let valid = true
        let errors = {}

        if (!this.state.name) {
            errors.name = 'Elige un nombre válido'
            valid = false
        }
        if (!this.state.age) {
            errors.age = 'Elige una edad válida'
            valid = false
        }
        
        this.setState({
            nameError: errors.name ? errors.name : '',
            ageError: errors.age ? errors.age : '',
        })

        return valid

    }

    onSubmit() {

        if (this.validateForm()) {
            const characterData = {
                nombre: this.state.name,
                edad: this.state.age ? this.state.age : null,
                image: this.state.image ? 'data:image/jpeg;base64,' + this.state.image.data : null,
                casa: this.props.house.id,
            }

            this.props.postCharacter(characterData)
        }
    }

    onSelectImageTapped() {
        // More info on all the options is below in the README...just some common use cases shown here
        var options = {
            title: 'Seleccionar imagen',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        
        /**
         * The first arg is the options object for customization
         * (it can also be null or omitted for default options),
         * The second arg is the callback which sends object:
         * response (more info below in README)
         */
        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);
        
            if (response.didCancel) {
            console.log('User cancelled image picker');
            } else if (response.error) {
            console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
            console.log('User tapped custom button: ', response.customButton);
            } else {
                //let source = { uri: response.uri };
                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };
                this.setState({
                    //image: source
                    image: response
                });
            }
        });
  
    }

    render() {
        const imageUri = this.state.image ? { uri: this.state.image.uri } : null
        const imageButtonText = this.state.image ? this.state.image.fileName : 'Elegir imagen'
        return (
            <View style={styles.container}>
                
                <View style={styles.imageContainer}>
                    <Image
                        source={imageUri}
                        style={styles.imageContainerBackground}
                        resizeMode={'cover'}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={ () => this.onSelectImageTapped() }
                    >
                        <Text style={styles.textButton}>{imageButtonText}</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputContainer}>
                    <Input
                        onChangeText    = { (v) => this.setState( { name: v } )}
                        value           = { this.state.name }
                        error           = { this.state.nameError }
                        label           = { 'Nombre:' }
                        placeholder     = { 'Eddard Stark' }
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Input
                        onChangeText    = { (v) => this.setState( { age: v } )}
                        value           = { this.state.age }
                        error           = { this.state.ageError }
                        label           = { 'Edad:' }
                        placeholder     = { '50' }
                    />
                </View>

                <View style={styles.buttonContainer}>
                    <Button
                        label={'Guardar'}
                        onPress={ () => this.onSubmit() }
                        isFetching = { this.props.isFetching }
                    />
                </View>

            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        house: state.houses.item,
        isFetching: state.characters.isFetching,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        postCharacter: (data) => {
            dispatch(CharactersActions.postCharacter(data))
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (CharacterNew)

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.background,
        padding: 20,
    },

    imageContainer: {
        width: '100%',
        height: 200,
        backgroundColor: Colors.grey,
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
        borderColor: Colors.white,
        borderWidth: 1,
        borderRadius: 6,
    },

    textButton: {
        color: Colors.white,
        fontWeight: '600',
    },

    inputContainer: {
        margin: 20,
    },

    buttonContainer: {
        margin: 20,
    },

})