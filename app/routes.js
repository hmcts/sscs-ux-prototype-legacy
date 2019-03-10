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
var prototypeSixteenCtrl = require('./controllers/prototype-sya-demo');
var prototypeSeventeenCtrl = require('./controllers/prototype-24');
var prototypeEightteenCtrl = require('./controllers/prototype-180425');
var prototypeNineteenCtrl = require('./controllers/prototype-180517');
var prototypeTwentyCtrl = require('./controllers/prototype-180522');
var prototypeTwentyOneCtrl = require('./controllers/prototype-190117');
var prototypeTwentyTwoCtrl = require('./controllers/prototype-190130');
var prototypeTwentyThreeCtrl = require('./controllers/prototype-190211');
var prototypeTwentyFourCtrl = require('./controllers/mya-hearing01');
	
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

router.get('/prototype-sya-demo/validate',   prototypeSixteenCtrl.validateCaseReference);
router.get('/prototype-sya-demo/validatemulti',   prototypeSixteenCtrl.validateCaseReferenceMulti);
router.get('/prototype-sya-demo/validatereference',   prototypeSixteenCtrl.validateReference);
router.get('/prototype-sya-demo/validate-surname',   prototypeSixteenCtrl.validateSurname);
router.get('/prototype-sya-demo/status',   prototypeSixteenCtrl.getAppealStatus);
router.post('/prototype-sya-demo/appointee',   prototypeSixteenCtrl.appointee);
router.post('/prototype-sya-demo/representative',   prototypeSixteenCtrl.representative);
router.post('/prototype-sya-demo3/representative-app',   prototypeSixteenCtrl.representativeApp);
router.post('/prototype-sya-demo/hearing',   prototypeSixteenCtrl.hearing);
router.post('/prototype-sya-demo/hearing-app',   prototypeSixteenCtrl.hearingApp);
router.post('/prototype-sya-demo/arrangements',   prototypeSixteenCtrl.arrangements);
router.post('/prototype-sya-demo/arrangements-app',   prototypeSixteenCtrl.arrangementsApp);
router.post('/prototype-sya-demo/mobile',   prototypeSixteenCtrl.mobile);
router.post('/prototype-sya-demo/mobile-app',   prototypeSixteenCtrl.mobileApp);
router.post('/prototype-sya-demo/mobileboth',   prototypeSixteenCtrl.mobileboth);
router.post('/prototype-sya-demo3/notifications',   prototypeSixteenCtrl.notifications);
router.post('/prototype-sya-demo/mrnDate',   prototypeSixteenCtrl.mrnDate);
router.post('/prototype-sya-demo/checkdate',   prototypeSixteenCtrl.checkdate);
router.post('/prototype-sya-demo/availability',   prototypeSixteenCtrl.availability);
router.post('/prototype-sya-demo/availability-app',   prototypeSixteenCtrl.availabilityApp);
router.post('/prototype-sya-demo/address-app',   prototypeSixteenCtrl.addressApp);
router.post('/prototype-sya-demo/mrnhave',   prototypeSixteenCtrl.mrnhave);
router.post('/prototype-sya-demo/contactdwp',   prototypeSixteenCtrl.contactdwp);

router.get('/prototype-24/validate',   prototypeSeventeenCtrl.validateCaseReference);
router.get('/prototype-24/validatemulti',   prototypeSeventeenCtrl.validateCaseReferenceMulti);
router.get('/prototype-24/validatereference',   prototypeSeventeenCtrl.validateReference);
router.get('/prototype-24/validate-surname',   prototypeSeventeenCtrl.validateSurname);
router.get('/prototype-24/status',   prototypeSeventeenCtrl.getAppealStatus);
router.post('/prototype-24/appointee',   prototypeSeventeenCtrl.appointee);
router.post('/prototype-24/representative',   prototypeSeventeenCtrl.representative);
router.post('/prototype-24/representative-app',   prototypeSeventeenCtrl.representativeApp);
router.post('/prototype-24/hearing',   prototypeSeventeenCtrl.hearing);
router.post('/prototype-24/hearing-app',   prototypeSeventeenCtrl.hearingApp);
router.post('/prototype-24/arrangements',   prototypeSeventeenCtrl.arrangements);
router.post('/prototype-24/arrangements-app',   prototypeSeventeenCtrl.arrangementsApp);
router.post('/prototype-24/mobile',   prototypeSeventeenCtrl.mobile);
router.post('/prototype-24/mobile-app',   prototypeSeventeenCtrl.mobileApp);
router.post('/prototype-24/mobileboth',   prototypeSeventeenCtrl.mobileboth);
router.post('/prototype-24/notifications',   prototypeSeventeenCtrl.notifications);
router.post('/prototype-24/notificationstype',   prototypeSeventeenCtrl.notificationstype);
router.post('/prototype-24/notificationsmobile',   prototypeSeventeenCtrl.notificationsmobile);
router.post('/prototype-24/mrnDate',   prototypeSeventeenCtrl.mrnDate);
router.post('/prototype-24/checkdate',   prototypeSeventeenCtrl.checkdate);
router.post('/prototype-24/availability',   prototypeSeventeenCtrl.availability);
router.post('/prototype-24/availability-app',   prototypeSeventeenCtrl.availabilityApp);
router.post('/prototype-24/address-app',   prototypeSeventeenCtrl.addressApp);
router.post('/prototype-24/mrnhave',   prototypeSeventeenCtrl.mrnhave);
router.post('/prototype-24/contactdwp',   prototypeSeventeenCtrl.contactdwp);
router.post('/prototype-24/evidenceoptions',   prototypeSeventeenCtrl.evidenceoptions);
router.post('/prototype-24/evidencechannel',   prototypeSeventeenCtrl.evidencechannel);
router.post('/prototype-24/evidenceprovide',   prototypeSeventeenCtrl.evidenceprovide);

