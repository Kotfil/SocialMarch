import React from 'react';
import s from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
    return (
        <div className={s.profilePage}>
            <div>
                <img
                    src='https://www.jssor.com/demos/image-slider/img/faded-monaco-scenery-evening-dark-picjumbo-com-image.jpg'></img>
            </div>
            <div className={s.profileTitle}>
                ava + 123
            </div>
        </div>


    );
}

export default ProfileInfo;
