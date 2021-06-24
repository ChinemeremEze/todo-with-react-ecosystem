//below are action creators for redux, they don't handle any functionality
//all it does is creates actions that would be later initialized
export const CREATE_TODO = 'CREATE-TODO';
export const createTodo = text =>({
    type: CREATE_TODO,
    payload: {text},
});

export const REMOVE_TODO = 'REMOVE_TODO';
export const removeTodo = text =>({
    type: REMOVE_TODO,
    payload: {text},
});

export const COMPLETE_TODO = 'COMPLETE_TODO';
export const completeTodo = text =>({
    type: COMPLETE_TODO,
    payload: {text},
});