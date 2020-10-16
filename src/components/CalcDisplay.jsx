import React, { Component, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useOperator } from '../utilities/Operator';

export default class CalcDisplay extends Component {
    operator = useOperator();
    constructor(props) {
        super(props);

        this.state = {
            value: this.operator.getValue(),
            result: this.operator.getResult()
        }
        this.operator.setComponent(this);
    }
    render() {
        return (
            <View style={this.styles.display}>
                <Text style={this.styles.operations}>{this.state.result}</Text>
                <Text style={this.styles.value}>{this.state.value}</Text>
            </View>
        );
    }
    setValue(value) {
        console.warn(value);
        this.setState({value});
    }

    styles = StyleSheet.create({
        display: {
            flex: 1,
            marginTop: 6,
            marginHorizontal: 6,
            padding: 10,
            backgroundColor: 'black',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            borderRadius: 10
        },
        operations: {
            flex: 1,
            color: 'lime',
            fontWeight: 'bold',
            fontSize: 24
        },
        value: {
            flex: 2,
            color: 'lime',
            fontWeight: 'bold',
            fontSize: 52,
            textAlign: 'right'
        }
    });
}