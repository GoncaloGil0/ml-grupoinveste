
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import Home from '../pages/home';

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' element={<Home />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;