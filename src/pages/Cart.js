import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import CartItem from '../components/CartItem';

const Cart = () => {
    const {cart}=useSelector((state)=>state);
    const [totalAmount, setTotalAmount]=useState(0);

    useEffect(()=>{
        setTotalAmount(cart.reduce((acc,curr)=> acc + curr.price,0));
    },[cart])

  return (
    <div>
      {
        cart.length > 0?
        (<div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center'>
            <div className='w-[100%] md:w-[60%] flex flex-col p-2'>
                {
                    cart.map((item)=>(
                        <CartItem key={item.id} item={item}/>
                    ))
                }
            </div>
            <div className='w-[100%] md:w-[40%] mt-5  flex flex-col '>
                <div className='flex flex-col p-5 gap-5 my-14  h-[100%] justify-between'>
                    <div className='flex flex-col gap-5'>
                        <p className='font-semibold text-xl text-green-800 '>Your Cart</p>
                        <p className='font-semibold text-5xl text-green-700 -mt-5'>Summary</p>
                        <p className='text-xl font-semibold'><span>Total Items:{cart.length}</span></p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-xl font-semibold'>Total Amount: ${totalAmount}</p>
                        <button className='bg-green-700 hover:bg-purple-50 rounded-lg text-white  transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl'>
                            checkout now
                        </button>
                    </div>
                </div>
            </div>
        </div>):
        (<div className='flex flex-col justify-center items-center min-h-[80vh]'>
            <p className=' font-bold text-xl text-gray-700 mb-2 tracking-wide'>Your Cart Is Empty!</p>
            <NavLink to="/">
                <button className='bg-green-600 hover:bg-purple-50 rounded-lg text-white  transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 px-10 tracking-wider uppercase'>
                    Shop Now
                </button>
            </NavLink>
        </div>)
      }
    </div>
  )
}

export default Cart
