const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');


app.use(express.static('src'));

const io = require('socket.io').listen(app.listen(3002, ()=>{
    console.log('listen in http://localhost:3002')
}));

io.on('connection', socket=>{
    fs.watch(path.resolve('./src/task.js'), (e, filename)=>{
        if (filename && e === 'change'){
            socket.emit('change')
        }
    });
});




