const express = require('express')
const upload = require('../multer/upload')
const { postImage, getImage } = require('../controller/getPostImage')

const router  = express.Router()

router.post('/v1/upload' , upload.single('file') , postImage)
router.get('/v1/images' , getImage)


module.exports  = router