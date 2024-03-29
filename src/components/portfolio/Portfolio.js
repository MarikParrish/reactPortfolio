import { useState, useRef, useEffect } from 'react';

import clouds from './img/clouds.jpg';
import games from './img/games.jpg';
import lighthouse from './img/lighthouse.jpg';
import wordpress from './img/wordpress.jpg';
import pulse from './img/pulse.jpg';
import uberx from './img/uberx.jpg';
import languages from '../languages/Languages';

import './portfolio.scss';
import './portfolio-media.scss';

const Portfolio = ({ lang }) => {


    const [screenWidth, setScreenWidth] = useState(window.screen.width);


    const firstRow = [
        { name: 'UberX', descr: 'Web Design', img: uberx, link: './uberx/index.html' },
        { name: 'Wordpress', descr: 'Web Design', img: wordpress, link: './wordpress/index.html' },
        { name: 'Games', descr: 'Web Design', img: games, link: './games/index.html' },
    ];

    const secondRow = [
        { name: 'Pulse', descr: 'Web Design', img: pulse, link: './pulse/index.html' },
        { name: 'BlueRex (React)', descr: 'Web Design', img: clouds, link: 'https://marikparrish.github.io/bluerex/' },
        { name: 'Coming Soon', descr: 'Web Design', img: lighthouse, link: '#' },
    ]


    languages.setLanguage(lang);

    const overlayFirstRefs = useRef([]);
    const overlaySecondRefs = useRef([]);

    const updateWidth = () => {
        setScreenWidth(window.screen.width);
    }

    useEffect(() => {
        overlayFirstRefs.current.forEach(item => {

            item.addEventListener('mouseover', () => {
                if (screenWidth > 1023)
                    item.children[0].classList.add('portfolio__item-block-active');
            })

            item.addEventListener('mouseout', () => {
                if (screenWidth > 1023)
                    item.children[0].classList.remove('portfolio__item-block-active');
            })
        })

        overlaySecondRefs.current.forEach(item => {
            item.addEventListener('mouseover', () => {
                if (screenWidth > 1023)
                    item.children[0].classList.add('portfolio__item-block-active');
            })

            item.addEventListener('mouseout', () => {
                if (screenWidth > 1023)
                    item.children[0].classList.remove('portfolio__item-block-active');
            })
        })

        window.addEventListener('resize', updateWidth);

    }, [screenWidth, lang])

    const FirstRow = () => {
        return (
            firstRow.map((item, i) => {
                return (
                    <a rel="noopener noreferrer" target='_blank' key={i} href={item.link} onClick={(e) => item.link === "#" ? e.preventDefault() : null} className="portfolio__item">
                        <div ref={el => overlayFirstRefs.current[i] = el} className="portfolio__item-overlay">
                            <div className={screenWidth > 1023 ? 'portfolio__item-block' : 'portfolio__item-block portfolio__item-block-active'}>
                                <div className="portfolio__item-text">{item.name}</div>
                                <div className="portfolio__item-descr">{item.descr}</div>
                            </div>
                        </div>

                        <div className="portfolio__item-img">
                            <img src={item.img} alt={item.name} />
                        </div>
                    </a>
                )
            })
        )
    }

    const SecondRow = () => {
        return (
            secondRow.map((item, i) => {
                return (
                    <a rel="noopener noreferrer" target='_blank' key={i} href={item.link} onClick={(e) => item.link === "#" ? e.preventDefault() : null} className="portfolio__item">
                        <div ref={el => overlaySecondRefs.current[i] = el} className="portfolio__item-overlay">
                            <div className={screenWidth > 1023 ? 'portfolio__item-block' : 'portfolio__item-block portfolio__item-block-active'}>
                                <div className="portfolio__item-text">{item.name}</div>
                                <div className="portfolio__item-descr">{item.descr}</div>
                            </div>
                        </div>

                        <div className="portfolio__item-img">
                            <img src={item.img} alt={item.name} />
                        </div>
                    </a>
                )
            })
        )
    }


    return (
        <>
            <section className="portfolio">
                <div className="container">
                    <h2 className="title title_main portfolio__title">{languages.portfolio__title}</h2>
                    <div className="title title_subtitle portfolio__subtitle">{languages.portfolio__subtitle}</div>
                    <div className="portfolio__wrapper">
                        <div className="portfolio__row-first">
                            <FirstRow />
                        </div>
                        <div className="portfolio__row-second">
                            <SecondRow />
                        </div>
                    </div>
                </div>
            </section>
            <div className="gray"></div>
        </>
    )
}

export default Portfolio;