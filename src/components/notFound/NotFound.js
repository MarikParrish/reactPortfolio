import { Link } from 'react-router-dom'


import '../promo/promo.scss'
import '../promo/promo-media.scss'

const NotFound = () => {
    return (
        <section id="up" className="promo">
            <div className="promo__overlay">

                <div className="promo__content">
                    <h2 className="title promo__title">404</h2>
                    <h1 className="title promo__subtitle">Page not found</h1>
                    <Link to="/" className="title promo__back">Return to main page</Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound;