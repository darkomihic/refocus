const express = require('express');
const router = express.Router();
const keychainController = require('../controllers/keychainController');

router.get('/', keychainController.getAll);
router.get('/:id', keychainController.getById);
router.post('/', keychainController.create);
router.put('/:id', keychainController.update);
router.delete('/:id', keychainController.remove);

module.exports = router;
