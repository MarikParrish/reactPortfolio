import { useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowUp } from '@fortawesome/free-solid-svg-icons';
import './pageup.scss';


const Pageup = () => {

    const [screen, setScreen] = useState(false);



    useEffect(() => {
        document.addEventListener('scroll', () => {
            let posTop = window.pageYOffset;
            if (posTop > 1200 && window.screen.width >= 1128) {
                setScreen(true);
            } else {
                setScreen(false);
            }
        })
    }, [])


    return (
        <>
            <CSSTransition in={screen} timeout={200} classNames="pageup__animation" unmountOnExit>
                <a href="#up" className="pageup">
                    <FontAwesomeIcon icon={faLongArrowUp} />
                </a>
            </CSSTransition>
        </>
    )
}

export default Pageup;