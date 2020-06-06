const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT";

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How Are You?'},
        {id: 3, message: 'How old are you?'},
        {id: 4, message: 'test'}
    ],
    dialogs: [
        {id: 1, name: 'Oksana'},
        {id: 2, name: 'Vitaly'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Marina'},
        {id: 5, name: 'Evgen'},
        {id: 6, name: 'Sergey'}
    ],
    newMessageText: '',
};

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: state.messages.length + 1,
                message: state.newMessageText
            };
            return {
                ...state,
                messages: [newMessage, ...state.messages],
                newMessageText: ''
            }
        case UPDATE_NEW_MESSAGE_TEXT:
            return {
                ...state,
                newMessageText: action.newPost
            }
        default :
            return state;
    }


}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (post) => ({type: UPDATE_NEW_MESSAGE_TEXT, newPost: post});

export default dialogsReducer;