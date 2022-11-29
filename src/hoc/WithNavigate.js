import React from "react";
import { useNavigate } from 'react-router-dom';

export const WithNavigate = (Component) => {
    let RedirectTo =(props) => {
        return < Component {...props} navigate={useNavigate() } />
    }
    return RedirectTo;
}