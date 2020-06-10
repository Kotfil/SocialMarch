const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let initialState = {
    posts: [
        {id: 0, message: 'Hello friend', likesCount: 12},
        {id: 1, message: 'How are You?', likesCount: 32},
    ],
    newPostText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: state.posts.length + 1,
                message: state.newPostText,
                likesCount: 2
            };
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''

            }
        case UPDATE_NEW_POST_TEXT:
                return {
                    ...state,newPostText: action.newText
                }
        default:
        return state;
    }
}
export const addPostActionCreator = () => ({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default profileReducer;
