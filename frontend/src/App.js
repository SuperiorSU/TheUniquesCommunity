import './App.css';
import Foot from './components/about/Foot';
import CommGuide from './pages/CommGuide';
import  { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/about/Navbar';
import Clubs from './pages/Clubs';
import About from './pages/About';
import Leadpage from './pages/Leadpage';
function App() {
 const Layout = () => {
    return (
      <div>
        <Navbar />
        <Outlet />
        <Foot />
      </div>
    )
  }

  const router = createBrowserRouter([
    
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            path: '/',
            element: <About/>
          },
          {
            path: '/clubs',
            element: <Clubs/>
          
          },
          {
            path: '/communityguidelines',
            element: <CommGuide />
          },
          {
            path: '/leads',
            element: <Leadpage/>
          }
        ]
      }
    ]
  )
 
  
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
