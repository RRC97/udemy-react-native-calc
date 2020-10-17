import React, { Component } from 'react';
import { TouchableHighlight, Text, StyleSheet } from 'react-native';

export default class Button extends Component {
    constructor(props) {
        super(props);

        this.operator = this.props.operator;

        this.onClick = this.onClick.bind(this);
        this.onLongClick = this.onLongClick.bind(this);
    }

    onClick() {
        const type = (this.props.type || 'undefined');
        switch(type) {
            case "number":
                this.operator.addValue(this.props.label);
                break;

            case "operation":
                this.operator.setOperation(this.props.value || this.props.label);
                break;
            
            case "clear":
                this.operator.clearValue();
                break;

            case "result":
                this.operator.done();
                break;
        }
    }

    onLongClick() {
        const type = (this.props.type || 'undefined');
        if(type === "clear") {
            this.operator.clearAll();
        }
    }

    render() {
        return (
            <TouchableHighlight style={this.styles.button} onPress={this.props.onClick || this.onClick} onLongPress={this.onLongClick}>
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