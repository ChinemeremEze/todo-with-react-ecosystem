import { CREATE_TODO, REMOVE_TODO, COMPLETE_TODO, LOAD_TODOS_FAILURE, LOAD_TODOS_SUCCESS, LOAD_TODOS_IN_PROGRESS } from "./action";

export const isLoading = (state = false, action) =>{
    const { type } = action;
    switch(type){
        case LOAD_TODOS_IN_PROGRESS:
            return true;
        case LOAD_TODOS_SUCCESS:
        case LOAD_TODOS_FAILURE:
            return false;
        default:
            return state;
    }
}

export const todos = (state = [], action) => {
    const {type, payload} = action;
    switch(type){
        case CREATE_TODO: {
            const {todo} = payload;
            return state.concat(todo);
        }
        case REMOVE_TODO: {
            const {text} = payload;
            return state.filter(todos => todos.text !== text);
        }
        case COMPLETE_TODO: {
            const {text} = payload;
            return state.map(todo => {
                if(todo.text === text){
                    return {...todo, isCompleted: true};
                }else{
                    return todo;
                }
            });
        }
        case LOAD_TODOS_SUCCESS: {
            const {todos} = payload;
            return todos;
        }
        case LOAD_TODOS_IN_PROGRESS: 
        case LOAD_TODOS_FAILURE: 
        default:
            return state
    }
}