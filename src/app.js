import React from 'react';
import ReactDOM from 'react-dom/client';
import Headers from './components/Headers';
import Body from './components/Body';
import About from './components/About';
import Contact from './components/Contact';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RestaurentCard from './components/RestaurentCard';





const AppLayout = () => {
  return (
    <div className="App">
      <Headers />
      <Body />
    </div>
  )
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />
  }, {
    path: "/about",
    element: <About />
  }, {
    path: "/contact",
    element: <Contact />
  }
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);



