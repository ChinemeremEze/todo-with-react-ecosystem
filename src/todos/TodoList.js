import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { completeTodo} from './action';
import TodoListItem from './TodoListItem'; 
import NewTodoForm from './NewTodoForm';
import { loadTodos, removeTodoRequest } from './thunks';
import './TodoList.css'

function TodoList({todos = [], onRemovePressed, onCompletePressed, isLoading, startLoadingTodos}){

    useEffect(() => {
        startLoadingTodos();
    }, [])

    const loadingMessage = <div>loading todos....</div>;
    const content = (
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
    return isLoading? loadingMessage: content;
};
const mapStateToProps = state =>({
    isLoading: state.isLoading,
    todos: state.todos,
});

const mapDispatchToProps = dispatch =>({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: text => dispatch(completeTodo(text)),
    startLoadingTodos: () => dispatch(loadTodos())
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)