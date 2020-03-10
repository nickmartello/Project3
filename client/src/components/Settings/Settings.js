import React from 'react'
import "./Settings.css"

const Settings = ({changeTime, toggleDisplay}) => {
  
    return (
            <div className="settingsContainer">
                <div onClick={() => changeTime()} className="time">
                    <p>Standard</p><div className="switch"></div><p>Military</p>
                </div>
                <div onClick={() => toggleDisplay()} className="display">
                    <p>Toggle Night/Day</p>
                </div>
            </div>
        );
  };
  

export default Settings