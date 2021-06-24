//below are action creators for redux, they don't handle any functionality
//all it does is creates actions that would be later initialized
export const CREATE_TODO = 'CREATE-TODO';
export const createTodo = todo =>({
    type: CREATE_TODO,
    payload: {todo},
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

export const LOAD_TODOS_IN_PROGRESS = 'LOAD_TODOS_IN_PROGRESS';
export const loadTodosInProgress = () =>({
    type: LOAD_TODOS_IN_PROGRESS,
});

export const LOAD_TODOS_SUCCESS = 'LOAD_TODOS_SUCCESS';
export const loadTodosSuccess = todos =>({
    type: LOAD_TODOS_SUCCESS,
    payload: {todos},
});

export const LOAD_TODOS_FAILURE = 'LOAD_TODOS_FAILURE';
export const loadTodosFailure = () =>({
    type: LOAD_TODOS_FAILURE,
});