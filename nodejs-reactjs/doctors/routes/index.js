var express = require('express');
var router = express.Router();
var patients = require('../controllers/patients');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// patients
router.get('/patients', patients.getPatients);
router.get('/recent-patients', patients.getRecentPatients);
router.get('/todays-patients', patients.getTodaysPatients);
router.get('/todays-appointments', patients.getTodaysAppointments);
router.post('/patients', patients.addPatient);

module.exports = router;
