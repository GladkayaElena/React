import './promo.css'
import im from './img/im.png';


const Promo = () => {
    return ( 
        <section className="promo">
            <div className="container">
                <ul className="promo_list">
                    <li className='a1'>ГЛАВНАЯ</li>
                    <li className='a2'>РЕЛИЗЫ</li>
                    <li className='a3'>РАСПИСАНИЕ</li>
                    <li className='a4'>СЛУЧАЙНОЕ</li>
                    <li className='a5'>ПРИЛОЖЕНИЕ</li>
                    <li className='a6'>КОМАНДА</li>
                    <li className='a7'>ПОДЕРЖАТЬ ПРОЕКТ</li>
                </ul>
            </div>
            <div className='promo_img'>
                <img className='im' src={im} alt="img"></img>
                </div>
        </section>
     );
}
 
export default Promo;