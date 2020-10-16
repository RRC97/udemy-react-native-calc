import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import Button from './Button';

export default class ButtonDisplay extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <View style={this.styles.display}>
                <View style={this.styles.column}>
                    <Button label="C" background="orange" color="white" type="clear"/>
                    <Button label="7" type="number"/>
                    <Button label="4" type="number"/>
                    <Button label="1" type="number"/>
                    <Button label="0" type="number"/>
                </View>
                <View style={this.styles.column}>
                    <Button label="%" background="black" color="white" background="darkgray" color="gray"/>
                    <Button label="8" type="number"/>
                    <Button label="5" type="number"/>
                    <Button label="2" type="number"/>
                    <Button label="00" type="number"/>
                </View>
                <View style={this.styles.column}>
                    <Button label="/" background="black" color="white" type="operation" value="div"/>
                    <Button label="9" type="number"/>
                    <Button label="6" type="number"/>
                    <Button label="3" type="number"/>
                    <Button label="." background="darkgray" color="gray"/>
                </View>
                <View style={this.styles.column}>
                    <Button label="X" background="black" color="white" type="operation" value="multi"/>
                    <Button label="-" background="black" color="white" type="operation" value="sub"/>
                    <Button label="+" background="red" color="white" space={2} type="operation" value="sum"/>
                    <Button label="=" background="gray" color="white" type="result"/>
                </View>
            </View>
        );
    }
    styles = StyleSheet.create({
        display: {
            padding: 4,
            flex: 4,
            flexDirection: 'row',
            backgroundColor: 'darkgray'
        },
        column: {
            flex: 1
        }
    });
}
