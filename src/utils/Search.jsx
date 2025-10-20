import React, { useState } from 'react';

const Search = () => {

    let [search,setSearch] = useState('');
      let [searchResult, setSearchResult] = useState(null);

    let searchHandler = (e) => {
        setSearch(e.target.value)

        fetch(`https://dummyjson.com/products/search?q=${search}`)
        .then(res => res.json())
        .then((data)=>setSearchResult(data.products));
        console.log(searchResult);
        

        
    }

    return (
        <div className='fixed backdrop-blur-lg w-[100%] h-full top-0'>
             <div className="search-header  flex justify-center p-5">
                <input onChange={(e)=>{searchHandler(e)}} type="search" className='border-0  outline-0 border-b-3 min-w-xl border-b-green-300 pb-3' placeholder="search product" />
             </div>
             <div className="search-body">
                <div className="container">
                     <h1 className='text-3xl text-gren-gray-scale-500 capitalize font-bold'>Search Results</h1>

                     <div className="grid lg:grid-cols-8 gap-5 mt-5">
                       
                    

                        <div className='bg-white shadow-lg col-span-2 p-5 rounded'>
                            <h4 className='text-2xl font-light'>Product Title</h4>
                            <img src="https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp" alt="product image" />
                            <p>comment</p>
                            <b> $ price</b>
                        </div>

                        
                     </div>
                </div>
             </div>
        </div>
    );
};

export default Search;