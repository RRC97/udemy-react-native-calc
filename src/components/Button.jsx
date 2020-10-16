import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';
import { useOperator } from '../utilities/Operator';

export default class Button extends Component {
    operator = useOperator();
    constructor(props) {
        super(props);

        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        const type = (this.props.type || 'undefined');
        switch(type) {
            case "number":
                this.operator.addValue(this.props.label);
                break;

            case "operation":
                this.operator.setOperation(this.props.value);
                break;
            
            case "clear":
                this.operator.clearValue();
                break;

            case "result":
                this.operator.done();
                break;
        }
    }

    render() {
        return (
            <TouchableHighlight style={this.styles.button} onPress={this.props.onClick || this.onClick}>
                <Text style={this.styles.text}>{this.props.label || 'B'}</Text>
            </TouchableHighlight>
        );
    }
    styles = StyleSheet.create({
        button: {
            margin: 2,
            flex: this.props.space || 1,
            backgroundColor: this.props.background || 'white',
            justifyContent: 'center',
            alignItems: 'center',
            borderWidth: 1,
            borderRadius: 10,
            borderColor: 'black'
        },
        text: {
            fontSize: 52,
            textAlign: 'center',
            color: this.props.color || 'black'
        }
    });
}