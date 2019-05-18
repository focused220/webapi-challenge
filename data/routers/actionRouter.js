const express = require('express');
const Projects = require('../helpers/projectModel.js');
const Actions = require('../helpers/actionModel.js');

const router = express.Router();

router.use(express.json())

router.post('/', async (req, res, next) => {
   try{
       const newAction = req.body;
       const action = await Actions.insert(newAction);
       res.status(201).json(action);
   }catch(error){res.status(500).json(error)}       
})

router.get('/:id', async (req, res, next) => {
    try{
        const {id} = req.params;
        const action = await Actions.get(id);
        res.status(201).json(action);
    }catch(error){res.status(500).json(error)}
})

router.put('/:id', async (req, res, next) => {
    try{
        const {id} = req.params;
        const modifications = req.body;
        const actionUpdate = await Actions.update(id, modifications);
        res.status(201).json(actionUpdate);
    }catch(error){res.status(500).json(error)}
})

router.delete('/:id', async (req, res, next) => {
    try{
        const {id} = req.params;
        const action = await Actions.remove(id);
        res.status(201).json(action);
    }catch(error){res.status(500).json(error)}
})


module.exports = router; 