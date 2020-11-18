import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#454545',
        height: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        color: '#fedbd1',
        fontSize: 25,
        fontWeight: '900',
        textTransform: 'uppercase',
        textShadowColor: '#262626',
        textShadowOffset: {width: -4, height: 4},
    }
})
