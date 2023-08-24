import { useEffect, useState } from "react";
import PlayListBase from "../music/PlayListBase";
import MusicBase from "../music/MusicBase"; 

function PlayList(props) {
    const [currentPlayListName, setcurrentPlayListName] = useState(props.currentPlayListName);
    const [playList, setPlayList] = useState([]);
    const [music, setMusic] = useState([]);

    useEffect(() => {
        setPlayList(PlayListBase);
        setMusic(MusicBase)
    }, []);

    function clickMusic (item) {
        props.clickMusic(item);
    }

    const newPlayList = playList.filter((item) => {
        return item.playListName.includes(currentPlayListName);
    })

    const playlistSongs = music.filter((item) => {
        return item.playList.includes(currentPlayListName);
    })
    
    return (
        <div className="playlist">
            {
                newPlayList.map((item) => {
                    return (
                        <div className="playlist-header" 
                        style={{
                            backgroundImage: `linear-gradient(
                                180deg,
                                ${item.color[0]},
                                ${item.color[1]}
                            )`
                        }}>
                            <div className="playlist-header-content">
                                <img src={item.playListImg} alt={item.playListName} />
                                <div className="playlist-content">
                                    <h4>Playlist</h4>
                                    <h1>{item.playListName}</h1>
                                    <p>{item.description}</p>
                                    <p className="spotify">
                                        <i class="fa-brands fa-spotify" style={{color: "#1dcb5b"}}></i> Spotify &diams; {item.musicNumber} songs
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="playlist-songs">
                <div className="table">
                    <div className="table-header">
                        <div className="row-id"><p>#</p></div>
                        <div className="row"><p>Title</p></div>
                        <div className="row"><p>Album</p></div>
                        <div className="row"><p>Data Added</p></div>
                        <div className="row"><p>Duration</p></div>
                    </div>
                    {
                        playlistSongs.map((item, index) => {
                            return(
                               <div className="table-body" key={index+1}>
                                    <div className="row-id"><p>{index+1}</p></div>
                                    <div className="row row-music-title">
                                        <div className="row-img">
                                            <img src={item.musicImg} alt={`${item.author} - ${item.musicName}`} />
                                        </div>
                                        <div className="row-music">
                                            <button type="button" onClick={() => clickMusic(item)}>{item.musicName}</button>
                                            <p>{item.author}</p>
                                        </div>
                                    </div>
                                    <div className="row"><p>{item.musicName}</p></div>
                                    <div className="row"><p>{item.year}</p></div>
                                    <div className="row"><p>{item.musicDuration}</p></div>
                               </div> 
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default PlayList;