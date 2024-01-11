import {useLocation} from "react-router-dom"
import HomeIcon from '@mui/icons-material/Home';
import ScaleIcon from '@mui/icons-material/Scale';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import '../Home.css';
import logo from "../images/logo.png";

export const Home = ( {id}: {id: number}) =>{

    const location = useLocation();

    return (
        <div className="Sidebar">
          <div className="SidebarIcon">
            <img src={logo} ></img>
            <p>mt-tate.helth</p>
          </div>
          <ul className="SidebarList">
            <li key={1} className="row" onClick={()=>{
              window.location.pathname = "/Home"
            }}>
              <div><HomeIcon /></div>
              <div>ホーム</div>
              </li>
            <li key={2} className="row">
            <div><ScaleIcon /></div>
              <div>体重登録</div>
              </li>
            <li key={3} className="row">
            <div><SettingsApplicationsIcon /></div>
              <div>ユーザ登録</div>
              </li>
              <li key={4} className="row">
            <div><SportsScoreIcon /></div>
              <div>目標登録</div>
              </li>
              <li key={5} className="row">
              <div><SettingsAccessibilityIcon /></div>
              <div>参考</div>
              </li>
          </ul>
        </div>
    )
}