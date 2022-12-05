const router=require('express').Router();
const blogController=require('../controllers/blog_controller')

router.get('/',blogController.tumMakaleleriGetir);
router.get('/:makaleID',blogController.tekMakaleleriGetir);
router.post('/',blogController.aramaYap);

module.exports=router;