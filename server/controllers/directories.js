const express = require('express');
const Directory = require('../models/Directory')



 const getAllDirectory = async (req,res) => {

    try {
        
        const directories = await Directory.find({});
        res.json(directories);
    } catch (err) {
        
        res.status(500).json({ error : err.massage})
    }
}



 const createNewDirectory =  async(req,res) => {
    const {name} = req.body;
    try {
        
        const newDirectory = new Directory({name})
        await newDirectory.save();
        res.status(201).json(newDirectory)
    } catch (err) {
        res.status(400).json({error : err.massage});
    }
};


 const updateDirectory = async (req,res) => {

    try {
        
        const directory = await Directory.findByIdAndUpdate(req.params.id, req.body, {new : true});
        res.json(directory);
    } catch (err) {
        res.status(400).json({ error : err.massage});
    }
};



 const deleteDirectory = async (req,res) => {

    try {
         await Directory.findByIdAndDelete(req.params.id);
         res.status(204).end();
        
    } catch (err) {
        res.status(400).json({ error : err.massage});
    }
}

module.exports = {getAllDirectory,createNewDirectory,updateDirectory,deleteDirectory}