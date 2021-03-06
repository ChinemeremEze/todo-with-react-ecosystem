import { createTodo, loadTodosSuccess, loadTodosFailure, loadTodosInProgress, removeTodo, completeTodo } from "./action";
export const loadTodos = () => async (dispatch, getState) =>{
    try{
        dispatch(loadTodosInProgress())
        const response = await fetch('http://localhost:8080/todos');
        const todos = await response.json();

        dispatch(loadTodosSuccess(todos));
    }catch(e){
        dispatch(loadTodosFailure());
        dispatch(displayAlert(e));
    }
}

export const addTodoRequest = text => async dispatch =>{
    try{
        const body = JSON.stringify({text});
        const respone = await fetch('http://localhost:8080/todos', {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,

        });
        const todo = await respone.json();
        dispatch(createTodo(todo));
    }catch(e){
        dispatch(displayAlert(e));
    }
}

export const updateTodoRequest = id => async dispatch =>{
    try{
        const body = JSON.stringify({id});
        const respone = await fetch(`http://localhost:8080/todos/${id}/completed`, {
            headers: {
                'Content-Type': 'application/json',
            },
            method: 'post',
            body,

        });
        const updatedTodo = await respone.json();
        dispatch(completeTodo(updatedTodo));
    }catch(e){
        dispatch(displayAlert(e));
    }
}

export const removeTodoRequest = id => async dispatch =>{
    try{
        const respone = await fetch(`http://localhost:8080/todos/${id}`, {
            method: 'delete'
        });
        const removedTodo = await respone.json();
        dispatch(removeTodo(removedTodo));
    }catch(e){
        dispatch(displayAlert(e));
    }
}


export const displayAlert = text =>() =>{
    alert(text);
};