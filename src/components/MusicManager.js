import MusicBase from "../music/MusicBase";
import { useEffect, useState } from "react";

function MusicManager (props) {
    const [filterCurrentMusic, setFilterCurrentMusic] = useState([
        {
            author: "ASL WAYNE",
            authorImg: "base/img/author-img/m1000x1000.jfif",
            musicName: "Tushunmidi",
            musicImg: "base/img/music-img/asl-wayne-tushunmidi.jpeg",
            year: 2023,
            musicDuration: "2:58",
            playList: "Uzbek Rep",
            color: ["#896b18", "#14111e"],
        },
    ])
    const [isAgreeMusicBtn, setIsAgreeMusicBtn] = useState(props.isAgreeMusicBtn);
    const [currentMusic, setCurrentMusic] = useState(props.currentMusic);
    const [music, setMusic] = useState([]);

    useEffect(() => {
        setMusic(MusicBase);
    }, [])

    // if (isAgreeMusicPlay) {
    //     const newFilterCurrentMusic = music.filter((item) => {
    //         return (item.musicName.includes(currentMusic));
    //     }) 
    //     setFilterCurrentMusic(newFilterCurrentMusic);
    // }

    console.log(isAgreeMusicBtn);
    console.log(currentMusic);

    return (
        <div className="music-manager">
            <div className="music-manager-title">
                <div className="music-manager-img">
                    <img width={60} src={filterCurrentMusic[0].musicImg} alt={filterCurrentMusic[0].musicName} />
                </div>
                <div className="music-title">
                    <h4>{filterCurrentMusic[0].musicName}</h4>
                    <p>{filterCurrentMusic[0].author}</p>
                </div>
                <div className="music-manager-like">
                    <a href="#like"><i class="fa-regular fa-heart"></i></a>
                    <a href="#picture"><i class="fa-solid fa-image"></i></a>
                </div>
            </div>
            <div className="manager">
                <div className="music-manager-btn">
                    <button type="button" className="shuffle"><i class="fa-solid fa-shuffle"></i></button>
                    <button type="button" className="prev"><i class="fa-solid fa-backward"></i></button>
                    <button type="button" className="play"><i class="fa-solid fa-play"></i></button>
                    <button type="button" className="next"><i class="fa-solid fa-forward"></i></button>
                    <button type="button" className="repeat"><i class="fa-solid fa-repeat"></i></button>
                </div>
                <div className="music-manager-progress">
                    <audio src=""></audio>
                    <p>start</p>
                    <div className="progress-bar">
                        <div className="bar">

                        </div>
                    </div>
                    <p>{filterCurrentMusic[0].musicDuration}</p>
                </div>
            </div>
            <div className="music-volume">
                <button type="button" className="view"><i class="fa-solid fa-circle-play"></i></button>
                <button type="button" className="mic"><i class="fa-solid fa-microphone"></i></button>
                <button type="button" className="bars"><i class="fa-solid fa-bars"></i></button>
                <button type="button" className="device"><i class="fa-sharp fa-solid fa-desktop"></i></button>
                <button type="button" className="volume"><i class="fa-solid fa-volume-high"></i></button>
                <input type="range" name="music-volume" min={0} max={10} id="music-volume"/>
            </div>
        </div>
    );
}

export default MusicManager;