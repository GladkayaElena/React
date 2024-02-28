import './content.css'
import img1 from './img1/u.jpg';
import img2 from './img2/1.png';
import img3 from './img2/2.png';
import img4 from './img2/3.png';
import img5 from './img2/4.png';
import img6 from './img2/5.png';
import img7 from './img1/vk.jpg';
import img8 from './img1/tel.jpg';
import img9 from './img1/dis.jpg';

const Content = () => {
    return ( 
        <div className="content">
            
            <div className="container1">
            <div className='con'></div>
                <h1 className='hed1'>Восхождение героя щита 3 / Tate no Yuusha no Nariagari Season 3</h1>
            <hr className='hr'></hr>
               <div className='title'><b>Сезон: </b>
               2023 осень</div>
               <div className='title'><b>Тип: </b>
               ТВ (12 эп.), 24 мин.</div>
               <div className='title'><b>Жанры: </b>
               Драма, Приключения, Фэнтези, Экшен</div>
               <div className='title'><b>Озвучка: </b>
               Ados, Amikiri, Hekomi, Sharon, Zozya</div>
               <div className='title'><b>Тайминг: </b>
               StuffyHarbor</div>
               <div className='title'><b>Работа над субтитрами: </b>
               ElViS</div>
            <hr className='hr'></hr>
            <p className='detali_p'>
            Угроза из другого мира было устранена, но времени на передышку у Наофуми совсем нет: помимо волн страшных чудовищ, для защиты от которых и были призваны герои, появилась более серьёзная проблема. Близится возрождение одного из четырёх зверей-хранителей, Феникса, который по силе ничуть не уступает Духу черепахи. Преграды на пути нашего героя становятся всё труднее и труднее, но он не отчаивается, ведь пока рядом с ним друзья, он точно знает, что сможет защитить этот мир. Ведь, что ни говори… а он — Герой Щита!
            </p>
        <div className='kinos'>
            <div className='kino'>
                <div className='kino1'>Озвучено при поддержке</div>
                <div className='kino2'>kino.pub</div>
                <div className='kino3'>При регистрации по промокоду «anilibria» 5 дней бесплатного pro аккаунта!</div>
                <div className='kino_url'>kino.pub</div>
            </div>
       </div>
       
        <div className='release'>
            <div className='release1'>Порядок просмотра</div>
            <div className='release2'>Восхождение героя щита</div>
            <div className='release3'>#1 Восхождение героя щита</div>
            <div className='release3'>#2 Восхождение героя щита 2</div>
            <div className='release4'>#3 Восхождение героя щита 3</div>
        </div>
        </div>
        
        <div className='detal_img'>
            <div className='img1'><img src={img1} alt="img"/></div>
              </div>

              <div className='video'>
                <div className='video_content'>
                    <button className='butoon_video' data-type='player' data-tab='anilibriaPlayer'>НАШ ПЛЕЕР</button>
                    <button className='butoon_video1'>СВЕТ</button>
                    <button className='butoon_video1'>СООБЩИТЬ ОБ ОШИБКЕ</button>
                    <a href="tg://resolve?domain=anilibria_bot&start=_d2VifGFkZF85NTM2" class="subscribe" title="Подписаться на уведомления о выходе новых серий этого тайтла в телеграм">
<svg enable-background="new 0 0 24 24" viewBox="0 0 24 24" width="30" height="30">
<rect rx="4" ry="4" fill="#039be5" width="100%" height="100%"></rect>
<path d="m5.491 11.74 11.57-4.461c.537-.194 1.006.131.832.943l.001-.001-1.97 9.281c-.146.658-.537.818-1.084.508l-3-2.211-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953z" fill="#fff"></path>
</svg>
</a>
            <button className='butoon_video2'>СМОТРЯТ: 8</button>
                </div>
              </div>
           
           <div class="xplayer z-fix" id="youtubePlayer">
<div id="youtubeEpisodes" class="external-episodes" data-episodes></div>
<div id="youtubeVideo"></div>
</div>

<div className='icons'>
<div className="grid">
  <div>Серия 1-12 [WEBRip 1080p]</div>

  <div className='img2'><img src={img2} alt="img"/><div>16.52 GB</div><img src={img3} alt="img"/>91<img src={img4} alt="img"/>4<img src={img5} alt="img"/>8703</div>

  <div>Добавлен 22.12.2023, 22:22</div>

  <div className='img2'><img src={img6} alt="img"/>Cкачать</div>

  <div>Серия 1-12 [WEBRip 1080p HEVC]</div>

  <div className='img2'><img src={img2} alt="img"/>3.03 GB<img src={img3} alt="img"/>110<img src={img4} alt="img"/>1<img src={img5} alt="img"/>10485</div>
  <div>Добавлен 24.12.2023, 14:34</div>

  <div className='img2'><img src={img6} alt="img"/>Cкачать</div>
</div>
</div>
<div className='registr'>
<div className='regist'><img className="img7" src={img7} alt="im"/></div>
<div className='regist'><img className="img7" src={img8} alt="im"/></div>
<div className='regist'><img className="img7" src={img9} alt="im"/></div>
</div>
</div>

           
     );
}
 
export default Content;