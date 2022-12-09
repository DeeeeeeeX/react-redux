import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hello, world", counts: 2},
                {id: 2, message: "ya 5pos nyashka", counts: 2},
                {id: 3, message: "Go ZXC viletim", counts: 8},
                {id: 4, message: "dadada", counts: 3},
                {id: 5, message: "blalba", counts: 12},
            ],
            newPostText: "DeeeeeeeX"
        },

        dialogsPage: {
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How are you"},
                {id: 3, message: "Whatsapp mean or telegram?"},
                {id: 4, message: "Yo"}, {id: 5, message: "Yo"}
            ],
            dialogs: [
                {id: 1, name: "Vlad"},
                {id: 2, name: "Nikita"},
                {id: 3, name: "Sanya"},
                {id: 4, name: "Oleg"},
                {id: 5, name: "Leha"},
                {id: 6, name: "Kal'yan"}
            ],
            newMessageBody: ""
        },

        sidebar: {
            sidebarImg: [
                {name: "Lena", link: "https://sun9-74.userapi.com/c9818/u119267510/132674364/y_9c3d63fe.jpg", id: 1},
                {name: "Dima", link: "https://coolsen.ru/wp-content/uploads/2021/06/98-4.jpg", id: 2},
                {name: "Sergey", link: "https://w-dog.ru/wallpapers/4/14/493960106482980/garret-xedlund-fotosessiya-instyle-sentyabr-2014.jpg", id: 3}
            ]
        }
    },

    _callSubscriber() {
        console.log('State changed')
    },

    getState() {
        return this._state;
    }, subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {     // {type: 'ADD-POST' }

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;