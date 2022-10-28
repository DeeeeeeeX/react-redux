import {configureStore} from "@reduxjs/toolkit";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let store = configureStore({
    reducer: {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer
    }
});

window.store = store;

export default store;