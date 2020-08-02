import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
export const CustomButton = (props) => {
    const { title = 'Enter', style = {}, textStyle = {}, onPress } = props;
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={[styles.text, textStyle]}>{props.title}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#53D3D1',
        shadowColor: '#002447',
        shadowOpacity: 0.4,
        shadowOffset: { height: 4, width: 0 },
        shadowRadius: 4,
    },
    text: {
        fontSize: 16,
        textTransform: 'uppercase',
        color: '#FFFFFF',
    },
});