router.get('/prototype-beta-24/submit-your-appeal/012-evidence-reminder', prototypeSeventeenCtrl.evidenceReminder);
router.get('/prototype-beta-24/evidence-upload', prototypeSeventeenCtrl.evidenceUpload);

router.get('/prototype-180425/validate',   prototypeEightteenCtrl.validateCaseReference);
router.get('/prototype-180425/validatemulti',   prototypeEightteenCtrl.validateCaseReferenceMulti);
router.get('/prototype-180425/validatereference',   prototypeEightteenCtrl.validateReference);
router.get('/prototype-180425/validate-surname',   prototypeEightteenCtrl.validateSurname);
router.get('/prototype-180425/status',   prototypeEightteenCtrl.getAppealStatus);
router.post('/prototype-180425/appointee',   prototypeEightteenCtrl.appointee);
router.post('/prototype-180425/representative',   prototypeEightteenCtrl.representative);
router.post('/prototype-180425/representative-app',   prototypeEightteenCtrl.representativeApp);
router.post('/prototype-180425/hearing',   prototypeEightteenCtrl.hearing);
router.post('/prototype-180425/hearing-app',   prototypeEightteenCtrl.hearingApp);
router.post('/prototype-180425/arrangements',   prototypeEightteenCtrl.arrangements);
router.post('/prototype-180425/arrangements-app',   prototypeEightteenCtrl.arrangementsApp);
router.post('/prototype-180425/mobile',   prototypeEightteenCtrl.mobile);
router.post('/prototype-180425/mobile-app',   prototypeEightteenCtrl.mobileApp);
router.post('/prototype-180425/mobileboth',   prototypeEightteenCtrl.mobileboth);
router.post('/prototype-180425/notifications',   prototypeEightteenCtrl.notifications);
router.post('/prototype-180425/notificationstype',   prototypeEightteenCtrl.notificationstype);
router.post('/prototype-180425/notificationsmobile',   prototypeEightteenCtrl.notificationsmobile);
router.post('/prototype-180425/mrnDate',   prototypeEightteenCtrl.mrnDate);
router.post('/prototype-180425/checkdate',   prototypeEightteenCtrl.checkdate);
router.post('/prototype-180425/availability',   prototypeEightteenCtrl.availability);
router.post('/prototype-180425/availability-app',   prototypeEightteenCtrl.availabilityApp);
router.post('/prototype-180425/address-app',   prototypeEightteenCtrl.addressApp);
router.post('/prototype-180425/mrnhave',   prototypeEightteenCtrl.mrnhave);
router.post('/prototype-180425/contactdwp',   prototypeEightteenCtrl.contactdwp);
router.post('/prototype-180425/evidenceoptions',   prototypeEightteenCtrl.evidenceoptions);
router.post('/prototype-180425/evidencechannel',   prototypeEightteenCtrl.evidencechannel);
router.post('/prototype-180425/evidenceprovide',   prototypeEightteenCtrl.evidenceprovide);

router.get('/prototype-beta-180425/submit-your-appeal/012-evidence-reminder', prototypeEightteenCtrl.evidenceReminder);
router.get('/prototype-beta-180425/evidence-upload', prototypeEightteenCtrl.evidenceUpload);


