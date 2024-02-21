/**
 * Project Title: FoodFeast - Full Stack Web Application
 * 
 * Filename: Footer.jsx
 * Created on: 03/23
 * Author(s): Nathan R.
 * Contact: 
 * Copyright (c) 2023 by San Francisco State University
 * 
 *  Description: Admin Dashboard, and sql command line components
 */


import axios from 'axios';
import React, {useEffect, useState} from 'react';
import AdminUser from './AdminUser';


const AdminEntrollment = () => {


    const [userList, setUserList] = useState([]);

    const [refresh, setRefresh] = useState(1);

    useEffect( () => {

        const getUserList = async() => {
            

            const res = await axios.get('/admin/getUserList', {withCredentials: true});

            setUserList(res.data);
    
        }; getUserList();

    }, [refresh] ); 


    return(

        <div className='admin-users'>
            <h1 className='Header'> Entroll List </h1>

        </div>
    )

};

export default AdminEntrollment;