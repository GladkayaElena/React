import img from './img/h.png';
import './header.css';


function Header(){

return(
    <header className="header">
          <div className='header_img'>
            <img src={img} alt="img"/>
            </div>
    </header>
)

}

export default Header;