const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";


let initialState = {
    users: [
        {id: 0, userName: 'Filipp', followed: false, status: 'Tester', location: {city: 'Kiev', country: 'Ukrain'}},
        {id: 1, userName: 'Andrew', followed: true, status: 'Hello Friend', location: {city: 'Odessa', country: 'Ukrain'}},
        {id: 2, userName: 'Nasty', followed: false, status: 'Go Go ', location: {city: 'Harkov', country: 'Ukrain'}}

    ],
    newPostText: '',
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
let stateCopy = {
    ...state,
    users: state.users.map(u => {
       if (u.id === action.userId) {
           return {...u, followed: true}
       }
        return u
    })
}
        case UNFOLLOW:

        default:
            return state;
    }
}
export const followAC = (userId) => ({type: FOLLOW, userId});
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});

export default usersReducer;

