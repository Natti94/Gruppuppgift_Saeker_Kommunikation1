const mockConversations = require('../mockDB/conversationsDB');

exports.postMessage = (req, res) => {
   const { sender, receiver, content } = req.body;
   if (!sender || !receiver || !content) {
      return res.status(400).json({ error:"sender, receiver & content must be included." });
   }

   let conversation = mockConversations.find(conv => {
      conv.participants.includes(sender) && conv.participants(receiver)
   });
   if (!conversation) {
      conversation = {
         convId: mockConversations.length + 1,
         participants: [sender, receiver],
      };
      mockConversations.push(conversation);
   }
}