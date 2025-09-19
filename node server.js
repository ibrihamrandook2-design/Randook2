const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

// الاستماع على المنفذ الذي تحدده Render
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
