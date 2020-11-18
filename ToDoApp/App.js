import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { Platform, StyleSheet, Text, View , FlatList, AsyncStorage} from 'react-native';
import Header from './Components/Header'
import InputBar from './Components/InputBar'
import ToDoItem from './Components/ToDoItem'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoInput: '',
      todos: [
        {id: 0, title: 'First Task', done: false},
        {id: 1, title: 'Second Task', done: true}
      ]
    }
  }

  addNewToDo() {
    let todos= this.state.todos;
    todos.unshift({
      id: todos.length+1,
      title: this.state.todoInput,
      done: false
    });

    this.setState({
      todos: todos,
      todoInput: ''
    });

  }
  toggleDone(item) {
    let todos= this.state.todos;
    todos=todos.map((todo)=> {
      if(todo.id ==item.id){
        todo.done=!todo.done;
       }
      return todo
    })
    this.setState({todos});
  }

  removeTodo(item) {
    let todos = this.state.todos;
    
    todos=todos.filter((todo)=>todo.id !== item.id);
    this.setState({todos})
  }

  render(){
    // const statusbar = (Platform.OS == 'ios' ? <View style={styles.statusbar}></View> : <View></View>) //Zmienia kolor status baru tylko dla iphonika
      return (
        <View style={styles.container}>
          {/* <Text style={styles.titleText}>Dzień dobry</Text>
          <StatusBar style="auto" /> */}
          {/* <View style={styles.statusbar}></View>  //Kolorowy status na górze*/}
          <Header title='What to do?'/>
          <InputBar 
            textChange={todoInput => this.setState({todoInput})}
            addNewToDo={() => this.addNewToDo()}
            todoInput={this.state.todoInput}
          />
          <FlatList 
            data={this.state.todos}
            extraData={this.state}
            keyExtractor={(item,index)=> index.toString()}
            renderItem={ ({item, index}) => {
              return(
                <ToDoItem 
                  todoItem={item} 
                  toggleDone={()=>this.toggleDone(item)}
                  removeTodo={()=>this.removeTodo(item)}
                />
              );
            } }
          />
        </View>
    );
  }

}

const styles = StyleSheet.create({
  // titleText: {
  //   fontSize: 90,    
  //   color: '#B0376A',
  //   fontWeight: "bold",
  //   margin: 10,    
  //   padding: 10,
  //   borderColor: '#99bbd0'
  // },
  // statusbar: {
  //   backgroundColor: '#ff8080',
  //   height: 20
  // },
  container: {    
    backgroundColor: '#fedbd1',
    flex: 1
  }
});
