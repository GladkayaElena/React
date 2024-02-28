import "./menu.css";
import m1 from "./img3/m1.jpg";
import m2 from "./img3/m2.jpg";
import m3 from "./img3/m3.jpg";
import m4 from "./img3/m4.jpg";
import m5 from "./img3/m5.jpg";
import icon from "./img3/icon.png";

const Menu = () => {
    return ( 
        <div className="menu">
                <div className="inner">
                    <div className="ico"></div>
                        <div className="search"><img className="icon" src={icon} alt="icon"></img></div>
                    
                    <input className="form" type="search" placeholder="Найти аниме по названию" autoComplete="off"></input>
                </div>
       
        <div className="menu-blok">
            <div className="menu_blok">
                <img className="img3" src={m1} alt="Достучаться до тебя 2"></img>
            </div>
        </div>
        <div className="menu-blok">
            <div className="menu_blok">
                <img className="img3" src={m2} alt="Выходные господина злодея"></img>
            </div>
        </div>
        <div className="menu-blok">
            <div className="menu_blok">
                <img className="img3" src={m3} alt="Я делаю все возможное..."></img>
            </div>
        </div>
        <div className="menu-blok">
            <div className="menu_blok">
                <img className="img3" src={m4} alt="Триган"></img>
            </div>
        </div>
        <div className="menu-blok">
            <div className="menu_blok">
                <img className="img3" src={m5} alt="Меня выгнали из отряда..."></img>
            </div>
        </div>

 </div>
     );
}
 
export default Menu;