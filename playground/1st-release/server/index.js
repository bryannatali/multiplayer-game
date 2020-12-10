const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, '..')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'client.html'));
});
app.listen(9000, () => console.log('Running at port 9000'));