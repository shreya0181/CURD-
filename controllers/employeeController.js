//  for routing purpose 

const express= require('express');
var router = express.Router();

//  endpoint and request handlers
router.get('/', (res, req)=>{

    res.json('sample- text');


});

module.exports = router;