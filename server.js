const express = require('express');
const app = express();
const routes = require('./src/routes/routes')
const port = 8086;

app.use('/css/:filename', (req, res) =>{
    var filename = req.params.filename;
    res.sendFile(__dirname + '/public/style/' + filename);
});

app.use('/img/:filename', (req, res) =>{
    var filename = req.params.filename;
    res.sendFile(__dirname + '/public/img/' + filename);
});

app.use('/js/:filename', (req, res) =>{
    var filename = req.params.filename;
    res.sendFile(__dirname + '/public/script/' + filename);
});

routes(app);
 
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});