import React from 'react'
import { MdDelete, MdEditSquare } from 'react-icons/md'

const Users = () => {

    return <>
        <UserTable />
    </>
}

const UserTable = () => {
    const USERS = [
        {
            name: "Ross",
            email: "ross@gmailcom",
            address: "fake Address",
            mobile: 999999999
        },
        {
            name: "Rachel",
            email: "ross@gmailcom",
            address: "fake Address",
            mobile: 1111111111
        },
        {
            name: "Joe",
            email: "ross@gmailcom",
            address: "fake Address",
            mobile: 111111122
        }
    ]

    return <>
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Mobile</th>
                        <th>Account</th>
                        <th>Actions</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        USERS.map((item, i) => <tr key={item.name}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.address}</td>
                            <td>{item.mobile}</td>
                            <td>
                                <div className='form-control w-24'>
                                    <label className='cursor-pointer label'>
                                        <span className='label-text'>Active</span>
                                        <input type="checkbox" className='toggle toggle-primary' />
                                    </label>
                                </div>
                            </td>
                            <button className='btn btn-outline btn-warning mx-1'><MdEditSquare /> </button>
                            <button className='btn btn-outline btn-error mx-1'><MdDelete /> </button>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    </>
}
export default Users