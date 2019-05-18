const express = require('express');
const Projects = require('../helpers/projectModel.js');


const router = express.Router();

router.post('/', async (req, res, next) =>{
    try{
        const newProject = req.body;
        const project = await Projects.insert(newProject)
        res.status(201).json(project);
    }catch( error ){
        res.status(500).json(error);
    }
})

router.get('/:id', async (req, res, next) =>{
    try{
        const {id} = req.params;
        const project = await Projects.get(id)
        res.status(201).json(project)
    }catch(error){
        res.status(500).json(error)
    }
})

router.put('/:id', async (req, res, next) =>{
    try{
        const {id} = req.params;
        const changes = req.body;
        const modifications = await Projects.update(id, changes);
        res.status(201).json(modifications);
    }catch(error){
        res.status(500).json(error);
    }
})

router.delete('/:id', async (req, res, next) => {
    try{
        const {id} = req.params;
        const removed = await Projects.remove(id);
        res.status(201).json(removed);
    }catch(error){res.status(500).json(error)}
})


module.exports = router;