router.get('/prototype-180517/validate',   prototypeNineteenCtrl.validateCaseReference);
router.get('/prototype-180517/validatemulti',   prototypeNineteenCtrl.validateCaseReferenceMulti);
router.get('/prototype-180517/validatereference',   prototypeNineteenCtrl.validateReference);
router.get('/prototype-180517/validate-surname',   prototypeNineteenCtrl.validateSurname);
router.get('/prototype-180517/status',   prototypeNineteenCtrl.getAppealStatus);
router.post('/prototype-180517/appointee',   prototypeNineteenCtrl.appointee);
router.post('/prototype-180517/representative',   prototypeNineteenCtrl.representative);
router.post('/prototype-180517/representative-app',   prototypeNineteenCtrl.representativeApp);
router.post('/prototype-180517/hearing',   prototypeNineteenCtrl.hearing);
router.post('/prototype-180517/hearing-app',   prototypeNineteenCtrl.hearingApp);
router.post('/prototype-180517/arrangements',   prototypeNineteenCtrl.arrangements);
router.post('/prototype-180517/arrangements-app',   prototypeNineteenCtrl.arrangementsApp);
router.post('/prototype-180517/mobile',   prototypeNineteenCtrl.mobile);
router.post('/prototype-180517/mobile-app',   prototypeNineteenCtrl.mobileApp);
router.post('/prototype-180517/mobileboth',   prototypeNineteenCtrl.mobileboth);
router.post('/prototype-180517/notifications',   prototypeNineteenCtrl.notifications);
router.post('/prototype-180517/notificationstype',   prototypeNineteenCtrl.notificationstype);
router.post('/prototype-180517/notificationsmobile',   prototypeNineteenCtrl.notificationsmobile);
router.post('/prototype-180517/mrnDate',   prototypeNineteenCtrl.mrnDate);
router.post('/prototype-180517/checkdate',   prototypeNineteenCtrl.checkdate);
router.post('/prototype-180517/availability',   prototypeNineteenCtrl.availability);
router.post('/prototype-180517/availability-app',   prototypeNineteenCtrl.availabilityApp);
router.post('/prototype-180517/address-app',   prototypeNineteenCtrl.addressApp);
router.post('/prototype-180517/mrnhave',   prototypeNineteenCtrl.mrnhave);
router.post('/prototype-180517/contactdwp',   prototypeNineteenCtrl.contactdwp);
router.post('/prototype-180517/evidenceoptions',   prototypeNineteenCtrl.evidenceoptions);
router.post('/prototype-180517/evidencechannel',   prototypeNineteenCtrl.evidencechannel);
router.post('/prototype-180517/evidenceprovide',   prototypeNineteenCtrl.evidenceprovide);
router.post('/prototype-180517/saveappeal',   prototypeNineteenCtrl.saveappeal);
router.post('/prototype-180517/uploadaccount',   prototypeNineteenCtrl.uploadaccount);
router.post('/prototype-180517/appealaccess',   prototypeNineteenCtrl.appealaccess);
router.post('/prototype-180517/emailsavedappeal',   prototypeNineteenCtrl.emailsavedappeal);
router.post('/prototype-180517/updateemail',   prototypeNineteenCtrl.updateemail);
router.post('/prototype-180517/smssignup',   prototypeNineteenCtrl.smssignup);


router.post('/prototype-180522/appointee',   prototypeTwentyCtrl.appointee);
router.post('/prototype-180522/representative',   prototypeTwentyCtrl.representative);
router.post('/prototype-180522/representative-app',   prototypeTwentyCtrl.representativeApp);
router.post('/prototype-180522/hearing',   prototypeTwentyCtrl.hearing);
router.post('/prototype-180522/hearing-app',   prototypeTwentyCtrl.hearingApp);
router.post('/prototype-180522/arrangements',   prototypeTwentyCtrl.arrangements);
router.post('/prototype-180522/arrangements-app',   prototypeTwentyCtrl.arrangementsApp);
router.post('/prototype-180522/mobile',   prototypeTwentyCtrl.mobile);
router.post('/prototype-180522/mobile-app',   prototypeTwentyCtrl.mobileApp);
router.post('/prototype-180522/mobileboth',   prototypeTwentyCtrl.mobileboth);
router.post('/prototype-180522/notifications',   prototypeTwentyCtrl.notifications);
router.post('/prototype-180522/notificationstype',   prototypeTwentyCtrl.notificationstype);
router.post('/prototype-180522/notificationsmobile',   prototypeTwentyCtrl.notificationsmobile);
router.post('/prototype-180522/mrnDate',   prototypeTwentyCtrl.mrnDate);
router.post('/prototype-180522/checkdate',   prototypeTwentyCtrl.checkdate);
router.post('/prototype-180522/availability',   prototypeTwentyCtrl.availability);
router.post('/prototype-180522/availability-app',   prototypeTwentyCtrl.availabilityApp);
router.post('/prototype-180522/address-app',   prototypeTwentyCtrl.addressApp);
router.post('/prototype-180522/mrnhave',   prototypeTwentyCtrl.mrnhave);
router.post('/prototype-180522/contactdwp',   prototypeTwentyCtrl.contactdwp);
router.post('/prototype-180522/evidenceoptions',   prototypeTwentyCtrl.evidenceoptions);
router.post('/prototype-180522/evidencechannel',   prototypeTwentyCtrl.evidencechannel);
router.post('/prototype-180522/evidenceprovide',   prototypeTwentyCtrl.evidenceprovide);
router.post('/prototype-180522/saveappeal',   prototypeTwentyCtrl.saveappeal);
router.post('/prototype-180522/uploadaccount',   prototypeTwentyCtrl.uploadaccount);
router.post('/prototype-180522/appealaccess',   prototypeTwentyCtrl.appealaccess);
router.post('/prototype-180522/emailsavedappeal',   prototypeTwentyCtrl.emailsavedappeal);
router.post('/prototype-180522/updateemail',   prototypeTwentyCtrl.updateemail);
router.post('/prototype-180522/smssignup',   prototypeTwentyCtrl.smssignup);
router.post('/prototype-180522/smssignupapp',   prototypeTwentyCtrl.smssignupapp);
router.post('/prototype-180522/manageemail',   prototypeTwentyCtrl.manageemail);


