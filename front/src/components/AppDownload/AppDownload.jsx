import assets from "../../assets/assets";
import "./AppDownload.css";

const AppDownload = () => {
  return (
    <div className="AppDownload" id="AppDownload">
        <p>Download our app now for a seamless experience!</p>
        <div className="platforms">
            <img src={assets.play_store} alt="Play Store" />
            <img src={assets.app_store} alt="App Store" />
        </div>
    </div>
  );
}

export default AppDownload;
