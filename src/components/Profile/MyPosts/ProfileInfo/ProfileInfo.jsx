import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";

const ProfileInfo = (props) => {


    if (!props.profile) {
        return <Preloader />
    }

    return (

        <div className={s.profilePage}>
            <div>
                <img
                    src='https://www.jssor.com/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg'></img>
            </div>
            <div className={s.profileTitle}>

                <img src={props.profile.photos.large} />
                <div>
                    <span>{props.profile.aboutMe}</span>
                </div>
                <div>
                    <span>{props.profile.contacts.vk}</span>
                </div>
                <div>
                    <span>{props.profile.contacts.twitter}</span>
                </div>


                <div>

                </div>
            </div>
        </div>


    );
}

export default ProfileInfo;
