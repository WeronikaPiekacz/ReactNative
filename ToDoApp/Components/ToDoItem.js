import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Button } from 'react-native'

export default class ToDoItem extends React.Component {
    constructor (props) {
        super(props);
    }
    render() {
        const todoItem= this.props.todoItem;
        return (
            <View style={styles.conteinerToDo}>
                <TouchableOpacity 
                    style={styles.todoItem}
                    onPress={()=> this.props.toggleDone()}
                >
                    <Text style={(todoItem.done) ? {color: '#f2c5b3'} : {color: '#454545'}}> 
                        <Text style={styles.fontStyle}>{'●    '}{todoItem.title}</Text>
                    </Text>

                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={()=> this.props.removeTodo()}
                    >
                        <Text style={styles.buttonText}>DELETE</Text>   
                    </TouchableOpacity>
            
                    
                </TouchableOpacity>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    conteinerToDo: {
        padding: 3,
        marginLeft: 20
    },
    todoItem: {
        width: '100',
        height: 40,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    fontStyle: {
        fontSize: 19,
        fontWeight: '700',
        textShadowColor: '#efb9a7',
        textShadowOffset: {width: -2, height: 2},
    },
    button: {
        marginRight: 20,
        borderRadius: 7,
        width: 80,
        height: 30,
        padding: 10,  
        backgroundColor: '#454545',
        shadowColor: '#262626',
        shadowOffset: {width: -4, height: 4},
        shadowOpacity: .3,
        alignItems: "center",
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fedbd1',
        fontSize: 15,
        fontWeight: '700',
        textTransform: 'uppercase',
        textShadowColor: '#262626',
        textShadowOffset: {width: -4, height: 4},
    }
})
