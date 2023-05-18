import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSpotify} from "@fortawesome/free-brands-svg-icons";
import {faHeart, faHouse, faMagnifyingGlass, faPlus} from "@fortawesome/free-solid-svg-icons";
import {BiLibrary} from "react-icons/bi";
import './SideBar.css';

const SideBar = ({
                     setActiveNavTile, homeClass, searchClass, libraryClass, newPlaylistClass,
                     newPlaylistIconClass, likedSongsClass, likedSongsIconClass
                 }) => {
    return (
        <div className="SideBar">
            <div className="Logo">
                <FontAwesomeIcon icon={faSpotify}/>
                <span>Spotify</span>
            </div>
            <nav className="Navigation">
                <ul>
                    <li className={homeClass} onClick={() => {
                        setActiveNavTile("home")
                    }}>
                        <div className="Icon">
                            <FontAwesomeIcon icon={faHouse}/>
                        </div>
                        <span>Home</span>
                    </li>
                    <li className={searchClass} onClick={() => {
                        setActiveNavTile("search")
                    }}>
                        <div className="Icon">
                            <FontAwesomeIcon icon={faMagnifyingGlass}/>
                        </div>
                        <span>Search</span>
                    </li>
                    <li className={libraryClass} onClick={() => {
                        setActiveNavTile("library")
                    }}>
                        <div className="ReactIcon">
                            <BiLibrary/>
                        </div>
                        <span>Your library</span>
                    </li>
                </ul>
                <ul>
                    <li className={newPlaylistClass} onClick={() => {
                        setActiveNavTile("newPlaylist")
                    }}>
                        <div className={newPlaylistIconClass}>
                            <FontAwesomeIcon icon={faPlus}/>
                        </div>
                        <span>Create playlist</span>
                    </li>
                    <li className={likedSongsClass} onClick={() => {
                        setActiveNavTile("likedSongs")
                    }}>
                        <div className={likedSongsIconClass}>
                            <FontAwesomeIcon icon={faHeart}/>
                        </div>
                        <span>Liked songs</span>
                    </li>
                </ul>
            </nav>
            <section>

            </section>
        </div>
    )
}

export {SideBar};