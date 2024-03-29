/**
 * Project Title: FoodFeast - Full Stack Web Application
 * 
 * Filename: Home.jsx
 * Created on: 04/23
 * Author(s): 
 * Contact: 
 * Copyright (c) 2023 by San Francisco State University
 * 
 *  Description: The main home component that renders the two child components:
 *              The home-header, containing featured restaurants, and header txt/img,
 *              as well as the browse page, with search, dropdown, and all restaurants"
 */

import React from 'react';
import HomeHeader from '../components/HomeHeader';
import '../styles/Home.css';



function Home() {
    
    return (
        <div className="home-container">
            <div className="header-page">
                <HomeHeader/>
            </div>

        </div>
    );
}

export default Home;