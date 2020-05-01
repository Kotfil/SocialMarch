import {reRenderEntireTree} from "../render";


let state = {
    profilePage: {
        posts: [
            {id: 0, message: 'Hello friend', likesCount: 12},
            {id: 1, message: 'How are You?', likesCount: 32},
        ],
        newPostText: 'it-kamasutra'

    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How Are You?'},
            {id: 3, message: 'How old are you?'}

        ],
        dialogs: [
            {id: 1, name: 'Oksana'},
            {id: 2, name: 'Vitaly'},
            {id: 3, name: 'Viktor'},
            {id: 4, name: 'Marina'},
            {id: 5, name: 'Evgen'},
            {id: 6, name: 'Sergey'}
        ]

    }
}

export let addPost = () => {
    let newPost = {
        id: 3,
        message: state.profilePage.newPostText,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
     reRenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    reRenderEntireTree(state);
}


export let addMessage = () => {

    let newMessage = {
        id: 1,
        message: state.dialogsPage.newMessageText
    };

    state.dialogsPage.messages.push(newMessage);

    reRenderEntireTree(state);
}


export let updateNewMessageText = (newMessage) => {
    state.dialogsPage.newMessageText = newMessage;
    reRenderEntireTree(state);
}





export default state;