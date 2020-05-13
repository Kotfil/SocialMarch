let store = {

    _reRender() {
    },

    subscribe(fanc) {
        console.log('133')
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
            messages: [
                {id: 1, message: 'Hi'},
                {id: 2, message: 'How Are You?'},
                {id: 3, message: 'How old are you?'},
                {id: 4, message: 'Hjhjkghjghyuj'}
            ],
            newMessageText: '',
            errorClass: false,
            dialogs: [
                {id: 1, name: 'Oksana'},
                {id: 2, name: 'Vitaly'},
                {id: 3, name: 'Viktor'},
                {id: 4, name: 'Marina'},
                {id: 5, name: 'Evgen'},
                {id: 6, name: 'Sergey'}
            ]

        }
    },

    updateNewMessageText(value) {
        this._state.dialogsPage.errorClass = false;
        this._state.dialogsPage.newMessageText = value;
        this._reRender();
    },

    addMessage() {
        if (this._state.dialogsPage.newMessageText.trim() !== '') {
            this._state.dialogsPage.errorClass = false;
            let newMessage = {
                id: this._state.dialogsPage.messages.length + 1,
                message: this._state.dialogsPage.newMessageText
            };
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._reRender();
        } else {
            this._state.dialogsPage.errorClass = true;
            this._reRender();
        }
    },

    dispatch(action) {

        if (action.type === "ADD-POST") {
            let newPost = {
                id: this._state.profilePage.posts.length + 1,
                message: this._state.profilePage.newPostText,
                likesCount: 2
            };

            this._state.profilePage.posts.unshift(newPost);
            this._state.profilePage.newPostText = '';
            this._reRender();
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostText = action.text;
            this._reRender();
        }

    }

};


export default store;