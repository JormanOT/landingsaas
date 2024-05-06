import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx'
import Dashboard from '../container/Dashboard/Dashboard.jsx';
import Login from '../container/Dashboard/Login.jsx';

const token = localStorage.getItem('auth');

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/dashboard',
        element: token === 'undefined' ? <Dashboard /> : <Login />
    }
]);

export default routes;