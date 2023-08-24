import Header from "./home-components/Header";
import Main from "./home-components/Main";
import Footer from "./home-components/Footer";
import PlayList from "./PlayList";
import MusicManager from "./MusicManager";
import Music from "./Music";
import { useState } from "react";

function Home () {
    const [isAgreeBtn, setIsAgreeBtn] = useState(false);
    const [isAgreeMusicBtn, setIsAgreeMusicBtn] = useState(false);
    const [currentMusic, setCurrentMusic] = useState("");
    const [currentPlayListName, setcurrentPlayListName] = useState("");

    function clickBtn(item) {
        setIsAgreeBtn(true);
        setcurrentPlayListName(item.playListName);
    }

    function clickMusic (item) {
        setIsAgreeMusicBtn(true);
        setCurrentMusic(item.musicName)
    } 

    return (
        <div className="home-content">
            <Header />
            {
                isAgreeBtn ? 
                    isAgreeMusicBtn ?
                        <Music currentMusic = {currentMusic}/> :
                        <PlayList currentPlayListName = {currentPlayListName} 
                        clickMusic = {clickMusic}/> : 
                    <Main clickBtn = {clickBtn}/>
            }
            <Footer />
            <MusicManager currentMusic = {currentMusic} isAgreeMusicBtn = {isAgreeMusicBtn}/>
        </div>
    )
}

export default Home;

