
import App from '../App'
import Services from './components/Services'
import Home from './pages/Home'
// import NotFound from './pages/Notfound'

import { createBrowserRouter } from 'react-router'


export const Routers = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },{
                path: "/services",
                element: <Services  />
            },

            // {
            //     path: "*",
            //     element: <NotFound />
            // }
        ]
    }
])