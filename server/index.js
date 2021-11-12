import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import nodemailer from "nodemailer";

const app = express();
app.use([
    cors(),
    bodyParser.json({ limit: '30mb', extended: true}),
    bodyParser.urlencoded({ limit: '30mb', extended: true})
]);

const server = createServer(app);
export const io = new Server(server, {
    cors: {
        origin: ["http://localhost:3000"]
    }
});

app.get('/',(req,res) => {
    res.send('API');
});

io.on('connection', (socket) => {

    socket.on('send message', (data) => {
        io.to(data.roomID).emit('incoming message', data);
    });
    
});

const PORT = process.env.PORT || 5000;

server.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
});