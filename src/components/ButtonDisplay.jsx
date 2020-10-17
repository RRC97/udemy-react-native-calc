import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native';
import Button from './Button';

export default class ButtonDisplay extends Component {
    constructor(props) {
        super(props);
        this.operator = this.props.operator;
    }
    render() {
        return (
            <View style={this.styles.display}>
                <View style={this.styles.column}>
                    <Button operator={this.operator} label="C" background="orange" color="white" type="clear"/>
                    <Button operator={this.operator} label="7" type="number"/>
                    <Button operator={this.operator} label="4" type="number"/>
                    <Button operator={this.operator} label="1" type="number"/>
                    <Button operator={this.operator} label="0" type="number"/>
                </View>
                <View style={this.styles.column}>
                    <Button operator={this.operator} label="%" background="black" color="white" type="operation"/>
                    <Button operator={this.operator} label="8" type="number"/>
                    <Button operator={this.operator} label="5" type="number"/>
                    <Button operator={this.operator} label="2" type="number"/>
                    <Button operator={this.operator} label="00" type="number"/>
                </View>
                <View style={this.styles.column}>
                    <Button operator={this.operator} label="/" background="black" color="white" type="operation"/>
                    <Button operator={this.operator} label="9" type="number"/>
                    <Button operator={this.operator} label="6" type="number"/>
                    <Button operator={this.operator} label="3" type="number"/>
                    <Button operator={this.operator} label="." type="number"/>
                </View>
                <View style={this.styles.column}>
                    <Button operator={this.operator} label="X" background="black" color="white" type="operation" value="*"/>
                    <Button operator={this.operator} label="-" background="black" color="white" type="operation"/>
                    <Button operator={this.operator} label="+" background="red" color="white" type="operation" space={2}/>
                    <Button operator={this.operator} label="=" background="black" color="white" type="result"/>
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
