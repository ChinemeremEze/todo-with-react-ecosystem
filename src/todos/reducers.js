import { CREATE_TODO, REMOVE_TODO } from "./action";
export const todos = (state = [], action) => {
    const {type, payload} = action;
    switch(type){
        case CREATE_TODO: {
            const {text} = payload;
            const newTodo = {
                text,
                isCompleted: false,
            };
            return state.concat(newTodo);
        }
        case REMOVE_TODO:{
            const {text} = payload;
            return state.filter(todos => todos.text !== text);
        }
        default:
            return state;
    }
}