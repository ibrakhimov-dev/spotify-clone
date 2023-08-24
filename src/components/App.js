import Home from "./Home";
import Sidebar from "./Sidebar";
import "../style/app.scss";

function App () { 
    return(
        <div className="container-fluid">
            <Sidebar />
            <Home />
        </div>
    )
}

export default App;