// Prototype test - 17.01.2019
router.post('/prototype-190117/appointee',   prototypeTwentyOneCtrl.appointee);
router.post('/prototype-190117/representative',   prototypeTwentyOneCtrl.representative);
router.post('/prototype-190117/representative-app',   prototypeTwentyOneCtrl.representativeApp);
router.post('/prototype-190117/hearing',   prototypeTwentyOneCtrl.hearing);
router.post('/prototype-190117/hearing-app',   prototypeTwentyOneCtrl.hearingApp);
router.post('/prototype-190117/arrangements',   prototypeTwentyOneCtrl.arrangements);
router.post('/prototype-190117/arrangements-app',   prototypeTwentyOneCtrl.arrangementsApp);
router.post('/prototype-190117/mobile',   prototypeTwentyOneCtrl.mobile);
router.post('/prototype-190117/mobile-app',   prototypeTwentyOneCtrl.mobileApp);
router.post('/prototype-190117/mobileboth',   prototypeTwentyOneCtrl.mobileboth);
router.post('/prototype-190117/notifications',   prototypeTwentyOneCtrl.notifications);
router.post('/prototype-190117/notificationstype',   prototypeTwentyOneCtrl.notificationstype);
router.post('/prototype-190117/notificationsmobile',   prototypeTwentyOneCtrl.notificationsmobile);
router.post('/prototype-190117/mrnDate',   prototypeTwentyOneCtrl.mrnDate);
router.post('/prototype-190117/checkdate',   prototypeTwentyOneCtrl.checkdate);
router.post('/prototype-190117/availability',   prototypeTwentyOneCtrl.availability);
router.post('/prototype-190117/availability-app',   prototypeTwentyOneCtrl.availabilityApp);
router.post('/prototype-190117/address-app',   prototypeTwentyOneCtrl.addressApp);
router.post('/prototype-190117/mrnhave',   prototypeTwentyOneCtrl.mrnhave);
router.post('/prototype-190117/contactdwp',   prototypeTwentyOneCtrl.contactdwp);
router.post('/prototype-190117/evidenceoptions',   prototypeTwentyOneCtrl.evidenceoptions);
router.post('/prototype-190117/evidencechannel',   prototypeTwentyOneCtrl.evidencechannel);
router.post('/prototype-190117/evidenceprovide',   prototypeTwentyOneCtrl.evidenceprovide);
router.post('/prototype-190117/saveappeal',   prototypeTwentyOneCtrl.saveappeal);
router.post('/prototype-190117/uploadaccount',   prototypeTwentyOneCtrl.uploadaccount);
router.post('/prototype-190117/appealaccess',   prototypeTwentyOneCtrl.appealaccess);
router.post('/prototype-190117/emailsavedappeal',   prototypeTwentyOneCtrl.emailsavedappeal);
router.post('/prototype-190117/updateemail',   prototypeTwentyOneCtrl.updateemail);
router.post('/prototype-190117/smssignup',   prototypeTwentyOneCtrl.smssignup);
router.post('/prototype-190117/smssignupapp',   prototypeTwentyOneCtrl.smssignupapp);
router.post('/prototype-190117/manageemail',   prototypeTwentyOneCtrl.manageemail);


// Prototype test - 30.01.2019
router.post('/prototype-190130/appointee',   prototypeTwentyTwoCtrl.appointee);
router.post('/prototype-190130/representative',   prototypeTwentyTwoCtrl.representative);
router.post('/prototype-190130/representative-app',   prototypeTwentyTwoCtrl.representativeApp);
router.post('/prototype-190130/hearing',   prototypeTwentyTwoCtrl.hearing);
router.post('/prototype-190130/hearing-app',   prototypeTwentyTwoCtrl.hearingApp);
router.post('/prototype-190130/arrangements',   prototypeTwentyTwoCtrl.arrangements);
router.post('/prototype-190130/arrangements-app',   prototypeTwentyTwoCtrl.arrangementsApp);
router.post('/prototype-190130/mobile',   prototypeTwentyTwoCtrl.mobile);
router.post('/prototype-190130/mobile-app',   prototypeTwentyTwoCtrl.mobileApp);
router.post('/prototype-190130/mobileboth',   prototypeTwentyTwoCtrl.mobileboth);
router.post('/prototype-190130/notifications',   prototypeTwentyTwoCtrl.notifications);
router.post('/prototype-190130/notificationstype',   prototypeTwentyTwoCtrl.notificationstype);
router.post('/prototype-190130/notificationsmobile',   prototypeTwentyTwoCtrl.notificationsmobile);
router.post('/prototype-190130/mrnDate',   prototypeTwentyTwoCtrl.mrnDate);
router.post('/prototype-190130/checkdate',   prototypeTwentyTwoCtrl.checkdate);
router.post('/prototype-190130/availability',   prototypeTwentyTwoCtrl.availability);
router.post('/prototype-190130/availability-app',   prototypeTwentyTwoCtrl.availabilityApp);
router.post('/prototype-190130/address-app',   prototypeTwentyTwoCtrl.addressApp);
router.post('/prototype-190130/mrnhave',   prototypeTwentyTwoCtrl.mrnhave);
router.post('/prototype-190130/contactdwp',   prototypeTwentyTwoCtrl.contactdwp);
router.post('/prototype-190130/evidenceoptions',   prototypeTwentyTwoCtrl.evidenceoptions);
router.post('/prototype-190130/evidencechannel',   prototypeTwentyTwoCtrl.evidencechannel);
router.post('/prototype-190130/evidenceprovide',   prototypeTwentyTwoCtrl.evidenceprovide);
router.post('/prototype-190130/saveappeal',   prototypeTwentyTwoCtrl.saveappeal);
router.post('/prototype-190130/uploadaccount',   prototypeTwentyTwoCtrl.uploadaccount);
router.post('/prototype-190130/appealaccess',   prototypeTwentyTwoCtrl.appealaccess);
router.post('/prototype-190130/emailsavedappeal',   prototypeTwentyTwoCtrl.emailsavedappeal);
router.post('/prototype-190130/updateemail',   prototypeTwentyTwoCtrl.updateemail);
router.post('/prototype-190130/smssignup',   prototypeTwentyTwoCtrl.smssignup);
router.post('/prototype-190130/smssignupapp',   prototypeTwentyTwoCtrl.smssignupapp);
router.post('/prototype-190130/manageemail',   prototypeTwentyTwoCtrl.manageemail);

