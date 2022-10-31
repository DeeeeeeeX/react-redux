import {configureStore} from "@reduxjs/toolkit";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let store = configureStore({
    reducer: {
        dialogsPage: dialogsReducer,
        profilePage: profileReducer,
        sidebar: sidebarReducer,
        usersPage: usersReducer,
        auth: authReducer
    }
});

window.store = store;

export default store;