import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import Home from '../pages/Home/home';
import About from '../pages/About/about';
import Empresa, { empresaDataInterface } from '../pages/Empresa/empresa';
import { dataEmpresas } from '../data/dataEmpresas';
import { useEffect, useState } from 'react';
import EmpresaHome from '../pages/EmpresaHome/empresaHome';
import Offer from '../pages/Offer/offer';

const Routes = () => {
    const [data, setData] = useState<empresaDataInterface[]>([]);

    useEffect(() => {
        setData(dataEmpresas);
    }, []); 

    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/companies' element={<EmpresaHome data={data} />} />
                <Route path='/offer' element={<Offer />} />
                {data.map((empresa, index) => (
                    <Route
                        key={index}
                        path={empresa.link}
                        element={<Empresa {...empresa} />}
                    />
                ))}
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
