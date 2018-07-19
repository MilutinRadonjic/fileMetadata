
var cors = require('cors');
var bodyParser = require('body-parser');
var express = require('express');
var multer = require('multer');
var app = module.exports = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(cors({ optionSuccessStatus: 200 }));
var upload = multer({dest: 'upload/'});

app.post('/upload', upload.single('upfile'), (req, res)=>{
    var name = req.file.originalname;
    var size = req.file.size;
    console.log(name, size);
    res.json({name, size});
});

app.use(express.static(__dirname + './public'));

app.listen(process.env.PORT || 3000, () => {
    console.log('Open localhost://3000 or localhost://' + process.env.PORT);
  });