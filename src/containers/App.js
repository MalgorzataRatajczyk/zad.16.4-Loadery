import React from 'react';
import uuid from 'uuid';
import style from './app.css';
import Title from '../components/Title.js';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            title: 'ToDo aplication'
        };
    }
    addTodo(val){
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }

    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                Tutaj pojawią się komponenty naszej aplikacji.
                <Title title={this.state.title} count={this.state.data.length} />
            </div>
        );
    }
}

export default App;