import React, { useState} from 'react';
import { connect } from 'react-redux';
import { createTodo } from './action';
import './NewTodoForm.css';

const NewTodoForm = ({todos, onCreatePressed}) =>{
    const [inputValue, setInputValue] = useState('');

    return(
        <div className="new-todo-form">
            <input type="text"
            className="new-todo-input"
            placeholder="Type your new Todo here"
            value={inputValue}
            onChange={e => setInputValue(e.target.value)}
            />
            <button 
            className="new-todo-button"
            onClick = {()=> {
                const isDuplicateText = todos.some(todo => todo.text === inputValue);
                if(!isDuplicateText){
                    console.log("not Duplicate");
                    onCreatePressed(inputValue);
                    setInputValue('')
                }else{
                    console.log("Duplicate");
                }
            }}>
                Create Todo
            </button>
        </div>
    );
}

const mapStateToProps = state => ({
    todos: state.todos
})
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)) 
});
export default connect(mapStateToProps,mapDispatchToProps)(NewTodoForm);