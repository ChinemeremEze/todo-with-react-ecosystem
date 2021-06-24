import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem'; 
import NewTodoForm from './NewTodoForm';
import { loadTodos, removeTodoRequest, updateTodoRequest } from './thunks';
import { getTodos, getTodosLoading } from './selectors';
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
    isLoading: getTodosLoading(state),
    todos: getTodos(state),
});

const mapDispatchToProps = dispatch =>({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(updateTodoRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos())
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)