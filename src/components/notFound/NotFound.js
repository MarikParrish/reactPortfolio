import { Link } from 'react-router-dom'


import '../promo/promo.scss'
import './notfound.scss'
import '../promo/promo-media.scss'

const NotFound = () => {
    return (
        <section id="up" className="promo">
            <div className="promo__overlay">

                <div className="promo__content">
                    <h1 className="notfound__title">Page not found</h1>
                    <h2 className="notfound__error">404</h2>
                    <Link to="/" className="notfound__return">Return to main page</Link>
                </div>
            </div>
        </section>
    )
}

export default NotFound;