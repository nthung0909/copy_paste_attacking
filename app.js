const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
    res.sendFile('./test.html', {
        root: path.join(__dirname)
    });
    return;
});

app.listen(3000, (req,res) => {
    console.log(`app is running at port 3000`);
})

module.exports = app;
