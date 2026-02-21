import React from 'react'
import { MdOutlineCancel } from "react-icons/md";

const VideoPopup = ({ videoUrl, setPopupOpen }) => {
    return (
        <div className={css.Popup}>
            <MdOutlineCancel className={css.cancel_icon} onClick={() => setPopupOpen(false)} />

            <iframe
                src={videoUrl}
                width="100%"
                height="100%"
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen={true}
                loading="lazy"
            ></iframe>

        </div>
    )
}

export default VideoPopup

