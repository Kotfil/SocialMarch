const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";


let initialState = {
    users: [
        {id: 0, userName: 'Filipp',photoUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0149-CUSA09988_00-AV00000000000004/1553541605000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
            followed: true, status: 'Tester', location: {city: 'Kiev', country: 'Ukrain'}},
        {id: 1, userName: 'Andrew',photoUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0149-CUSA09988_00-AV00000000000004/1553541605000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
            followed: true, status: 'Hello Friend', location: {city: 'Odessa', country: 'Ukrain'}},
        {id: 2, userName: 'Nasty',photoUrl: 'https://store.playstation.com/store/api/chihiro/00_09_000/container/RU/ru/999/EP0149-CUSA09988_00-AV00000000000004/1553541605000/image?w=240&h=240&bg_color=000000&opacity=100&_version=00_09_000',
            followed: false, status: 'Go Go ', location: {city: 'Harkov', country: 'Ukrain'}}

    ],
    newPostText: '',
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
return  {
    ...state, users: state.users.map(u => {
        if (u.id === action.userId) {
            return {...u, followed: true}
        }
        return u;
    })
}
        case UNFOLLOW:
            debugger
            return  {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    } else {
                        return u;
                    }

                })
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }

        default:
            return state;
    }
}
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});

export default usersReducer;

