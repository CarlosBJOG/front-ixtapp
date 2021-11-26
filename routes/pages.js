const { Router } = require('express');

const router = Router();

router.get('/',(req, res) => {
    res.render('index')
});

router.get('/servicios',(req, res) => {
    res.render('./pages/services')
});

router.get('/bolsa',(req, res) => {
    res.render('./pages/jobs')
});


router.get('/acerca',(req, res) => {
    res.render('./pages/about')
});

router.get('/login',(req, res) => {
    res.render('./pages/login')
});

router.get('/registro',(req, res) => {
    res.render('./pages/register')
});

router.get('/miperfil',(req, res) => {
    res.render('./pages/profile')
});


router.get('*', (req, res) => {
    res.render('error');
})


module.exports = router;