// Prototype test - 11.02.2019
router.post('/prototype-190211/appointee',   prototypeTwentyThreeCtrl.appointee);
router.post('/prototype-190211/representative',   prototypeTwentyThreeCtrl.representative);
router.post('/prototype-190211/representative-app',   prototypeTwentyThreeCtrl.representativeApp);
router.post('/prototype-190211/hearing',   prototypeTwentyThreeCtrl.hearing);
router.post('/prototype-190211/hearing-app',   prototypeTwentyThreeCtrl.hearingApp);
router.post('/prototype-190211/arrangements',   prototypeTwentyThreeCtrl.arrangements);
router.post('/prototype-190211/arrangements-app',   prototypeTwentyThreeCtrl.arrangementsApp);
router.post('/prototype-190211/mobile',   prototypeTwentyThreeCtrl.mobile);
router.post('/prototype-190211/mobile-app',   prototypeTwentyThreeCtrl.mobileApp);
router.post('/prototype-190211/mobileboth',   prototypeTwentyThreeCtrl.mobileboth);
router.post('/prototype-190211/notifications',   prototypeTwentyThreeCtrl.notifications);
router.post('/prototype-190211/notificationstype',   prototypeTwentyThreeCtrl.notificationstype);
router.post('/prototype-190211/notificationsmobile',   prototypeTwentyThreeCtrl.notificationsmobile);
router.post('/prototype-190211/mrnDate',   prototypeTwentyThreeCtrl.mrnDate);
router.post('/prototype-190211/checkdate',   prototypeTwentyThreeCtrl.checkdate);
router.post('/prototype-190211/availability',   prototypeTwentyThreeCtrl.availability);
router.post('/prototype-190211/availability-app',   prototypeTwentyThreeCtrl.availabilityApp);
router.post('/prototype-190211/address-app',   prototypeTwentyThreeCtrl.addressApp);
router.post('/prototype-190211/mrnhave',   prototypeTwentyThreeCtrl.mrnhave);
router.post('/prototype-190211/contactdwp',   prototypeTwentyThreeCtrl.contactdwp);
router.post('/prototype-190211/evidenceoptions',   prototypeTwentyThreeCtrl.evidenceoptions);
router.post('/prototype-190211/evidencechannel',   prototypeTwentyThreeCtrl.evidencechannel);
router.post('/prototype-190211/evidenceprovide',   prototypeTwentyThreeCtrl.evidenceprovide);
router.post('/prototype-190211/saveappeal',   prototypeTwentyThreeCtrl.saveappeal);
router.post('/prototype-190211/uploadaccount',   prototypeTwentyThreeCtrl.uploadaccount);
router.post('/prototype-190211/appealaccess',   prototypeTwentyThreeCtrl.appealaccess);
router.post('/prototype-190211/emailsavedappeal',   prototypeTwentyThreeCtrl.emailsavedappeal);
router.post('/prototype-190211/updateemail',   prototypeTwentyThreeCtrl.updateemail);
router.post('/prototype-190211/smssignup',   prototypeTwentyThreeCtrl.smssignup);
router.post('/prototype-190211/smssignupapp',   prototypeTwentyThreeCtrl.smssignupapp);
router.post('/prototype-190211/manageemail',   prototypeTwentyThreeCtrl.manageemail);


