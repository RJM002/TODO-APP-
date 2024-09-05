const express=require('express')
const taskRouter=  require('./TaskRouter.js');
const authRoutes=  require('./AuthRouter.js');
const ensureAuthentication=  require('../Middlewares/Auth.js');


const router =express.Router();

router.use('/auth',authRoutes);
router.use('/tasks',taskRouter);

module.exports=router;

