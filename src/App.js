import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Product from './components/Products/Product';
import Navbar from './components/Navbar';
import SearchComponent from './components/Products/SearchComponent';

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
    },
    {
      path:"search-products",
      element:<>
      <SearchComponent/>
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