// Prototype test - MYA-hearing-01
router.post('/mya-hearing01/appointee',   prototypeTwentyFourCtrl.appointee);
router.post('/mya-hearing01/representative',   prototypeTwentyFourCtrl.representative);
router.post('/mya-hearing01/representative-app',   prototypeTwentyFourCtrl.representativeApp);
router.post('/mya-hearing01/hearing',   prototypeTwentyFourCtrl.hearing);
router.post('/mya-hearing01/hearing-app',   prototypeTwentyFourCtrl.hearingApp);
router.post('/mya-hearing01/arrangements',   prototypeTwentyFourCtrl.arrangements);
router.post('/mya-hearing01/arrangements-app',   prototypeTwentyFourCtrl.arrangementsApp);
router.post('/mya-hearing01/mobile',   prototypeTwentyFourCtrl.mobile);
router.post('/mya-hearing01/mobile-app',   prototypeTwentyFourCtrl.mobileApp);
router.post('/mya-hearing01/mobileboth',   prototypeTwentyFourCtrl.mobileboth);
router.post('/mya-hearing01/notifications',   prototypeTwentyFourCtrl.notifications);
router.post('/mya-hearing01/notificationstype',   prototypeTwentyFourCtrl.notificationstype);
router.post('/mya-hearing01/notificationsmobile',   prototypeTwentyFourCtrl.notificationsmobile);
router.post('/mya-hearing01/mrnDate',   prototypeTwentyFourCtrl.mrnDate);
router.post('/mya-hearing01/checkdate',   prototypeTwentyFourCtrl.checkdate);
router.post('/mya-hearing01/availability',   prototypeTwentyFourCtrl.availability);
router.post('/mya-hearing01/availability-app',   prototypeTwentyFourCtrl.availabilityApp);
router.post('/mya-hearing01/address-app',   prototypeTwentyFourCtrl.addressApp);
router.post('/mya-hearing01/mrnhave',   prototypeTwentyFourCtrl.mrnhave);
router.post('/mya-hearing01/contactdwp',   prototypeTwentyFourCtrl.contactdwp);
router.post('/mya-hearing01/evidenceoptions',   prototypeTwentyFourCtrl.evidenceoptions);
router.post('/mya-hearing01/evidencechannel',   prototypeTwentyFourCtrl.evidencechannel);
router.post('/mya-hearing01/evidenceprovide',   prototypeTwentyFourCtrl.evidenceprovide);
router.post('/mya-hearing01/saveappeal',   prototypeTwentyFourCtrl.saveappeal);
router.post('/mya-hearing01/uploadaccount',   prototypeTwentyFourCtrl.uploadaccount);
router.post('/mya-hearing01/appealaccess',   prototypeTwentyFourCtrl.appealaccess);
router.post('/mya-hearing01/emailsavedappeal',   prototypeTwentyFourCtrl.emailsavedappeal);
router.post('/mya-hearing01/updateemail',   prototypeTwentyFourCtrl.updateemail);
router.post('/mya-hearing01/smssignup',   prototypeTwentyFourCtrl.smssignup);
router.post('/mya-hearing01/smssignupapp',   prototypeTwentyFourCtrl.smssignupapp);
router.post('/mya-hearing01/manageemail',   prototypeTwentyFourCtrl.manageemail);

// Date Picker
router.get('/prototype-beta-180522/submit-your-appeal/016-hearing-dates', prototypeTwentyCtrl.hearingDates);
router.post('/prototype-180522/016-hearing-dates/:item', prototypeTwentyCtrl.addDate);
router.get('/prototype-180522/016-hearing-dates/:item/delete', prototypeTwentyCtrl.removeDate);

router.get('/prototype-beta-190117/submit-your-appeal/016-hearing-dates', prototypeTwentyOneCtrl.hearingDates);
router.post('/prototype-190117/016-hearing-dates/:item', prototypeTwentyOneCtrl.addDate);
router.get('/prototype-190117/016-hearing-dates/:item/delete', prototypeTwentyOneCtrl.removeDate);

router.get('/prototype-beta-190130/submit-your-appeal/016-hearing-dates', prototypeTwentyOneCtrl.hearingDates);
router.post('/prototype-190130/016-hearing-dates/:item', prototypeTwentyTwoCtrl.addDate);
router.get('/prototype-190130/016-hearing-dates/:item/delete', prototypeTwentyTwoCtrl.removeDate);

router.get('/prototype-beta-190211/submit-your-appeal/016-hearing-dates', prototypeTwentyThreeCtrl.hearingDates);
router.post('/prototype-190211/016-hearing-dates/:item', prototypeTwentyThreeCtrl.addDate);
router.get('/prototype-190211/016-hearing-dates/:item/delete', prototypeTwentyThreeCtrl.removeDate);

router.get('/mya-hearing01/submit-your-appeal/016-hearing-dates', prototypeTwentyFourCtrl.hearingDates);
router.post('/mya-hearing01/016-hearing-dates/:item', prototypeTwentyFourCtrl.addDate);
router.get('/mya-hearing01/016-hearing-dates/:item/delete', prototypeTwentyFourCtrl.removeDate);


//hearing-arrangements
router.get('/prototype-beta-180522/submit-your-appeal/015-hearing-arrangements', prototypeTwentyCtrl.hearingArrangements);
router.get('/prototype-beta-190117/submit-your-appeal/015-hearing-arrangements', prototypeTwentyOneCtrl.hearingArrangements);
router.get('/prototype-beta-190130/submit-your-appeal/015-hearing-arrangements', prototypeTwentyTwoCtrl.hearingArrangements);
router.get('/prototype-beta-190130/submit-your-appeal/015-hearing-arrangements', prototypeTwentyThreeCtrl.hearingArrangements);
router.get('/mya-hearing01/submit-your-appeal/015-hearing-arrangements', prototypeTwentyFourCtrl.hearingArrangements);

