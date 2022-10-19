import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {subscribe} from "./redux/state";
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, updateNewPostText} from "./redux/state";


const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
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



rerenderEntireTree(state);

subscribe(rerenderEntireTree);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

reportWebVitals();
