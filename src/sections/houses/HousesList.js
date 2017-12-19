import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Colors } from 'RepasoParaProbar/src/commons';

import HousesCell from './HousesCell'

// redux
import { connect } from 'react-redux';
import * as HousesActions from 'RepasoParaProbar/src/redux/actions/houses';

class HousesList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: [],
            selected: null,
        }
    }

    componentWillMount(){
        this.props.fetchHousesList()
    }

    onSelectItem(house) {
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
                    data={this.props.list}
                    renderItem={ ( { item, index } ) => this.renderItem(item, index) }
                    // Para forzar el repintado en el FlatList
                    extraData={this.props}
                    // Esto quita uno de los warning
                    keyExtractor={ (item, index) => item.id }
                    numColumns={2}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.houses.list,
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchHousesList: () => {
            dispatch(HousesActions.fetchHousesList())
            // HousesActions.fetchHousesList() ← Aquí fuera no haría nada, no funcionaría
        }
    }
}

export default connect (mapStateToProps, mapDispatchToProps) (HousesList)

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: Colors.background,
        paddingVertical: 20,
    }
    
});