// Reason for Appeal
router.get('/prototype-beta-180517/submit-your-appeal/011-why-are-you-appealing', prototypeNineteenCtrl.reasonForAppeal);
router.get('/prototype-beta-180517/submit-your-appeal/011-why-are-you-appealing-fields/:fieldIndex', prototypeNineteenCtrl.editReasonForAppeal);
router.get('/prototype-beta-180517/submit-your-appeal/011-why-are-you-appealing-fields/:fieldIndex/delete', prototypeNineteenCtrl.deleteReasonForAppeal);
router.post('/prototype-180517/submit-your-appeal/reasonForAppeal/:fieldIndex', prototypeNineteenCtrl.updateEditedReasonForAppeal);
router.post('/prototype-180517/submit-your-appeal/reasonForAppeal', prototypeNineteenCtrl.addReasonForAppeal);
router.get('/prototype-beta-180517/submit-your-appeal/012-evidence-reminder', prototypeNineteenCtrl.evidenceReminder);
router.get('/prototype-beta-180517/evidence-upload', prototypeNineteenCtrl.evidenceUpload);

router.get('/prototype-beta-180522/submit-your-appeal/011-why-are-you-appealing', prototypeTwentyCtrl.reasonForAppeal);
router.get('/prototype-beta-180522/submit-your-appeal/011-why-are-you-appealing-fields/:fieldIndex', prototypeTwentyCtrl.editReasonForAppeal);
router.get('/prototype-beta-180522/submit-your-appeal/011-why-are-you-appealing-fields/:fieldIndex/delete', prototypeTwentyCtrl.deleteReasonForAppeal);
router.post('/prototype-180522/submit-your-appeal/reasonForAppeal/:fieldIndex', prototypeTwentyCtrl.updateEditedReasonForAppeal);
router.post('/prototype-180522/submit-your-appeal/reasonForAppeal', prototypeTwentyCtrl.addReasonForAppeal);
router.get('/prototype-beta-180522/submit-your-appeal/012-evidence-reminder', prototypeTwentyCtrl.evidenceReminder);
router.get('/prototype-beta-180522/evidence-upload', prototypeTwentyCtrl.evidenceUpload);

router.get('/prototype-beta-190117/submit-your-appeal/011-why-are-you-appealing', prototypeTwentyOneCtrl.reasonForAppeal);
router.get('/prototype-beta-190117/submit-your-appeal/011-why-are-you-appealing-fields/:fieldIndex', prototypeTwentyOneCtrl.editReasonForAppeal);
router.get('/prototype-beta-190117/submit-your-appeal/011-why-are-you-appealing-fields/:fieldIndex/delete', prototypeTwentyOneCtrl.deleteReasonForAppeal);
router.post('/prototype-190117/submit-your-appeal/reasonForAppeal/:fieldIndex', prototypeTwentyOneCtrl.updateEditedReasonForAppeal);
router.post('/prototype-190117/submit-your-appeal/reasonForAppeal', prototypeTwentyOneCtrl.addReasonForAppeal);
router.get('/prototype-beta-190117/submit-your-appeal/012-evidence-reminder', prototypeTwentyOneCtrl.evidenceReminder);
router.get('/prototype-beta-190117/evidence-upload', prototypeTwentyOneCtrl.evidenceUpload);

router.get('/prototype-beta-190130/submit-your-appeal/011-why-are-you-appealing', prototypeTwentyTwoCtrl.reasonForAppeal);
router.get('/prototype-beta-190130/submit-your-appeal/011-why-are-you-appealing-fields/:fieldIndex', prototypeTwentyTwoCtrl.editReasonForAppeal);
router.get('/prototype-beta-190130/submit-your-appeal/011-why-are-you-appealing-fields/:fieldIndex/delete', prototypeTwentyTwoCtrl.deleteReasonForAppeal);
router.post('/prototype-190130/submit-your-appeal/reasonForAppeal/:fieldIndex', prototypeTwentyTwoCtrl.updateEditedReasonForAppeal);
router.post('/prototype-190130/submit-your-appeal/reasonForAppeal', prototypeTwentyTwoCtrl.addReasonForAppeal);
router.get('/prototype-beta-190130/submit-your-appeal/012-evidence-reminder', prototypeTwentyTwoCtrl.evidenceReminder);
router.get('/prototype-beta-190130/evidence-upload', prototypeTwentyTwoCtrl.evidenceUpload);

router.get('/prototype-beta-190211/submit-your-appeal/011-why-are-you-appealing', prototypeTwentyThreeCtrl.reasonForAppeal);
router.get('/prototype-beta-190211/submit-your-appeal/011-why-are-you-appealing-fields/:fieldIndex', prototypeTwentyThreeCtrl.editReasonForAppeal);
router.get('/prototype-beta-190211/submit-your-appeal/011-why-are-you-appealing-fields/:fieldIndex/delete', prototypeTwentyThreeCtrl.deleteReasonForAppeal);
router.post('/prototype-190211/submit-your-appeal/reasonForAppeal/:fieldIndex', prototypeTwentyThreeCtrl.updateEditedReasonForAppeal);
router.post('/prototype-190211/submit-your-appeal/reasonForAppeal', prototypeTwentyThreeCtrl.addReasonForAppeal);
router.get('/prototype-beta-190211/submit-your-appeal/012-evidence-reminder', prototypeTwentyThreeCtrl.evidenceReminder);
router.get('/prototype-beta-190211/evidence-upload', prototypeTwentyThreeCtrl.evidenceUpload);


