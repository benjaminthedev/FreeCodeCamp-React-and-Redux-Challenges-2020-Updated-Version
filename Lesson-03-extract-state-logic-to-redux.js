// Define ADD, addMessage(), messageReducer(), and store here:


const ADD = "ADD";

const addMessage = (message) => {
    return { type: ADD, message: message };
}

const messageReducer = (initialState = [], action) => {
    if (action.type === "ADD") {
        return [...initialState, action.message];
    } else {
        return initialState;
    }
}

const store = Redux.createStore(messageReducer);

