import React from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ImagePropTypes } from 'react-native'

const InputBar = (props) => {
    return (
        <View style={styles.inputContainer}>
            <TextInput 
                style={styles.input} 
                onChangeText={(todoInput)=> props.textChange(todoInput)}
                value={props.todoInput}
            />
            <TouchableOpacity 
                style={styles.addButton} 
                onPress={props.addNewToDo}>
                <Text style={styles.addText}>ADD</Text>
            </TouchableOpacity>
        </View>
    )
}

export default InputBar

const styles = StyleSheet.create({
    inputContainer: {
        padding: 12,
        flexDirection: 'row',
        justifyContent: 'space-between',        
    },
    input: {
        borderColor: '#454545', 
        borderWidth: 2,
        borderRadius: 7,       
        shadowColor: '#262626',
        shadowOffset: {width: -4, height: 4},
        shadowOpacity: .3,
        // elevation: 3,  //For android but it is ugly
        color: '#454545',
        fontWeight: '500',
        flex: 1,
        fontSize: 18,
        height: 40,
        marginRight: 12
    },
    addButton: {
        borderRadius: 7,
        width: 100,
        height: 40,
        padding: 10,  
        backgroundColor: '#454545',
        shadowColor: '#262626',
        shadowOffset: {width: -4, height: 4},
        shadowOpacity: .3,
        alignItems: "center",
        justifyContent: 'center',
        // elevation: 3,  //For android but it is ugly
    },
    addText: {
        color: '#fedbd1',
        fontSize: 19,
        fontWeight: '700',
        textTransform: 'uppercase',
        textShadowColor: '#262626',
        textShadowOffset: {width: -4, height: 4},
    }
})
