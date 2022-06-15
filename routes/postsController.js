const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');

const path = require('path');



//gestion du storage de multer
const storage = multer.diskStorage({
    destination : path.join( __dirname, 'uploads'),
    filename : (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    }
})

const upload = multer({
    storage : storage
});

const ObjectID = require('mongoose').Types.ObjectId;
//const upload = multer({dest: 'uploads/'});

const { PostsModel } = require('../models/postsModel');

router.get('/', (req, res) => {
    PostsModel.find((err, docs) => {
        if(!err)res.send(docs);
        else console.log('erreur de recuperation des données:'+err);
    })
});

router.post('/', upload.single('upload'), (req, res) => {
    // console.log('son href: !!!!!!!!!!!!!!!');
    // console.log(req.href);
    // console.log('son url: !!!!!!!!!!!!');
    // console.log(req.url);
    // console.log('son req !!!!!!!!!!!!!!!!:')
    // console.log(req);
    // console.log('son file !!!!!!!!!!!!!:');
    // console.log(req.file);
    // console.log(req.body);
    // console.log(req.originalUrl);
    // console.log('son url:');
    // console.log(req._parsedUrl);
    // console.log(req.baseUrl);
    console.log('son file filename !!!!!!!!!!!:');
    console.log(req.file.filename);
    const newRecord = new PostsModel({
        author: req.body.author,
        message: req.body.message,
        //imageUrl: req.file.filename
        imageUrl: `${req.protocol}://${req.get('host')}/${req.file.filename}`
        //req.baseUrl
    });

    newRecord.save((err, docs) => {
        if(!err)res.send(docs);
        else console.log('erreur de creation de données:'+err);
    })
});

//Pour modifier les données
router.put('/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID inconnu :' + req.params.id)

    const updateRecord = {
        author: req.body.author,
        message: req.body.message
    };

    PostsModel.findByIdAndUpdate(
        req.params.id,
        { $set: updateRecord},
        { new: true},
        (err, docs) => {
            if(!err)res.send(docs);
            else console.log('erreur avec notre update :' + err);
        }
    )
});

router.delete('/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id))
    return res.status(400).send('ID inconnu :' + req.params.id)

    PostsModel.findByIdAndRemove(
        req.params.id,
        (err, docs) => {
            if(!err)res.send(docs);
            else console.log('erreur de suppression des données :' + err);
        }
    )
});

module.exports = router;