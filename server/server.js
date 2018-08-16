const path = require('path');
const publicPath = path.join(__dirname, '../public' );

const express = require('express');

let port = process.eventNames.PORT || 3000;
let app = express();

app.use(express.static(publicPath))  

app.listen(port, () => {
    console.log(`Server Started Up on Port ${port}`)
});

module.exports = {app};


