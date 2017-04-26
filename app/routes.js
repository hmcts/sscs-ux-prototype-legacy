var express = require('express');
var router = express.Router();

var home = require('./controllers/home');
var prototypeOneCtrl = require('./controllers/prototype-1');
var prototypeTwoCtrl = require('./controllers/prototype-2');
var prototypeThreeCtrl = require('./controllers/prototype-3');
var prototypeFourCtrl = require('./controllers/prototype-4');
var prototypeFiveCtrl = require('./controllers/prototype-5');
var prototypeSixCtrl = require('./controllers/prototype-6');
var prototypeSevenCtrl = require('./controllers/prototype-7');
var prototypeEightCtrl = require('./controllers/prototype-8');

router.get('/', home.index);
router.get('/prototype-1/status', prototypeOneCtrl.status);
router.get('/prototype-2/status', prototypeTwoCtrl.status);
router.get('/prototype-3/status', prototypeThreeCtrl.status);

router.get('/prototype-4/status', prototypeFourCtrl.getAppealStatus);
router.get('/prototype-4/hearingdetails', prototypeFourCtrl.getHearingDetails);

router.get('/prototype-5/status',   prototypeFiveCtrl.getAppealStatus);

router.get('/prototype-6/validate',   prototypeSixCtrl.validate);
router.get('/prototype-6/appealstatus',   prototypeSixCtrl.getAppealStatus);
router.get('/prototype-6/hearingdetails', prototypeSixCtrl.getHearingDetails);
router.get('/prototype-6/registerfornotifications', prototypeSixCtrl.registerForNotifications);
router.get('/prototype-6/abouthearing', prototypeSixCtrl.aboutHearing);
router.get('/prototype-6/provideevidence', prototypeSixCtrl.providingEvidence);
router.get('/prototype-6/claimexpenses', prototypeSixCtrl.claimExpenses);

router.get('/prototype-7/validate',   prototypeSevenCtrl.validateCaseReference);
router.get('/prototype-7/validatemulti',   prototypeSevenCtrl.validateCaseReferenceMulti);

router.get('/prototype-8/validate',   prototypeEightCtrl.validateCaseReference);
router.get('/prototype-8/validatemulti',   prototypeEightCtrl.validateCaseReferenceMulti);
router.get('/prototype-8/validatereference',   prototypeEightCtrl.validateReference);
router.get('/prototype-8/validate-surname',   prototypeEightCtrl.validateSurname);
router.get('/prototype-8/status',   prototypeEightCtrl.getAppealStatus);
router.post('/prototype-8/appointee',   prototypeEightCtrl.appointee);
router.post('/prototype-8/representative',   prototypeEightCtrl.representative);
router.post('/prototype-8/supporter',   prototypeEightCtrl.supporter);
router.post('/prototype-8/hearing',   prototypeEightCtrl.hearing);
router.post('/prototype-8/arrangements',   prototypeEightCtrl.arrangements);

module.exports = router;