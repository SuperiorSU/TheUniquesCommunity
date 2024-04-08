import './App.css';
import Foot from './components/about/Foot';
import CommGuide from './pages/CommGuide';
import  { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Navbar from './components/about/Navbar';
import Clubs from './pages/Clubs';
import About from './pages/About';
import Leadpage from './pages/Leadpage';
import Ambassador from './pages/Ambassador';
import MemberRequests from './pages/MemberRequests';
import EventForm from './pages/EventForm';
import EventList from './pages/EventList';
import Event from './pages/Event';
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
          },
          {
            path:'/campus-ambassador',
            element:<Ambassador/>
          },
          {
            path:'/campus-ambassador/member-request',
            element:<MemberRequests/>
          },
          {
            path:'/campus-ambassador/create-event',
            element:<EventForm/>
          },
          {
            path:'/campus-ambassador/event-list',
            element:<EventList/>
          },
          {
            path:'/campus-ambassador/event',
            element:<Event/>
          },
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
