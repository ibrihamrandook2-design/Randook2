const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// الاستماع على المنفذ المprovided من قبل Render
const PORT = process.env.PORT || 3000;

http.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
