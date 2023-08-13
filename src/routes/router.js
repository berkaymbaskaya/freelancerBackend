const { Router } = require('express');
const router = Router();

const { AllUsers } = require('../controller/AllUsers');
const { Auth } = require('../controller/Auth');
const { Allilanlar } = require('../controller/Allilanlar');
const { Filterİlanlar } = require('../controller/Filterİlanlar');
const { GetAllKategori } = require('../controller/GetAllKategori');
const {GetKeywords}=require('../controller/GetKeywords')

//GET METHODS
router.get('/AllUsers', AllUsers);
router.get('/Auth', Auth);
router.get('/Allilanlar', Allilanlar);
router.get('/GetAllKategori', GetAllKategori)
//POST METHODS
router.post('/Filterilanlar', Filterİlanlar);
//GET NOSQL
router.get('/GetKeywords',GetKeywords)


module.exports = router