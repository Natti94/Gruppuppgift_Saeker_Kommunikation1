const express = require('express');
const router = express.Router();

const mockConversations = [];
const mockMessages = [];

router.post('/', (req, res) => {
    try {
        const { sender, receiver, content } = req.body;

        if (!sender || !receiver || !content) {
            return res.status(400).json({ error: 'Sender, receiver and content is required' });
        }

        let conversation = mockConversations.find()
    }
})