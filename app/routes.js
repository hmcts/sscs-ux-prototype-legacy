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
var prototypeEightCtrl = require('./controllers/prototype-10');
var prototypeNineCtrl = require('./controllers/prototype-14');
var prototypeTenCtrl = require('./controllers/prototype-15');
var prototypeElevenCtrl = require('./controllers/prototype-16');
var prototypeElevenCtrl = require('./controllers/prototype-16');
var prototypeTwelveCtrl = require('./controllers/prototype-17');
var prototypeThirteenCtrl = require('./controllers/prototype-18');


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

router.get('/prototype-10/validate',   prototypeEightCtrl.validateCaseReference);
router.get('/prototype-10/validatemulti',   prototypeEightCtrl.validateCaseReferenceMulti);
router.get('/prototype-10/validatereference',   prototypeEightCtrl.validateReference);
router.get('/prototype-10/validate-surname',   prototypeEightCtrl.validateSurname);
router.get('/prototype-10/status',   prototypeEightCtrl.getAppealStatus);
router.post('/prototype-10/appointee',   prototypeEightCtrl.appointee);
router.post('/prototype-10/representative',   prototypeEightCtrl.representative);
router.post('/prototype-10/supporter',   prototypeEightCtrl.supporter);
router.post('/prototype-10/hearing',   prototypeEightCtrl.hearing);
router.post('/prototype-10/arrangements',   prototypeEightCtrl.arrangements);
router.post('/prototype-10/mobile',   prototypeEightCtrl.mobile);


router.get('/prototype-14/validate',   prototypeNineCtrl.validateCaseReference);
router.get('/prototype-14/validatemulti',   prototypeNineCtrl.validateCaseReferenceMulti);
router.get('/prototype-14/validatereference',   prototypeNineCtrl.validateReference);
router.get('/prototype-14/validate-surname',   prototypeNineCtrl.validateSurname);
router.get('/prototype-14/status',   prototypeNineCtrl.getAppealStatus);
router.post('/prototype-14/appointee',   prototypeNineCtrl.appointee);
router.post('/prototype-14/representative',   prototypeNineCtrl.representative);
router.post('/prototype-14/supporter',   prototypeNineCtrl.supporter);
router.post('/prototype-14/hearing',   prototypeNineCtrl.hearing);
router.post('/prototype-14/arrangements',   prototypeNineCtrl.arrangements);
router.post('/prototype-14/mobile',   prototypeNineCtrl.mobile);

router.get('/prototype-15/validate',   prototypeTenCtrl.validateCaseReference);
router.get('/prototype-15/validatemulti',   prototypeTenCtrl.validateCaseReferenceMulti);
router.get('/prototype-15/validatereference',   prototypeTenCtrl.validateReference);
router.get('/prototype-15/validate-surname',   prototypeTenCtrl.validateSurname);
router.get('/prototype-15/status',   prototypeTenCtrl.getAppealStatus);
router.post('/prototype-15/appointee',   prototypeTenCtrl.appointee);
router.post('/prototype-15/representative',   prototypeTenCtrl.representative);
router.post('/prototype-15/supporter',   prototypeTenCtrl.supporter);
router.post('/prototype-15/hearing',   prototypeTenCtrl.hearing);
router.post('/prototype-15/arrangements',   prototypeTenCtrl.arrangements);
router.post('/prototype-15/mobile',   prototypeTenCtrl.mobile);
router.post('/prototype-15/mobileboth',   prototypeTenCtrl.mobileboth);
router.post('/prototype-15/notifications',   prototypeTenCtrl.notifications);
router.post('/prototype-15/mrnDate',   prototypeTenCtrl.mrnDate);

router.get('/prototype-16/validate',   prototypeElevenCtrl.validateCaseReference);
router.get('/prototype-16/validatemulti',   prototypeElevenCtrl.validateCaseReferenceMulti);
router.get('/prototype-16/validatereference',   prototypeElevenCtrl.validateReference);
router.get('/prototype-16/validate-surname',   prototypeElevenCtrl.validateSurname);
router.get('/prototype-16/status',   prototypeElevenCtrl.getAppealStatus);
router.post('/prototype-16/appointee',   prototypeElevenCtrl.appointee);
router.post('/prototype-16/representative',   prototypeElevenCtrl.representative);
router.post('/prototype-16/supporter',   prototypeElevenCtrl.supporter);
router.post('/prototype-16/hearing',   prototypeElevenCtrl.hearing);
router.post('/prototype-16/arrangements',   prototypeElevenCtrl.arrangements);
router.post('/prototype-16/mobile',   prototypeElevenCtrl.mobile);
router.post('/prototype-16/mobileboth',   prototypeElevenCtrl.mobileboth);
router.post('/prototype-16/notifications',   prototypeElevenCtrl.notifications);
router.post('/prototype-16/mrnDate',   prototypeElevenCtrl.mrnDate);

router.get('/prototype-17/validate',   prototypeTwelveCtrl.validateCaseReference);
router.get('/prototype-17/validatemulti',   prototypeTwelveCtrl.validateCaseReferenceMulti);
router.get('/prototype-17/validatereference',   prototypeTwelveCtrl.validateReference);
router.get('/prototype-17/validate-surname',   prototypeTwelveCtrl.validateSurname);
router.get('/prototype-17/status',   prototypeTwelveCtrl.getAppealStatus);
router.post('/prototype-17/appointee',   prototypeTwelveCtrl.appointee);
router.post('/prototype-17/representative',   prototypeTwelveCtrl.representative);
router.post('/prototype-17/hearing',   prototypeTwelveCtrl.hearing);
router.post('/prototype-17/arrangements',   prototypeTwelveCtrl.arrangements);
router.post('/prototype-17/mobile',   prototypeTwelveCtrl.mobile);
router.post('/prototype-17/mobileboth',   prototypeTwelveCtrl.mobileboth);
router.post('/prototype-17/notifications',   prototypeTwelveCtrl.notifications);
router.post('/prototype-17/mrnDate',   prototypeTwelveCtrl.mrnDate);
router.post('/prototype-17/checkdate',   prototypeTwelveCtrl.checkdate);

router.get('/prototype-18/validate',   prototypeThirteenCtrl.validateCaseReference);
router.get('/prototype-18/validatemulti',   prototypeThirteenCtrl.validateCaseReferenceMulti);
router.get('/prototype-18/validatereference',   prototypeThirteenCtrl.validateReference);
router.get('/prototype-18/validate-surname',   prototypeThirteenCtrl.validateSurname);
router.get('/prototype-18/status',   prototypeThirteenCtrl.getAppealStatus);
router.post('/prototype-18/appointee',   prototypeThirteenCtrl.appointee);
router.post('/prototype-18/representative',   prototypeThirteenCtrl.representative);
router.post('/prototype-18/hearing',   prototypeThirteenCtrl.hearing);
router.post('/prototype-18/arrangements',   prototypeThirteenCtrl.arrangements);
router.post('/prototype-18/mobile',   prototypeThirteenCtrl.mobile);
router.post('/prototype-18/mobileboth',   prototypeThirteenCtrl.mobileboth);
router.post('/prototype-18/notifications',   prototypeThirteenCtrl.notifications);
router.post('/prototype-18/mrnDate',   prototypeThirteenCtrl.mrnDate);
router.post('/prototype-18/checkdate',   prototypeThirteenCtrl.checkdate);

module.exports = router;