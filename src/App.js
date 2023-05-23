import './App.css';
import React from 'react';
import {useState} from "react";
import {SideBar} from "./Components/SideBar/SideBar";
import {MainContent} from "./Components/MainContent/MainContent";
import {ActionBar} from "./Components/ActionBar/ActionBar";

function App() {
    const [activeNavTile, setActiveNavTile] = useState("home")
    let homeClass = activeNavTile === "home" ? "Active" : "InActive"
    let searchClass = activeNavTile === "search" ? "Active" : "InActive"
    let libraryClass = activeNavTile === "library" ? "Active" : "InActive"
    let newPlaylistClass = activeNavTile === "newPlaylist" ? "Active" : "InActive"
    let newPlaylistIconClass = activeNavTile === "newPlaylist" ? "AddIcon Black Background" : "AddIcon Black"
    let likedSongsClass = activeNavTile === "likedSongs" ? "Active" : "InActive"
    let likedSongsIconClass = activeNavTile === "likedSongs" ? "Light" : "Liked"
    return (
        <div className="App">
            <div className="ContentSection">
                <SideBar setActiveNavTile={setActiveNavTile} homeClass={homeClass} searchClass={searchClass}
                         libraryClass={libraryClass} newPlaylistClass={newPlaylistClass}
                         newPlaylistIconClass={newPlaylistIconClass} likedSongsClass={likedSongsClass}
                         likedSongsIconClass={likedSongsIconClass}/>
                <MainContent/>
            </div>
            <div className="ActionSection">
                <ActionBar/>
            </div>
        </div>
    );
}

export default App;
