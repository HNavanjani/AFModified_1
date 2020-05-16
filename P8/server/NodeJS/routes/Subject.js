const express = require('express');
const router = express.Router();
const subject = require('../models/subject.model');

//Insert
router.post('/insert', (req,res) => {
const subjectModel = new subject(req.body);
subjectModel.save().then(
data => {
return res.status(200).json(data);
},
err => {
return res.status(400).json(err);
}
).catch(
err => {
return res.status(400).json(err);
}
)
});

//GET All
router.get('/', function(req,res){
subject.find().then(
data => {
return res.status(200).json(data);
},
err => {
return res.status(400).json(err);
}
).catch(
err => {
return res.status(400).json(err);
}
)
});

//Find By ID

router.get('/find/:id', (req,res) => {
subject.findById(req.params.id).then(
data => {
return res.status(200).json(data);
},
err => {
return res.status(400).json(err);
}
).catch(
err => {
return res.status(400).json(err);
}
)
});


//PUT

router.put('/update/:id', (req, res) => {
const subjectModel = new subject(req.body);
subjectModel.update().then(() => {
res.sendStatus(200);
}).catch(err => {
console.error(err);
res.sendStatus(500);
});
});


//DELETE

router.delete('/delete/:id', (req, res) => {
    //console.log(req.params.id);
    subject.remove(req.params._id).then(() => {
        res.sendStatus(200);
    }).catch(err => {
    console.error(err);
    res.sendStatus(500);
    });
});


module.exports = router;