import React from 'react'
import { useState,useEffect } from 'react';
import Spinner from '../components/Spinner';
import ProductItem from '../components/ProductItem';

const Home = () => {
    const API_URL = "https://fakestoreapi.com/products";
    const [loading, setLoading] = useState(false);
    const [items, setItems] = useState([]); 

    async function fetchProductItem(){
        setLoading(true);
        try{
            const res=await fetch(API_URL);
            const data=await res.json();
            setItems(data);
        }
        catch{
            console.log("error h kuch");
            setItems([]);
        }
        setLoading(false);
    }
    useEffect(()=>{
        fetchProductItem();
    },[])


  return (
    <div>
      {
        loading?
        (<Spinner/>):
        (
            items.length>0?
            (<div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
                {
                    items.map((item)=>(
                        <ProductItem key={item.id} item={item}/>
                    ))
                }
            </div>):
            (<div className="flex justify-center items-center">
                <p>No Data Found</p>
            </div>)
        )
      }
    </div>
  )
}

export default Home
