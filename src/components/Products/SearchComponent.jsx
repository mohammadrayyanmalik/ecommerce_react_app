import React, { useState } from 'react'
import Navbar from '../Navbar'
import Product from './Product'

function SearchComponent() {
    let [searchQuery,setSearchQuery]=useState('');

    const handleSearchQuery=(queryFromNavbar)=>{
        setSearchQuery(queryFromNavbar);
        console.log("New Query From Now Bar::::::",searchQuery)
    }
  return (
    <div>
        <Navbar handleSearchQuery={handleSearchQuery}/>
        <Product queryFromNavbar={searchQuery}/>
    </div>
  )
}

export default SearchComponent