
import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import Home from '../pages/Home/home';
import About from '../pages/About/about';
import Empresa from '../pages/Empresa/empresa';
import { dataEmpresas } from '../data/dataEmpresas';

const Routes = () => {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/*' element={<Home />} />
                <Route path='/about' element={<About />} />
                {dataEmpresas.map((data, index) => (
                    <Route
                        key={index}
                        path={data.link}
                        element={<Empresa {...data} />}
                    />
                ))}
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;