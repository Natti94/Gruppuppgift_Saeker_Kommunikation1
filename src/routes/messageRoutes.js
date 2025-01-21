const { postMessage } = require('../Controllers/messageController');
const express = require('express');
const router = express.Router();

router.post('/', postMessage)
router.get('/', (req, res) => {
    res.send('placeholder');
});
router.get('/conversations', (req, res) => {
    res.send('placeholder');
});
//router.delete('/:msgId', deleteMessage)

module.exports = router;