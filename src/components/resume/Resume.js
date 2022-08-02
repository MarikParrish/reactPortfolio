
import languages from '../languages/Languages';

import './resume.scss';
import './resume-media.scss'

const Resume = ({ lang }) => {

    languages.setLanguage(lang);

    return (
        <>
            <section className="resume">
                <div className="container">
                    <h2 className="title title_main resume__title lng-resume__title">{languages.resume__title}</h2>
                    <div className="title title_subtitle resume__subtitle lng-resume__subtitle">{languages.resume__subtitle}</div>
                    <div className="title_main resume__education lng-resume__education">{languages.resume__education}</div>

                    <div className="resume__wrapper">

                        <div className="resume__block">
                            <div className="resume__item resume__formation">
                                <div className="resume__item-degree lng-udemy">{languages.udemy}</div>
                                <div className="resume__item-data lng-udemy_data">{languages.udemy_data}</div>
                            </div>

                            <div className="resume__item">
                                <div className="resume__item-icon">
                                    <i className="fa fa-graduation-cap"></i>
                                </div>
                            </div>

                            <div className="resume__item resume__line">
                                <div className="resume__item-title lng-udemy_info">{languages.udemy_info}</div>
                                <div className="resume__item-divider"></div>
                                <div className="resume__item-descr lng-udemy_descr">{languages.udemy_descr}</div>
                            </div>
                        </div>

                        <div className="resume__block">
                            <div className="resume__item resume__formation">
                                <div className="resume__item-degree lng-univer">{languages.univer}</div>
                                <div className="resume__item-data lng-univer_data">{languages.univer_data}</div>
                            </div>

                            <div className="resume__item">
                                <div className="resume__item-icon">
                                    <i className="fa fa-graduation-cap"></i>
                                </div>
                            </div>

                            <div className="resume__item resume__line">
                                <div className="resume__item-title lng-univer_info">{languages.univer_info}</div>
                                <div className="resume__item-divider"></div>
                                <div className="resume__item-descr lng-univer_descr">{languages.univer_descr}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume;