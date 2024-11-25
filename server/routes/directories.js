const express = require('express');
const router = express.Router();
const { createNewDirectory, getAllDirectory, updateDirectory, deleteDirectory } = require('../controllers/directories');


router.get('/', getAllDirectory);

router.post('/' , createNewDirectory);

router.put('/:id' , updateDirectory);

router.delete('/:id' , deleteDirectory);


module.exports = router;