import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Suspense,lazy } from 'react';
const MainLayout = lazy(() => import('../mainlayout/MainLayout'));
const Home = lazy(() => import('../pages/Home'));
const ErrorPage = lazy(() => import('../pages/ErrorPage'));
const ContactForm = lazy(() => import('../pages/Contact'));
const Resume = lazy(() => import('../pages/Resume'));
const About = lazy(() => import('../pages/About'));
const Service = lazy(() => import('../pages/Service'));
const Projects = lazy(() => import('../pages/Projectpage'));

const routes=createBrowserRouter([{
    path:"/",
    element:(
        <Suspense fallback={<div>Loading...</div>}>
             <MainLayout />
        </Suspense>
    ),
    children:[
        {
            path:"/",
            element:(
            <Suspense fallback={<div>Loading...</div>}>
               <Home />
            </Suspense>
        )
        },
        {
            path:"/contact",
            element:(
                <Suspense fallback={<div>Loading...</div>}>
                    <ContactForm />
                </Suspense>
            )
        },
        {
            path:"/resume",
            element:(
                <Suspense fallback={<div>Loading...</div>}>
                    <Resume />
                </Suspense>
            )
        },
        {
            path:"/about",
            element:(
                <Suspense fallback={<div>Loading...</div>}>
                    <About />
                </Suspense>
            )
        },
        {
            path:"/services",
            element:(
                <Suspense fallback={<div>Loading...</div>}>
                    <Service />
                </Suspense>
            )
        },
        {
            path:"/projects",
            element:(
                <Suspense fallback={<div>Loading...</div>}>
                    <Projects />
                </Suspense>
            )
        },

        {
            path:"*",
            element:(
                <Suspense fallback={<div>Loading...</div>}>
                    <ErrorPage />
                </Suspense>
            ),
        }
    ],


}])

const Root = () => {
  return (
    <div>
       <RouterProvider router={routes}></RouterProvider>
    </div>
  )
}

export default Root
