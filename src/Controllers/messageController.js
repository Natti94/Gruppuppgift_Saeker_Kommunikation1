const mockConversations = require('../mockDB/conversationsDB');

exports.postMessage = (req, res) => {
   const { sender, convId, content } = req.body;
   if (!sender || !convId || !content) {
      return res.status(400).json({ error:"sender, convId & content must be included." });
   }

   const conversation = mockConversations.find(conv => conv.convId === convId);
   const newMessage = {
      sender,
      content,
      timestamp: new Date(),
     };
     conversation.messages.push(newMessage);
     res.status(201).json(conversation);
};