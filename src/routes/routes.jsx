import { createBrowserRouter } from 'react-router-dom';
import App from '../App.jsx'
import Dashboard from '../container/Dashboard/Dashboard.jsx';
import Login from '../container/Dashboard/Login.jsx';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />
    },
    {
        path: '/dashboard',
        element: <Dashboard />
    },
    {
        path: '/auth',
        element: <Login />
    }
]);

export default routes;