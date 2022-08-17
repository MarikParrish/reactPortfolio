import { useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons';

import languages from '../languages/Languages';


import './promo.scss'
import './promo-media.scss'
import { Helmet } from 'react-helmet';

const Promo = ({onLang, lang}) => {

    const btns = [
        { value: 'ru', class: 'promo__change_lang-ru promo__change_lang-active', text: 'Ru' },
        { value: 'ua', class: 'promo__change_lang-ua', text: 'Ua' },
        { value: 'en', class: 'promo__change_lang-en', text: 'En' }
    ]

    const btnRefs = useRef([]);

    const onChangeLang = (id, value) => {
        btnRefs.current.forEach(item => item.classList.remove('promo__change_lang-active'));
        btnRefs.current[id].classList.add('promo__change_lang-active');
        onLang(value);
        localStorage.setItem('localLanguage', value);
    }

    languages.setLanguage(lang);

    useEffect(()=>{
        for(let i = 0; i<btnRefs.current.length; i++){
            if(localStorage.getItem('localLanguage') === btnRefs.current[i].value){
                btnRefs.current.forEach(item=>item.classList.remove('promo__change_lang-active'));
                btnRefs.current[i].classList.add('promo__change_lang-active');
            }
        }
    },[])
    
    
return (
    <section id="up" className="promo">
        <Helmet>
            <title>{languages.title}</title>
        </Helmet>
        <div className="promo__overlay">
            <div className="promo__change_lang">
                {/* <button value="ru" className="promo__change_lang-ru promo__change_lang-active">Ru</button>
                    <button value="ua" className="promo__change_lang-ua">Ua</button>
                    <button value="en" className="promo__change_lang-en">En</button> */}
                {btns.map((item, i) => {
                    return <button onClick={() => onChangeLang(i, item.value)} ref={el => btnRefs.current[i] = el} key={i} value={item.value} className={item.class}>{item.text}</button>
                })}
            </div>

            <div className="promo__content">
                <h2 className="title promo__title">{languages.promo__title}</h2>
                <h1 className="title promo__subtitle">{languages.promo__subtitle}</h1>
                <div className="title promo__info">{languages.promo__info}</div>
                <a href="#about" className="promo__btn">{languages.promo__btn}</a>

                <div className="promo__icons">
                    <a rel="noopener noreferrer" target='_blank' href="https://www.instagram.com/marikparrish/"><FontAwesomeIcon icon={faInstagram} /></a>

                    <a rel="noopener noreferrer" target='_blank' href="https://www.linkedin.com/in/igor-pryimak-983b76221/"><FontAwesomeIcon icon={faLinkedin} /></a>

                    <a rel="noopener noreferrer" target='_blank' href="https://github.com/MarikParrish"><FontAwesomeIcon icon={faSquareGithub} /></a>
                </div>
            </div>
        </div>
    </section>
)
}

export default Promo;