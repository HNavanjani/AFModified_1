const express = require('express');

const mongoose = require('mongoose');

const bodyParser = require('body-parser');

const cors = require('cors');


const app = express();

const PORT = process.env.PORT || 5000;


const courseRoute = require('./routes/Course');

const subjectRoute = require('./routes/Subject');



mongoose.connect("mongodb://localhost:27017/react-sample", { useNewUrlParser: true }).then(

    () => { console.log('Successfully connected to the database') } ,

    err => { console.log('Error Connecting to the database : ' + err ) }

)

app.use(bodyParser.urlencoded({ extended: false}));

app.use(bodyParser.json());

app.use(cors());



app.use('/subject',subjectRoute);

app.use('/course',courseRoute);



app.listen(PORT , () => {

    console.log(`Running on PORT : ${ PORT }`);

});