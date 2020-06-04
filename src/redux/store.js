import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";



let store = {

    _reRender() {
    },

    subscribe(fanc) {
        this._reRender = fanc;
    },

    getState() {
        return this._state;
    },

    _state: {
        profilePage: {
            posts: [
                {id: 0, message: 'Hello friend', likesCount: 12},
                {id: 1, message: 'How are You?', likesCount: 32},
            ],
            newPostText: '',

        },
        dialogsPage: {

            errorClass: false


        }
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._reRender(this._state);
    }
}


export default store;