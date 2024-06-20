import React from 'react'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item}) => {
    const dispatch=useDispatch();

    const removeFromCart=()=>{
        dispatch(remove(item.id))
        toast.error("Item removed from cart")
    }

  return (
    <div className='flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5'>
        <div className='w-[30%]'>
            <img src={item.image} alt='item-image'/>
        </div>
        <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
            <p className='text-xl text-slate-700 font-bold'>{item.title}</p>
            <p className=' text-slate-600 font-medium'>{item.description}</p>
            <div className='flex items-center justify-between'>
                <p className='font-bold text-lg text-green-600'>{item.price}</p>
                <button onClick={removeFromCart} className=' bg-red-200  hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3'>
                    <MdDelete className='text-2xl cursor-pointer hover:text-green-400 transition transform duration-200'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default CartItem
