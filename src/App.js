import logo from './logo.svg';
import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Product from './components/Products/Product';
import Navbar from './components/Navbar';
import SearchComponent from './components/Products/SearchComponent';
import useInternet from './useInternet';
import Parent from './Parent'

function App() {
  // cretaing routes
let internetStauts=useInternet();

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
      <Parent/>

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
        <h1>{internetStauts?"You are online":"you are offline"}</h1>
    </div>
  );
}

export default App;
