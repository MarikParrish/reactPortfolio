import { useState } from 'react';

import './app.scss';
import '../../style/base/_fonts.scss';
import '../../style/base/_title.scss';
import '../../style/base/_media.scss';
import '../../style/libs/_bootstrap-reboot.min.scss';

import Promo from '../promo/Promo';
import About from '../about/About';
import Resume from '../resume/Resume';
import Portfolio from '../portfolio/Portfolio'
import Services from '../services/Services';
import Pageup from '../pageup/Pageup';

function App() {

    const [lang, setLang] = useState(localStorage.getItem('localLanguage') !== null ? localStorage.getItem('localLanguage') : 'ru');

    const onChangeLang = (lang) => {
        setLang(lang);
    }

    return (
        <>
            <Promo onLang={onChangeLang} lang={lang}/>
            <About lang={lang}/>
            <Resume lang={lang}/>
            <Portfolio lang={lang}/>
            <Services lang={lang}/>
            <Pageup/>
        </>
    )
}

export default App;
