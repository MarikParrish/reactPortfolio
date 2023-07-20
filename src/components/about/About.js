import { Link } from 'react-router-dom';

import main_photo from './img/main_photo.jpg'
import languages from '../languages/Languages';

import './about.scss';
import './about-media.scss';



const About = ({ lang }) => {


    const mySkills = [
        { name: 'HTML5', counter: 100 },
        { name: 'CSS3', counter: 100 },
        { name: 'SASS/SCSS', counter: 100 },
        { name: 'Bootstrap', counter: 90 },
        { name: 'Js', counter: 70 },
        { name: 'React', counter: 50 },
    ]

    languages.setLanguage(lang);

    return (
        <>
            <section id="about" className="about">
                <div className="container">
                    <h2 className="title title_main about__title">{languages.about__title}</h2>
                    <div className="title title_subtitle about__subtitle">{languages.about__subtitle}</div>
                    <div className="about__intro">
                        {<img className="about__photo" src={main_photo} alt="main_photo" />}
                        <div className="about__descr">{languages.about__descr}</div>
                    </div>

                    <div className="about__wrapper">
                        <div className="about__profile">
                            <h3 className="title title_fz18 about__main">{languages.about__main}</h3>
                            <div className="about__info">
                                <div className="about__info-item">
                                    <div className="title title_fz18 about__main-info">{languages.name}</div>
                                    <div className="about__info-descr">{languages.myname}</div>
                                </div>

                                <div className="about__info-item">
                                    <div className="title title_fz18 about__main-info">{languages.age}</div>
                                    <div className="about__info-descr">20</div>
                                </div>

                                <div className="about__info-item">
                                    <div className="title title_fz18 about__main-info">{languages.rank}</div>
                                    <div className="about__info-descr">{languages.myrank}</div>
                                </div>

                                <div className="about__info-item">
                                    <div className="title title_fz18 about__main-info">{languages.gmail}</div>
                                    <div className="about__info-descr">marikparrish@gmail.com</div>
                                </div>

                                <div className="about__info-item">
                                    <div className="title title_fz18 about__main-info">{languages.telegram}</div>
                                    <Link to='https://t.me/MarikParrish' className="about__info-descr">@marikparrish</Link>
                                </div>

                            </div>
                        </div>

                        <div className="about__skills">
                            <h3 className="title title_fz18 about__main">{languages.skills}</h3>
                            <div className="about__info">

                                {mySkills.map((item, i) => {
                                    return (
                                        <div key={i} className="about__info-item">
                                            <div className="title title_fz18 about__main-info">{item.name}</div>
                                            <div className="about__info-bar">
                                                <div style={{width:item.counter + '%'}}><span className="counter">{item.counter}%</span></div>
                                            </div>
                                        </div>
                                    )
                                })}

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;