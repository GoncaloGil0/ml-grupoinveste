
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import Home from '../pages/Home/home';
import About from '../pages/About/about';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/*' element={<Home />} />
                <Route path='/about' element={<About />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;