import React, { useEffect, useState } from 'react'
import useDymanicForm from '../../Hooks/UseDynamicForm'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, deleteProduct, getProduct, updateProduct } from '../../redux/actions/adminActions'
import { invalidate } from '../../redux/slices/adminSlice'
import { ToastContainer, toast } from 'react-toastify'

const Products = () => {
    const callAction = useDispatch()

    const handleSubmit = e => {
        callAction(addProduct(state))
    }
    const config = [
        { fieldName: "name", type: "text" },
        { fieldName: "image", type: "text" },
        { fieldName: "price", type: "number" },
        { fieldName: "sizes", type: "checkbox", options: ["sm", "md", "lg"] },
        { fieldName: "color", type: "checkbox", options: ["red", "blue", "yellow"] },
        { fieldName: "brand", type: "text" },
        { fieldName: "Add Product", type: "submit", onClick: handleSubmit },
    ]
    const [ui, state, pre] = useDymanicForm(config)
    const { productAdd, productDeleted, productUpdated } = useSelector(state => state.admin)
    useEffect(() => {
        callAction(getProduct())
        callAction(invalidate())
    }, [productAdd, productDeleted, productUpdated])
    useEffect(() => {
        if (productAdd) {
            toast.success("Product Add Success")
        }
    }, [productAdd])
    useEffect(() => {
        if (productDeleted) {
            toast.success("Product Delete Success")
        }
    }, [productDeleted])

    useEffect(() => {
        if (updateProduct) {
            toast.success("Product Delete Success")
        }
    }, [updateProduct])
    return <>
        <div className='text-right'>
            <button className="btn" onClick={() => window.my_modal_3.showModal()}>+ Add Model</button>
        </div>
        <dialog id="my_modal_3" className="modal">
            <form method="dialog" className="modal-box">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                <div className='mt-8'>

                    {ui}
                </div>
            </form>
        </dialog>
        <ProductTable />
    </>
}
const ProductTable = () => {
    // const PRODUCTS = [
    //     {
    //         name: "Branded Skill  Shoe",
    //         image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    //         price: 1499,
    //         sizes: ["sm", "md"],
    //         color: ["red", "yellow, green"],
    //         brand: "SkillHub",
    //     },
    //     {
    //         name: "Branded Hub Shoe",
    //         image: "https://plus.unsplash.com/premium_photo-1682435561654-20d84cef00eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=718&q=80",
    //         price: 1499,
    //         sizes: ["sm", "md"],
    //         color: ["red", "yellow, green"],
    //         brand: "SkillHub",
    //     },
    //     {
    //         name: "Branded SkillHub Shoe",
    //         image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    //         price: 1499,
    //         sizes: ["sm", "md"],
    //         color: ["red", "yellow, green"],
    //         brand: "SkillHub",
    //     }
    // ]
    const { products } = useSelector(state => state.admin)
    const callAction = useDispatch()
    const [selectedProduct, setselectedProduct] = useState()

    const handleChange = e => {
        const { value, name, checked, type } = e.target
        if (type === "checkbox") {
            checked
                ? setselectedProduct({
                    ...selectedProduct,
                    [name]: selectedProduct[name] ? [...selectedProduct[name], value] : [value]
                })
                : setselectedProduct({
                    ...selectedProduct,
                    [name]: selectedProduct[name].filter(item => item !== value)
                })

        } else {
            setselectedProduct({ ...selectedProduct, [name]: value })
        }
    }
    const handleupdate = e => {
        callAction(updateProduct(selectedProduct))
    }
    return <>

        <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Brand</th>
                        <th>Color</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.map(item => {
                            return selectedProduct && selectedProduct.id === item.id
                                ? <>
                                    <tr>
                                        <td> <input name='image' onChange={handleChange} type="text" value={selectedProduct.image} /></td>
                                        <td> <input name='name' onChange={handleChange} type="text" value={selectedProduct.name} /></td>
                                        <td> <input name='price' onChange={handleChange} type="text" value={selectedProduct.price} /></td>
                                        <td>
                                            {
                                                selectedProduct.sizes.map(s => <div>
                                                    <input name='sizes' onChange={handleChange} type="checkbox" id='s' value={s} />
                                                    <label htmlFor={s}>{s}</label>
                                                </div>)
                                            }
                                        </td>
                                        <td>
                                            <input name='brand' onChange={handleChange} type="text" value={item.brand} />
                                        </td>
                                        <td>
                                            {
                                                selectedProduct.color.map(s => <div>
                                                    <input name='color' onChange={handleChange} type="checkbox" id='s' value={s} />
                                                    <label htmlFor={s}>{s}</label>
                                                </div>)
                                            }
                                        </td>
                                        <td>
                                            <button onClick={handleupdate} className='btn btn-warning'>Update</button>
                                        </td>
                                    </tr>
                                </>
                                : <>
                                    <tr key={item.name}>
                                        <td> <img src={item.image} className='w-24' alt="" /> </td>
                                        <td>{item.name}</td>
                                        <td>{item.price}</td>
                                        <td>{item.sizes.map(s => <span className='mx-1 badge bg-[primary]'>{s}</span>)}</td>
                                        <td>{item.brand}</td>
                                        <td className='flex gap-2'>{item.color.map(c => <div className={`w-4 h-4 border-2 border-slate-200 border-solid rounded-full bg-[${c}]`}></div>)}</td>
                                        <td>
                                            <button onClick={e => setselectedProduct(item)} className=" btn mx-1 btn-sm btn-warning" >Edit</button>
                                            <button className="btn mx-1 btn-sm btn-error"
                                                onClick={e => callAction(deleteProduct(item))}>Delete</button>
                                        </td>
                                    </tr></>
                        })
                    }

                </tbody>


            </table>
        </div>
    </>
}
export default Products