const express=require('express')
const router=express.Router()
const userController=require('../controller/userController')

router.get('/movies',userController.getMovies)
router.get('/movies/search',userController.search)

module.exports=router