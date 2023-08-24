import MusicBase from "../music/MusicBase";
import { useEffect, useState } from "react";

function Music (props) {
    const [music, setMusic] = useState([]);
    const [currentMusic, setCurrentMusic] = useState(props.currentMusic)

    useEffect(() => {
        setMusic(MusicBase)
    }, []);

    const newMusic = music.filter((item) => {
        return item.musicName.includes(currentMusic);
    })

    const authorSongs = music.filter((item) => {
        return item.author.includes(newMusic[0].author);
    })

    return(
        <div className="music">
             {
                newMusic.map((item) => {
                    return (
                        <div className="music-header" 
                        style={{
                            backgroundImage: `linear-gradient(
                                180deg,
                                ${item.color[0]},
                                ${item.color[1]}
                            )`
                        }}>
                            <div className="music-header-content">
                                <img src={item.musicImg} alt={item.musicName} />
                                <div className="music-content">
                                    <h4>Song</h4>
                                    <h1>{item.musicName}</h1>
                                    <div className="music-description">
                                        <img src={item.authorImg} alt={item.author} />
                                        <p>{item.author} &bull; {item.musicName} &bull; {item.year} &bull; {item.musicDuration}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="music-author">
                                <div className="music-author-content">
                                    <img src={item.authorImg} alt={item.author} />
                                    <div className="music-author-name">
                                        <p>Artist</p>
                                        <p>{item.author}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            <div className="author-songs">
                <div className="table">
                    <div className="table-header">
                        <div className="row-id"><p>#</p></div>
                        <div className="row"><p>Title</p></div>
                        <div className="row"><p>Album</p></div>
                        <div className="row"><p>Data Added</p></div>
                        <div className="row"><p>Duration</p></div>
                    </div>
                    {
                        authorSongs.map((item, index) => {
                            return(
                               <div className="table-body" key={index+1}>
                                    <div className="row-id"><p>{index+1}</p></div>
                                    <div className="row row-music-title">
                                        <div className="row-img">
                                            <img src={item.musicImg} alt={`${item.author} - ${item.musicName}`} />
                                        </div>
                                        <div className="row-music">
                                            <button type="button" >{item.musicName}</button>
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

export default Music;