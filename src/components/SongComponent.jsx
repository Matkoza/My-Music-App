import React, {useEffect, useState} from "react";
import {getSongs, addSong} from '../services/SongService.js';
import Table from "./Table.jsx";

function SongComponent(){

    const [songs, setSongs] = useState([])

    useEffect(() => {
        getSongs().then((response) =>{
            setSongs(response.data)
            console.log(response.data);
        });
    }, [])

    return(
        <div className = "container">
            <h1 className = "text-center"> Song List</h1>   
            <Table songDetails={songs}/>
        </div>
        
    )
}

export default SongComponent;