const express = require('express');
const app = express();
const http = require('http');
const {Server} = require("socket.io");

const server = http.createServer(app);
const cors = require('cors');
app.use(cors());

const io = new Server(server, {
    cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

app.listen(3001, () => {
  console.log(`Example app listening on port 3001`);
});

// io.on('connection', (socket) => {
//   console.log('a user connected');
//   socket.on('disconnect', () => {
//     console.log('user disconnected');
//   }
// });

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });