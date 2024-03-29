import React, { useEffect } from 'react'
import { publicRoutes } from '../public/publicRoute'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCartItems } from '../redux/actions/publicActions'
import { invalidate } from '../redux/slices/publicSlice'
import { toast } from 'react-toastify'

const Navbar = () => {
    const dispatch = useDispatch()
    const { cart, cartAdded } = useSelector(state => state.public)
    useEffect(() => {
        dispatch(getCartItems())
    }, [])
    useEffect(() => {
        if (cartAdded) {
            dispatch(getCartItems())
            toast.success("Product Add success")
            dispatch(invalidate())
        }
    }, [cartAdded])
    return <>
        <div className="navbar bg-base-100 gap-8">
            <div className="">
                <a className="btn btn-ghost normal-case text-xl">Shopy</a>
            </div>
            <div className="gap-4 w-full ">
                <div className="form-control w-full">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                            <span className="badge badge-sm indicator-item">
                                {cart && cart.length}
                            </span>
                        </div>
                    </label>
                    <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                        <div className="card-body">
                            <span className="font-bold text-lg">{cart && cart.length}</span>
                            <span className="text-info">Subtotal: $ 
                            </span>
                            <div className="card-actions">
                                <button className="btn btn-primary btn-block">View cart</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://images.unsplash.com/photo-1612021470627-ca1cb2d2ee92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlsZGVyfGVufDB8fDB8fHww&w=1000&q=80" />
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="bg-slate-700 p-4 flex justify-evenly">
            {
                publicRoutes.map(({ path, show, label }) => show &&
                    <Link to={path}>{label}</Link>)
            }
        </div>
    </>
}

export default Navbar