import "./footer.css";
import f from "./img4/f.jpg";
import f1 from "./img4/f1.png";
import f2 from "./img4/f2.png";
import f3 from "./img4/f3.png";

const Footer = () => {
    return (  
        <div className="footer">
            <div className="footer_left">
            <div className="footer-left2">
            <a href="http://www.animespirit.ru/" rel="nofollow"><img className="icon1" src={f} alt="ico"></img></a>
                <a href="https://github.com/anilibria" rel="nofollow"><img className="icon1" src={f1} alt="ico"></img></a>
                <a href="https://alice2k.work/" rel="nofollow"><img className="icon1" src={f2} alt="ico"></img></a>
            </div>
            </div>
            <div className="footer_center"><img src={f3} alt="ico"></img></div>
         <div class="footer_right">
<ul>
<li><a href="/pages/login.php#rules">Правила</a></li>
<li><a href="tg://resolve?domain=Libria911Bot">Вопрос</a></li>
<li><a href="/pages/cp.php">Личный кабинет</a></li>
<li><a href="/pages/login.php">Регистрация</a></li><li><a href="/pages/login.php">Вход</a></li> </ul>
<p>
Весь материал на сайте представлен исключительно для домашнего ознакомительного просмотра.<br/> В случаях нарушения авторских прав - обращайтесь на почту <a href="/cdn-cgi/l/email-protection" class="__cf_email__" data-cfemail="c7a6a9aeabaea5b5aea687b7b5a8b3a8a9aaa6aeabe9a4a8aa">[email&#160;protected]</a>
</p>
</div>
</div>
    );
}
 
export default Footer;