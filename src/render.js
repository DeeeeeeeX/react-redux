import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText} from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    root.render(
        <BrowserRouter>
            <React.StrictMode>
                <App dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}
                     posts={state.profilePage.posts} sidebar={state.sidebar} addPost={addPost}
                     newPostText={state.profilePage.newPostText} updateNewPostText={updateNewPostText}/>
            </React.StrictMode>
        </BrowserRouter>
    );
}
