const express = require('express');
const router = express.Router();

router.get('/',(request, response, next)=>{
    response.status(200).json({
        message:'Orders were fetched'
    });
});

router.post('/',(request, response, next)=>{
    response.status(201).json({
        message:'Orders was created'
    });
});

router.get('/:orderID',(request, response, next)=>{
    response.status(200).json({
        message : 'Order details',
        orderID : request.params.orderID
    });
});
router.delete('/:orderID',(request, response, next)=>{
    response.status(200).json({
        message : 'Order deleted',
        orderID : request.params.orderID
    });
});



module.exports = router;