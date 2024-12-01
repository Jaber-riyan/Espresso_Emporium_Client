import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';
import { Helmet } from 'react-helmet';

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);
    return (
        <div className='w-[80%] mx-auto'>
            <Helmet><title>Users | Espresso Emporium</title></Helmet>
            <div className="">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>
                                    {/* <input type="checkbox" className="checkbox" /> */}
                                </label>
                            </th>
                            <th>Name & Photo</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last SignIn Time</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user=> <User key={user._id} users={users} setUsers={setUsers} user={user}></User>)
                        }
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>
                            {/* <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th></th> */}
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Users;