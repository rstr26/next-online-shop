'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const Navbar = ({ brand }: { brand: string }) => {

    const { scrollY } = useScroll()
    const threshold = 20 // show navbar on scroll up sensitivity threshold
    const [hidden, setHidden] = useState(false)
    
    // scroll event listener for navbar visibility
    useMotionValueEvent(scrollY, 'change', (val) => {
        const prev = scrollY.getPrevious()
        
        if (prev) {
            const scrollDifference = prev - val;
            
            // show navbar if its almost at the top
            if(val < 50) setHidden(false) 
            
            // show navbar on scrolling up
            if (scrollDifference > threshold) {
                setHidden(false) 
            } 
            // instantly hide navbar on scrolling down if its already 50 units below
            else if ((val > 50) && (val > prev)) {
                setHidden(true) 
            }
        }
    })
    

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: '-100%' }
            }}
            transition={{ ease: 'easeInOut' }}
            animate={hidden ? 'hidden' : 'visible'}
            className="navbar fixed glass z-[100]"
        >
            {/* Brand Name */}
            <div className="flex-1">
                <a className="text-xl mr-7">{brand}</a>
                
                <div className='hidden lg:block'>
                <div className='flex gap-7'>
                    <h3><a className='btn btn-ghost' href="">Home</a></h3>
                    <h3><a className='btn btn-ghost' href="">All Products</a></h3>
                    <h3><a className='btn btn-ghost' href="">About</a></h3>
                    <h3><a className='btn btn-ghost' href="">Blog</a></h3>
                </div>
                </div>
            </div>


            {/* Cart and Profile Avatar */}
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                    <div className="indicator">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor">
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="badge badge-sm indicator-item">8</span>
                    </div>
                </div>
                <div
                    tabIndex={0}
                    className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                    <div className="card-body">
                    <span className="text-lg font-bold">8 Items</span>
                    <span className="text-info">Subtotal: $999</span>
                    <div className="card-actions">
                        <button className="btn btn-primary btn-block">View cart</button>
                    </div>
                    </div>
                </div>
                </div>
                <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                    <img
                        alt="Avatar"
                        src="/user.png" 
                    />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                    {/* <li><a>Profile</a></li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li> */}
                    <li><Link href='/login'>Login</Link></li>
                </ul>
                </div>
            </div>
        </motion.nav>
    )
}

export default Navbar