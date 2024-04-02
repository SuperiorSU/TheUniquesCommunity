import './App.css';
import Foot from './components/about/Foot';
import Hero from './components/about/Hero';
import  { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/about/Navbar';
import Clubs from './pages/Clubs';
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
            element: <Hero />
          },
          {
            path: '/clubs',
            element: <Clubs/>
          
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
