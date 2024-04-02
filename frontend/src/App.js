import './App.css';
import Foot from './components/about/Foot';
import Hero from './components/about/Hero';
import  { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/about/Navbar';
import Clubs from './pages/Clubs';
import About from './pages/About';
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
<<<<<<< HEAD
            element: <About/>
=======
            element:<About />
>>>>>>> ed110c3833ba9d01071a7e1fcd98243e47baf7d1
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
