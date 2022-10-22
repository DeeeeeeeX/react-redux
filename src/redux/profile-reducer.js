const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hello, world", counts: 2},
        {id: 2, message: "ya 5pos nyashka", counts: 2},
        {id: 3, message: "Go ZXC viletim", counts: 8},
        {id: 4, message: "dadada", counts: 3},
        {id: 5, message: "blalba", counts: 12},
    ],
    newPostText: "DeeeeeeeX"
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                counts: 0
            };
            state.posts.unshift(newPost);
            state.newPostText = '';
            return state;

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default profileReducer;