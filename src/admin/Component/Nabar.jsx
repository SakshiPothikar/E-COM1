import React from 'react'

const Navbar = () => {
    return <>
        <div className="navbar bg-base-100 fixed top-0 ml-72 flex-wrap">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">DaisyUI</a>
            </div>
            <div className="">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Link</a></li>
                    <li>
                        <details>
                            <summary>
                                Parent
                            </summary>
                            <ul className="p-2 bg-base-100">
                                <li><a>Link 1</a></li>
                                <li><a>Link 2</a></li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </div>
        </div>
    </>
}

export default Navbar