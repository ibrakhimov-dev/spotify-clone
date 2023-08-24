import { useEffect, useState } from "react";
import PlayListBase from "../../music/PlayListBase";


function Main (props) {
    const [playList, setPlayList] = useState([]);

    useEffect(() => {
        const playList = PlayListBase;
        setPlayList(playList);
    }, []);

    function clickBtn (item) {
        props.clickBtn(item);
    }

    const playListUzbek = playList.filter((item) => {
        return item.category.includes("Uzbek");
    })

    const playListRussian = playList.filter((item) => {
        return item.category.includes("Russian");
    })

    const playListWordMusic = playList.filter((item) => {
        return item.category.includes("World Music");
    })

    return (
        <main>
            <section className="uzbek">
                <div className="uzbek-content">
                    <h1>Uzbek</h1>
                    <div className="card-content">
                        {
                            playListUzbek.map((item, index) => {
                                return (
                                    <div key={index + 1} className="card">
                                        <button type="button" onClick={() => clickBtn(item)} className="card-play-btn">
                                            <i class="fa-solid fa-play"></i>
                                        </button>
                                        <img src={item.playListImg} alt={item.playListName} />
                                        <h4>{item.playListName}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> 
            </section>
            <section className="russian">
                <div className="russian-content">
                    <h1>Russian</h1>
                    <div className="card-content">
                        {
                            playListRussian.map((item, index) => {
                                return (
                                    <div key={index + 1} className="card">
                                        <button type="button" onClick={() => clickBtn(item)} className="card-play-btn">
                                            <i class="fa-solid fa-play"></i>
                                        </button>
                                        <img src={item.playListImg} alt={item.playListName} />
                                        <h4>{item.playListName}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div> 
            </section>
            <section className="word-music">
                <div className="word-music-content">
                    <h1>World Music</h1>
                    <div className="card-content">
                        {
                            playListWordMusic.map((item, index) => {
                                return (
                                    <div key={index + 1} className="card">
                                        <button type="button" onClick={() => clickBtn(item)} className="card-play-btn">
                                            <i class="fa-solid fa-play"></i>
                                        </button>
                                        <img src={item.playListImg} alt={item.playListName} />
                                        <h4>{item.playListName}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;