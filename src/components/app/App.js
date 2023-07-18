import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './app.scss';
import '../../style/base/_fonts.scss';
import '../../style/base/_title.scss';
import '../../style/base/_media.scss';
import '../../style/libs/_bootstrap-reboot.min.scss';


import NotFound from '../notFound/NotFound';
import MainPage from '../mainPage/MainPage';

function App() {

    return (

        <Router>
            <Routes>
                <Route path='/' element={<MainPage/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </Router>
    )
}

export default App;
