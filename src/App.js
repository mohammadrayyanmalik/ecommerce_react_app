import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Product from './components/Products/Product';
import Navbar from './components/Navbar';

function App() {
  // cretaing routes
  const routs=createBrowserRouter([
    {
      path:"/products",
      element:<>
      <Navbar/>
      <Product/>
      </>
    },
    {
      path:"/",
      element:<>
      <Navbar/>
      </>
    }
  ])

  return (
    <div>
        <RouterProvider router={routs}/>
    </div>
  );
}

export default App;
