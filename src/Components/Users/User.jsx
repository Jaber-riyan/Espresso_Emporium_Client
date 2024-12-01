import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { FaEye } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { RiEdit2Fill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const User = ({ user, setUsers, users }) => {
    const { _id, name, email, photoURL, createdAt, lastSignInTime } = user;

    // delete user 
    const handleDelete = () => {
        const handleFetch = async () => {
            const res = await fetch(`http://localhost:5000/users/${_id}`, {
                method: "DELETE"
            });
            const data = await res.json();
            const remaining = users.filter(user => user._id !== _id);
            setUsers(remaining);
            Swal.fire({
                title: "Successfully Deleted User",
                icon: "success"
            });
            console.log(data);
        }
        handleFetch();
    }
    // view user details
    const handleView = () => {
        document.getElementById('my_modal_1').showModal()
    }

    return (
        <>
            <tr>
                <th>
                    <label>
                        {/* <input type="checkbox" className="checkbox" /> */}
                    </label>
                </th>
                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="mask mask-squircle h-12 w-12">
                                <img
                                    src={photoURL}
                                    alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold">{name}</div>
                            <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                </td>
                <td>
                    {email}
                </td>
                <td>{createdAt}</td>
                {
                    lastSignInTime ? <td>{lastSignInTime}</td> : <td>None</td>
                }
                <th>
                    <Link onClick={handleView}><button className='px-3 bg-green-500 py-1 rounded-l-lg'><FaEye size={25} /></button></Link>
                    <Link to={`/update-user/${_id}`}><button className='px-3 bg-blue-500 py-1'><RiEdit2Fill size={25} /></button></Link>
                    <Link onClick={handleDelete}><button className='px-3 bg-red-500 py-1 rounded-r-lg'><MdDelete size={25} /></button></Link>
                </th>
                {/* modal */}
                {/* <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>open modal</button> */}

            </tr>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <div className='flex justify-center'>
                        <img className='h-96 w-fu' src={photoURL} alt="" />
                    </div>
                    <h3 className="font-bold text-lg">Name : {name}</h3>
                    <h3 className="font-bold text-lg">Email : {email}</h3>
                    <h3 className="font-bold text-lg">Created At : {createdAt}</h3>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default User;