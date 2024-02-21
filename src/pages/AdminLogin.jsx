/**
 * Project Title: FoodFeast - Full Stack Web Application
 * 
 * Filename: AdminLogin.jsx
 * Created on: 04/23
 * Author(s): 
 * Contact: 
 * Copyright (c) 2023 by San Francisco State University
 * 
 *  Description: Admin Login Page, simple make a request to /admin/login, 
 *      check db, and log in if info is correct
 */

import React, { useState, useEffect } from 'react';
import axios from "axios";



import '../styles/Admin.css';


function AdminLogin() {

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        let obj = {
            ...formData
        }

        obj[e.target.name] = e.target.value;
        setFormData(obj);

    };


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!formData.username) {
            setErr('Username field is required')
            return
        }

        if (!formData.password) {
            setErr('Password field is required')
            return
        }

        try {
            const res = await axios.post("/auth/adminlogin", formData);
            if (res.data.success) {
                window.location.href = '/admin';
            }

        } catch (err) {
            console.error('Error:', err)
            setErr(
              err.response ? err.response.data : 'An error occurred during login.',
            )
        }
    };

    useEffect(() => {
        const timeout = setTimeout(() => {
            const gif = document.querySelector('.matrix-gif');
            gif.style.display = 'none';
        }, 1500);

        return () => clearTimeout(timeout);
    }, []);

    //error display

    const [err, setErr] = useState(null)

    useEffect(() => {
        if (err) {
            const timerId = setTimeout(() => {
                setErr(null)
            }, 3000)
            return () => clearTimeout(timerId)
        }
    }, [err])
}

export default AdminLogin;


