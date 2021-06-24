import { CREATE_TODO, REMOVE_TODO, COMPLETE_TODO } from "./action";
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
        default:
            return state
    }
}