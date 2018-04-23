var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var path = require('path');
var multer = require('multer');
var storage = multer.diskStorage({
        destination: (req, file, cb) => {
        cb(null, path.join(__dirname, '../uploads'));
    },
    filename: (req, file, cb) => {
        crypto.pseudoRandomBytes(16, function (err, raw) {
            cb(null, raw.toString('hex') + Date.now() + path.extname(file.originalname));
        });
    }
});
var upload = multer({ storage });

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
var prototypeFourteenCtrl = require('./controllers/prototype-20');
var prototypeFithteenCtrl = require('./controllers/prototype-23');
var prototypeFithteenCtrl = require('./controllers/prototype-sya-demo');
var prototypeFithteenCtrl = require('./controllers/prototype-24');


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
router.post('/prototype-18/availability',   prototypeThirteenCtrl.availability);

router.get('/prototype-20/validate',   prototypeFourteenCtrl.validateCaseReference);
router.get('/prototype-20/validatemulti',   prototypeFourteenCtrl.validateCaseReferenceMulti);
router.get('/prototype-20/validatereference',   prototypeFourteenCtrl.validateReference);
router.get('/prototype-20/validate-surname',   prototypeFourteenCtrl.validateSurname);
router.get('/prototype-20/status',   prototypeFourteenCtrl.getAppealStatus);
router.post('/prototype-20/appointee',   prototypeFourteenCtrl.appointee);
router.post('/prototype-20/representative',   prototypeFourteenCtrl.representative);
router.post('/prototype-20/representative-app',   prototypeFourteenCtrl.representativeApp);
router.post('/prototype-20/hearing',   prototypeFourteenCtrl.hearing);
router.post('/prototype-20/hearing-app',   prototypeFourteenCtrl.hearingApp);
router.post('/prototype-20/arrangements',   prototypeFourteenCtrl.arrangements);
router.post('/prototype-20/arrangements-app',   prototypeFourteenCtrl.arrangementsApp);
router.post('/prototype-20/mobile',   prototypeFourteenCtrl.mobile);
router.post('/prototype-20/mobile-app',   prototypeFourteenCtrl.mobileApp);
router.post('/prototype-20/mobileboth',   prototypeFourteenCtrl.mobileboth);
router.post('/prototype-20/notifications',   prototypeFourteenCtrl.notifications);
router.post('/prototype-20/mrnDate',   prototypeFourteenCtrl.mrnDate);
router.post('/prototype-20/checkdate',   prototypeFourteenCtrl.checkdate);
router.post('/prototype-20/availability',   prototypeFourteenCtrl.availability);
router.post('/prototype-20/availability-app',   prototypeFourteenCtrl.availabilityApp);
router.post('/prototype-20/address-app',   prototypeFourteenCtrl.addressApp);

router.get('/prototype-23/validate',   prototypeFithteenCtrl.validateCaseReference);
router.get('/prototype-23/validatemulti',   prototypeFithteenCtrl.validateCaseReferenceMulti);
router.get('/prototype-23/validatereference',   prototypeFithteenCtrl.validateReference);
router.get('/prototype-23/validate-surname',   prototypeFithteenCtrl.validateSurname);
router.get('/prototype-23/status',   prototypeFithteenCtrl.getAppealStatus);
router.post('/prototype-23/appointee',   prototypeFithteenCtrl.appointee);
router.post('/prototype-23/representative',   prototypeFithteenCtrl.representative);
router.post('/prototype-23/representative-app',   prototypeFithteenCtrl.representativeApp);
router.post('/prototype-23/hearing',   prototypeFithteenCtrl.hearing);
router.post('/prototype-23/hearing-app',   prototypeFithteenCtrl.hearingApp);
router.post('/prototype-23/arrangements',   prototypeFithteenCtrl.arrangements);
router.post('/prototype-23/arrangements-app',   prototypeFithteenCtrl.arrangementsApp);
router.post('/prototype-23/mobile',   prototypeFithteenCtrl.mobile);
router.post('/prototype-23/mobile-app',   prototypeFithteenCtrl.mobileApp);
router.post('/prototype-23/mobileboth',   prototypeFithteenCtrl.mobileboth);
router.post('/prototype-23/notifications',   prototypeFithteenCtrl.notifications);
router.post('/prototype-23/mrnDate',   prototypeFithteenCtrl.mrnDate);
router.post('/prototype-23/checkdate',   prototypeFithteenCtrl.checkdate);
router.post('/prototype-23/availability',   prototypeFithteenCtrl.availability);
router.post('/prototype-23/availability-app',   prototypeFithteenCtrl.availabilityApp);
router.post('/prototype-23/address-app',   prototypeFithteenCtrl.addressApp);
router.post('/prototype-23/mrnhave',   prototypeFithteenCtrl.mrnhave);
router.post('/prototype-23/contactdwp',   prototypeFithteenCtrl.contactdwp);