router.get('/mya-hearing01/submit-your-appeal/011-why-are-you-appealing', prototypeTwentyFourCtrl.reasonForAppeal);
router.get('/mya-hearing01/submit-your-appeal/011-why-are-you-appealing-fields/:fieldIndex', prototypeTwentyFourCtrl.editReasonForAppeal);
router.get('/mya-hearing01/submit-your-appeal/011-why-are-you-appealing-fields/:fieldIndex/delete', prototypeTwentyFourCtrl.deleteReasonForAppeal);
router.post('/mya-hearing01/submit-your-appeal/reasonForAppeal/:fieldIndex', prototypeTwentyFourCtrl.updateEditedReasonForAppeal);
router.post('/mya-hearing01/submit-your-appeal/reasonForAppeal', prototypeTwentyFourCtrl.addReasonForAppeal);
router.get('/mya-hearing01/submit-your-appeal/012-evidence-reminder', prototypeTwentyFourCtrl.evidenceReminder);
router.get('/mya-hearing01/evidence-upload', prototypeTwentyFourCtrl.evidenceUpload);


// File uploading for SYA and TYA
router.post('/file-upload', upload.single('fileUpload'), prototypeSeventeenCtrl.fileUpload);
router.post('/file-delete', prototypeSeventeenCtrl.fileDelete);
router.get('/file-get', prototypeSeventeenCtrl.getFiles);

// File uploading for SYA and TYA
router.post('/file-upload', upload.single('fileUpload'), prototypeEightteenCtrl.fileUpload);
router.post('/file-delete', prototypeEightteenCtrl.fileDelete);
router.get('/file-get', prototypeEightteenCtrl.getFiles);

// File uploading for SYA and TYA
router.post('/file-upload', upload.single('fileUpload'), prototypeNineteenCtrl.fileUpload);
router.post('/file-delete', prototypeNineteenCtrl.fileDelete);
router.get('/file-get', prototypeNineteenCtrl.getFiles);

// File uploading for SYA and TYA
router.post('/file-upload', upload.single('fileUpload'), prototypeTwentyCtrl.fileUpload);
router.post('/file-delete', prototypeTwentyCtrl.fileDelete);
router.get('/file-get', prototypeTwentyCtrl.getFiles);

// File uploading for SYA and TYA
router.post('/file-upload', upload.single('fileUpload'), prototypeTwentyOneCtrl.fileUpload);
router.post('/file-delete', prototypeTwentyOneCtrl.fileDelete);
router.get('/file-get', prototypeTwentyOneCtrl.getFiles);

// File uploading for SYA and TYA
router.post('/file-upload', upload.single('fileUpload'), prototypeTwentyTwoCtrl.fileUpload);
router.post('/file-delete', prototypeTwentyTwoCtrl.fileDelete);
router.get('/file-get', prototypeTwentyTwoCtrl.getFiles);

// File uploading for SYA and TYA
router.post('/file-upload', upload.single('fileUpload'), prototypeTwentyThreeCtrl.fileUpload);
router.post('/file-delete', prototypeTwentyThreeCtrl.fileDelete);
router.get('/file-get', prototypeTwentyThreeCtrl.getFiles);

// File uploading for SYA and TYA
router.post('/file-upload', upload.single('fileUpload'), prototypeTwentyFourCtrl.fileUpload);
router.post('/file-delete', prototypeTwentyFourCtrl.fileDelete);
router.get('/file-get', prototypeTwentyFourCtrl.getFiles);


// IDAM Screens 180425
router.get('/prototype-beta-180425/idam-account-activated', prototypeEightteenCtrl.idamAccountActivated);
router.get('/prototype-beta-180425/idam-create-account', prototypeEightteenCtrl.idamCreateAccount);
router.get('/prototype-beta-180425/idam-create-password', prototypeEightteenCtrl.idamCreatePassword);
router.get('/prototype-beta-180425/idam-sign-in', prototypeEightteenCtrl.idamSignIn);
router.get('/prototype-beta-180425/idam-sign-in-activated', prototypeEightteenCtrl.idamSignInActivated);
router.get('/prototype-beta-180425/idam-sign-in-error', prototypeEightteenCtrl.idamSignInError);
router.get('/prototype-beta-180425/idam-verify-email', prototypeEightteenCtrl.idamVerifyEmail);

// IDAM Screens 180517
router.get('/prototype-beta-180517/idam-account-activated', prototypeNineteenCtrl.idamAccountActivated);
router.get('/prototype-beta-180517/idam-create-account', prototypeNineteenCtrl.idamCreateAccount);
router.get('/prototype-beta-180517/idam-create-password', prototypeNineteenCtrl.idamCreatePassword);
router.get('/prototype-beta-180517/idam-sign-in', prototypeNineteenCtrl.idamSignIn);
router.get('/prototype-beta-180517/idam-sign-in-activated', prototypeNineteenCtrl.idamSignInActivated);
router.get('/prototype-beta-180517/idam-sign-in-error', prototypeNineteenCtrl.idamSignInError);
router.get('/prototype-beta-180517/idam-verify-email', prototypeNineteenCtrl.idamVerifyEmail);




module.exports = router;
