/**
 * Project Title: FoodFeast - Full Stack Web Application
 * 
 * Filename: addMenuItem.js
 * Created on: 03/23
 * Author(s):
 * Contact: 
 * Copyright (c) 2023 by San Francisco State University
 * 
 *  Description: This module provides functionality for adding menu items to the database
 * 
 */


const db = require('../db');

const addMenuItem = async (req, res) => {

    try {

        const {name, price, restaurant_id, image, description } = req.body;

        const q = 'INSERT INTO menu_items (name, price, restaurant_id, image, description) VALUES (?, ?, ?, ?, ?)';
        
        db.query(q, [name, price, restaurant_id, image, description], (error, results) => {
            if (error) {
                console.log("ERROR HERE!!!")
                console.log(error)
                res.status(400).json({ message: 'Menu item not saved!' });
            } else {
                res.status(201).json({ message: 'addedMenuItem' });
                console.log("Menu Item " + name + " added to " + restaurant_id)
            }
        });
    } catch (err) {
        console.error(err);
        res.send([]);
    }
}


const deleteMenuItem = async (req, res) => {

    try {

        const {id} = req.body;

        const q = `DELETE FROM menu_items WHERE id = ${id};`;
        
        db.query(q, (error, results) => {
            if (error) {
                console.log("ERROR HERE!!!")
                console.log(error)
                res.status(400).json({ message: 'Menu item not saved!' });
            } else {
                res.status(201).json({ message: 'deletedMenuItem' });
            }
        });
    } catch (err) {
        console.error(err);
        res.send([]);
    }
}

module.exports = {
    addMenuItem,
    deleteMenuItem,
};