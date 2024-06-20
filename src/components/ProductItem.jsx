import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {add,remove} from '../redux/slices/CartSlice';
import { toast } from 'react-hot-toast';

const ProductItem = ({item}) => {
    const {cart}=useSelector((state)=>state)
    const dispatch=useDispatch();

    const addToCart=()=>{
        dispatch(add(item))
        toast.success("Item added to cart");
    }
    const removeFromCart=()=>{
        dispatch(remove(item.id))
        toast.error("Item removed from cart");
    }

  return (
      <div className="flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024]">
        <p className="text-gray-700 font-bold text-lg text-left truncate w-40 mt-1 tracking-wider">{item.title}</p>
        <p className="w-40 text-gray-400 font-normal text-[10px] text-left">{item.description.split(" ").slice(0,10).join(" ")+"...."}</p>
        <div className='h-[180px]'>
          <img src={item.image} className='w-full h-full'/>
        </div>
        <div className="flex justify-between gap-12 items-center w-full mt-5">
            <p className="text-green-600 font-bold">${item.price}</p>
            {
                cart.some((p)=>p.id==item.id)?
                (<button onClick={removeFromCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-bold 
                text-[12px] p-1 px-3 uppercase 
                hover:bg-gray-700
                hover:text-white transition duration-300 ease-in">
                    Remove item
                </button>):
                (<button onClick={addToCart} className="text-gray-700 border-2 border-gray-700 rounded-full font-bold 
                text-[12px] p-1 px-3 uppercase 
                hover:bg-gray-700
                hover:text-white transition duration-300 ease-in">
                    Add to Cart
                </button>)
            }
        </div>
    </div>
  )
}

export default ProductItem
