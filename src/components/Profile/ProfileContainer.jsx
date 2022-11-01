import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {profileAPI} from "../../api/api";

class ProfileContainer extends React.Component {

    componentDidMount() {
        profileAPI.getProfile()
            .then(data => {
                this.props.setUserProfile(data);
            });
    }

    render() {
        return (
            <Profile {...this.props}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer);