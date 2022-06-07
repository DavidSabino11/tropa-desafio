import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';

function Routess(){
    return (
        <BrowserRouter>
            <Routes>
             <Route path="/" element={<Login></Login>} />
            <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routess;