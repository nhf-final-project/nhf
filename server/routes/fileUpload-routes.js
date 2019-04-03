const express = require('express');
const uploadRoutes = express.Router();

const uploader = require('../configs/cloudinary');

uploadRoutes.post('/upload', uploader.single("image"), (req, res, next) => {

    if (!req.file) {
        next(new Error('No file uploaded!'));
        return;
    }

    res.json({ secure_url: req.file.secure_url });
})

module.exports = uploadRoutes;