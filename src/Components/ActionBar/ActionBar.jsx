import './ActionBar.css'
import song from './../../Images/song.png'
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBackwardStep,
    faBars,
    faComputer,
    faForwardStep,
    faPlay,
    faRepeat,
    faShuffle, faUpRightAndDownLeftFromCenter, faVolumeLow
} from "@fortawesome/free-solid-svg-icons";

const ActionBar = () => {
    return (
        <div className="MainContainer">
            <div className="SongContainer">
                <img src={song} alt="song avatar"/>
                <div className="SongInfo">
                    <p className="SongName">STEW</p>
                    <p className="ArtistName">777villain</p>
                </div>
                <button className="SongHeartIcon">
                    <FontAwesomeIcon className="faIcons" icon={faHeart}/>
                </button>
            </div>
            <div className="PlayPause">
                <div className="ActionButtons">
                    <FontAwesomeIcon className="faIcons" icon={faShuffle}/>
                    <FontAwesomeIcon className="faIcons" icon={faBackwardStep}/>
                    <div className="CircleIcon"><FontAwesomeIcon className="PlayIcon" icon={faPlay}/></div>
                    <FontAwesomeIcon className="faIcons" icon={faForwardStep}/>
                    <FontAwesomeIcon className="faIcons" icon={faRepeat}/>
                </div>
                <div className="TimeLine">
                    <div className="Time">0:36</div>
                    <div className="Line"></div>
                    <div className="Time">4:25</div>
                </div>
            </div>
            <div className="FunctionsContainer">
                <div className="Queue">
                    <FontAwesomeIcon className="Bars" icon={faBars}/>
                    <div className="QueueTriangle"><FontAwesomeIcon className="SmallTriangle" icon={faPlay}/></div>
                </div>
                <FontAwesomeIcon className="FunctionIcons" icon={faComputer} />
                <div className="SoundContainer">
                    <FontAwesomeIcon className="FunctionIcons" icon={faVolumeLow} />
                    <div className="LineSound"></div>
                </div>
                <FontAwesomeIcon className="FunctionIcons" icon={faUpRightAndDownLeftFromCenter} />
            </div>
        </div>
    )
}

export {ActionBar};