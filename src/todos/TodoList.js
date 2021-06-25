import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import TodoListItem from './TodoListItem'; 
import NewTodoForm from './NewTodoForm';
import styled from 'styled-components';
import { loadTodos, removeTodoRequest, updateTodoRequest } from './thunks';
import { getTodosLoading, getCompleteTodos, getIncompleteTodos } from './selectors';
import './TodoList.css'

const BigRedText = styled.div`
    font-size: 48px;
    color: #FF0000;
`;

const TodoList = ({completedTodos, incompleteTodos, onRemovePressed, onCompletePressed, isLoading, startLoadingTodos}) =>{

    useEffect(() => {
        startLoadingTodos();
    }, [])

    const loadingMessage = <div>loading todos....</div>;
    const content = (
        <div className="list-wrapper">
        <BigRedText>I'm big red text</BigRedText>
            <NewTodoForm/>
            <h3>Incomplete:</h3>
            {incompleteTodos.map(todo => 
                <TodoListItem 
                todo={todo} 
                onRemovePressed={onRemovePressed}
                onCompletePressed={onCompletePressed}
                />)
            }
            <h3>Completed:</h3>
            {completedTodos.map(todo => 
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
    completedTodos: getCompleteTodos(state),
    incompleteTodos: getIncompleteTodos(state)
});

const mapDispatchToProps = dispatch =>({
    onRemovePressed: id => dispatch(removeTodoRequest(id)),
    onCompletePressed: id => dispatch(updateTodoRequest(id)),
    startLoadingTodos: () => dispatch(loadTodos())
});
export default connect(mapStateToProps, mapDispatchToProps)(TodoList)