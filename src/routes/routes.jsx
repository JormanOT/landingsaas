import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx'
import Login from '../container/Dashboard/Login.jsx';
import Header from '../container/Dashboard/modules/Header.jsx';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/dashboard',
        element: <Header />
    },
    {
        path: '/auth',
        element: <Login />
    }
]);

export default routes;