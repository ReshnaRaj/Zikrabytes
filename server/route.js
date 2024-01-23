const { addpage,getData } = require('./controller')
const {uploadImage}=require('./middleware/multer')

const router=require('express').Router()

router.post('/addlanding',uploadImage.single('img'),addpage)
router.get('/getdata',getData)
module.exports=router