router.get('/prototype-sya-demo/validate',   prototypeFithteenCtrl.validateCaseReference);
router.get('/prototype-sya-demo/validatemulti',   prototypeFithteenCtrl.validateCaseReferenceMulti);
router.get('/prototype-sya-demo/validatereference',   prototypeFithteenCtrl.validateReference);
router.get('/prototype-sya-demo/validate-surname',   prototypeFithteenCtrl.validateSurname);
router.get('/prototype-sya-demo/status',   prototypeFithteenCtrl.getAppealStatus);
router.post('/prototype-sya-demo/appointee',   prototypeFithteenCtrl.appointee);
router.post('/prototype-sya-demo/representative',   prototypeFithteenCtrl.representative);
router.post('/prototype-sya-demo3/representative-app',   prototypeFithteenCtrl.representativeApp);
router.post('/prototype-sya-demo/hearing',   prototypeFithteenCtrl.hearing);
router.post('/prototype-sya-demo/hearing-app',   prototypeFithteenCtrl.hearingApp);
router.post('/prototype-sya-demo/arrangements',   prototypeFithteenCtrl.arrangements);
router.post('/prototype-sya-demo/arrangements-app',   prototypeFithteenCtrl.arrangementsApp);
router.post('/prototype-sya-demo/mobile',   prototypeFithteenCtrl.mobile);
router.post('/prototype-sya-demo/mobile-app',   prototypeFithteenCtrl.mobileApp);
router.post('/prototype-sya-demo/mobileboth',   prototypeFithteenCtrl.mobileboth);
router.post('/prototype-sya-demo3/notifications',   prototypeFithteenCtrl.notifications);
router.post('/prototype-sya-demo/mrnDate',   prototypeFithteenCtrl.mrnDate);
router.post('/prototype-sya-demo/checkdate',   prototypeFithteenCtrl.checkdate);
router.post('/prototype-sya-demo/availability',   prototypeFithteenCtrl.availability);
router.post('/prototype-sya-demo/availability-app',   prototypeFithteenCtrl.availabilityApp);
router.post('/prototype-sya-demo/address-app',   prototypeFithteenCtrl.addressApp);
router.post('/prototype-sya-demo/mrnhave',   prototypeFithteenCtrl.mrnhave);
router.post('/prototype-sya-demo/contactdwp',   prototypeFithteenCtrl.contactdwp);

router.get('/prototype-24/validate',   prototypeFithteenCtrl.validateCaseReference);
router.get('/prototype-24/validatemulti',   prototypeFithteenCtrl.validateCaseReferenceMulti);
router.get('/prototype-24/validatereference',   prototypeFithteenCtrl.validateReference);
router.get('/prototype-24/validate-surname',   prototypeFithteenCtrl.validateSurname);
router.get('/prototype-24/status',   prototypeFithteenCtrl.getAppealStatus);
router.post('/prototype-24/appointee',   prototypeFithteenCtrl.appointee);
router.post('/prototype-24/representative',   prototypeFithteenCtrl.representative);
router.post('/prototype-24/representative-app',   prototypeFithteenCtrl.representativeApp);
router.post('/prototype-24/hearing',   prototypeFithteenCtrl.hearing);
router.post('/prototype-24/hearing-app',   prototypeFithteenCtrl.hearingApp);
router.post('/prototype-24/arrangements',   prototypeFithteenCtrl.arrangements);
router.post('/prototype-24/arrangements-app',   prototypeFithteenCtrl.arrangementsApp);
router.post('/prototype-24/mobile',   prototypeFithteenCtrl.mobile);
router.post('/prototype-24/mobile-app',   prototypeFithteenCtrl.mobileApp);
router.post('/prototype-24/mobileboth',   prototypeFithteenCtrl.mobileboth);
router.post('/prototype-24/notifications',   prototypeFithteenCtrl.notifications);
router.post('/prototype-24/notificationstype',   prototypeFithteenCtrl.notificationstype);
router.post('/prototype-24/notificationsmobile',   prototypeFithteenCtrl.notificationsmobile);
router.post('/prototype-24/mrnDate',   prototypeFithteenCtrl.mrnDate);
router.post('/prototype-24/checkdate',   prototypeFithteenCtrl.checkdate);
router.post('/prototype-24/availability',   prototypeFithteenCtrl.availability);
router.post('/prototype-24/availability-app',   prototypeFithteenCtrl.availabilityApp);
router.post('/prototype-24/address-app',   prototypeFithteenCtrl.addressApp);
router.post('/prototype-24/mrnhave',   prototypeFithteenCtrl.mrnhave);
router.post('/prototype-24/contactdwp',   prototypeFithteenCtrl.contactdwp);
router.post('/prototype-24/evidenceoptions',   prototypeFithteenCtrl.evidenceoptions);
router.post('/prototype-24/evidencechannel',   prototypeFithteenCtrl.evidencechannel);
router.get('/prototype-beta-24/submit-your-appeal/012-evidence-reminder', prototypeFithteenCtrl.evidenceReminder);
router.post('/012-evidence-reminder-file-upload', upload.single('fileUpload'), prototypeFithteenCtrl.evidenceReminderFileUpload);
router.post('/012-evidence-reminder-file-delete', prototypeFithteenCtrl.evidenceReminderFileDelete);
router.get('/012-evidence-reminder-file-get', prototypeFithteenCtrl.evidenceReminderGetFiles);

module.exports = router;
