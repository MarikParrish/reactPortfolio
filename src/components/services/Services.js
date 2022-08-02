import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComments, faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';

import languages from '../languages/Languages';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './services.scss';
import './services-media.scss';
const Services = ({lang}) => {

    const settings = {
        arrows:false,
        slidesToShow:2,
        responsive:[
            {
                breakpoint:1000,
                settings:{
                    slidesToShow:1,
                    // swipeToSlide:true,
                    dots:true,
                    dotsClass:'slick-dots services__dots',
                }
            }
        ]
    }

    languages.setLanguage(lang);

    return (
        <>
            <section className="services">
                <div className="services__overlay"></div>
                <div className="container">
                    <h2 className="title title_main services__title lng-services__title">{languages.services__title}</h2>
                    <div className="title title_subtitle services__subtitle lng-services__subtitle">{languages.services__subtitle}</div>
                    <Slider {...settings} className="services__wrapper">
                        <div className="services__item">
                            <div className="services__item-icon">
                                <FontAwesomeIcon icon={faLaptopCode}/>
                            </div>
                            <div className="services__item-title lng-web">{languages.web}</div>
                            <div className="services__item-descr lng-web_descr">
                                {languages.web_descr}
                            </div>
                        </div>

                        <div className="services__item">
                            <div className="services__item-icon">
                                <FontAwesomeIcon icon={faComments}/>
                            </div>
                            <div className="services__item-title lng-consult">{languages.consult}</div>
                            <div className="services__item-descr lng-consult_descr">
                                {languages.consult_descr}
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    )
}

export default Services;