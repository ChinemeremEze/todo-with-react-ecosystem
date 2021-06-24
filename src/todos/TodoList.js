import React from 'react';
import { connect } from 'react-redux';
import { removeTodo , completeTodo} from './action';
import TodoListItem from './TodoListItem'; 
import NewTodoForm from './NewTodoForm';
import { displayAlert } from './thunks';
import './TodoList.css'

function TodoList({todos = [], onRemovePressed, onCompletePressed}){
    return(
        <div className="list-wrapper">
            <NewTodoForm/>
            {todos.map(todo => 
                <TodoListItem 
                todo={todo} 
                onRemovePressed={onRemovePressed}
                onCompletePressed={onCompletePressed}
                />)
            }
        </div>
    );
}
const mapStateToProps = state =>({
    todos: state.todos,
});

const mapDispatchToProps = dispatch =>({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletePressed: text => dispatch(completeTodo(text)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)