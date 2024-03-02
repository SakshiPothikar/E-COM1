import React from 'react'
import { MdDelete, MdEditSquare } from 'react-icons/md'

const Order = () => {

    return <>
        <OrderTable />
    </>

}
const OrderTable = () => {
    const ORDERS = [
        {
            id: "11",
            products: [
                { name: "fake shoe", qty: 1 },
                { name: "new fake shoe", qty: 2 }
            ],
            amount: 24000,
            user: "ross",
            status: "dispatch"
        },
        {
            id: "12",
            products: [
                { name: "fake shoe", qty: 1 },
                { name: "new fake shoe", qty: 2 }
            ],
            amount: 2000,
            user: "joe",
            status: "delivered"
        },
        {
            id: "13",
            products: [
                { name: "fake shoe", qty: 1 },
                { name: "new fake shoe", qty: 2 }
            ],
            amount: 4000,
            user: "rachel",
            status: "transit"
        }
    ]

    return <>
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Products</th>
                        <th>total</th>
                        <th>Amount</th>
                        <th>users</th>
                        <th>status</th>
                        <th>actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        ORDERS.map((item, i) => <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.products.map(p => <div className='bg-slate-700 p-4 m-2 flex justify-between'><span className='font-medium'>
                                {p.name} </span>
                                <span>{p.qty}</span></div>)}</td>
                            <td>{item.amount}</td>
                            <td>{item.user}</td>
                            <td>{item.status}</td>

                            <button className='btn btn-outline btn-warning mx-1'><MdEditSquare /> </button>
                            <button className='btn btn-outline btn-error mx-1'><MdDelete /> </button>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </>
}
export default Order