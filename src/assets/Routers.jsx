
import App from '../App'
import CourseSection from './components/CourseSection'
import GetStartedBtn from './components/GetstartedBtn'
import Pricing from './components/Pricing'
import Resources from './components/Resources'
import Services from './components/Services'
import Home from './pages/Home'
// import NotFound from './pages/Notfound'

import { createBrowserRouter } from 'react-router'
import PreviewPlatform from './pages/PreviewPlatform'


export const Routers = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />
            },
            {
                path: "/services",
                element: <Services  />
            },
            {
                path: "/courses",
                element: <CourseSection  />
            },
            {
                path: "/pricing",
                element: <Pricing  />
            },
            {
                path: "/resources",
                element: <Resources  />
            },
            {
                path: "/getstarted",
                element: <GetStartedBtn />
            },
            {
                path: "/preview",
                element: <PreviewPlatform />
            }

            // {
            //     path: "*",
            //     element: <NotFound />
            // }
        ]
    }
])