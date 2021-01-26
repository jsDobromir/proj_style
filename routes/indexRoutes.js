import express from 'express';

export const router = express.Router();

router.get('/',(req,res) => {
    res.render('index',{title : 'Welcome'});
});


router.get('/packages',(req,res,next) => {
    res.render('packages',{title : 'Packages'});
});

router.get('/customers',(req,res,next) => {
    res.render('customers',{title : 'Customers'});
}); 

router.get('/start-hosting',(req,res,next) => {
    res.send("start hosting");
}); 