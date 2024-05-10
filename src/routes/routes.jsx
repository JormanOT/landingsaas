import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx'
import Login from '../container/Dashboard/Login.jsx';
import Header from '../container/Dashboard/modules/Header.jsx';
import Company from '../container/Dashboard/modules/Company.jsx';
import Services from '../container/Dashboard/modules/Services.jsx'


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/auth',
        element: <Login />
    },
    {
        path: '/dashboard',
        element: <Header />
    },
    {
        path: '/information',
        element: <Company />
    },
    {
        path: '/services',
        element: <Services />
    },
]);

export default routes;