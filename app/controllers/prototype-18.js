var serviceFactory = require('../services/serviceFactory');
var appealStatusService = serviceFactory.get('appealStatus');
var DateUtils = require('./DateUtils');

var controller = {

    appointee: function(req, res) {
        if (req.body.radioGroup === 'appointee') {
            res.render('prototype-beta-18/submit-your-appeal/004-appointee-details');
        } else if (req.body.radioGroup === 'nonAppointee') {
            res.render('prototype-beta-18/submit-your-appeal/004-your-details');
        }
    },

    representative: function(req, res) {
        if (req.body.radioGroup === 'rep') {
            res.render('prototype-beta-18/submit-your-appeal/009-reps-details');
        } else if (req.body.radioGroup === 'noRep') {
            res.render('prototype-beta-18/submit-your-appeal/011-why-are-you-appealing');
        }
    },


   

    hearing: function(req, res) {
        if (req.body.radioGroup === 'attend') {
            res.render('prototype-beta-18/submit-your-appeal/014-hearing-arrangements-needed');
        } else if (req.body.radioGroup === 'notAttend') {
            res.render('prototype-beta-18/submit-your-appeal/013-hearing-not-attending');
        }
    },

    arrangements: function(req, res) {
        if (req.body.radioGroup === 'arrangementsRequired') {
            res.render('prototype-beta-18/submit-your-appeal/015-hearing-arrangements');
        } else if (req.body.radioGroup === 'arrangementsNotRequired') {
            res.render('prototype-beta-18/submit-your-appeal/016-hearing-availability');
        }
    },


    availability: function(req, res) {
        if (req.body.radioGroup === 'datesYes') {
            res.render('prototype-beta-18/submit-your-appeal/016-hearing-dates');
        } else if (req.body.radioGroup === 'datesNo') {
            res.render('prototype-beta-18/submit-your-appeal/017-check-your-answers');
        }
    },

    mobile: function(req, res) {
        if (req.body.radioGroup === 'usemobile') {
            res.render('prototype-beta-18/submit-your-appeal/007-sms-confirmation');
        } else if (req.body.radioGroup === 'newmobile') {
            res.render('prototype-beta-18/submit-your-appeal/006-enter-mobile-number');
        }
    },

    mobileboth: function(req, res) {
        if (req.body.radioGroup === 'usemobileboth') {
            res.render('prototype-beta-18/submit-your-appeal/007-sms-email-confirmation');
        } else if (req.body.radioGroup === 'newmobileboth') {
            res.render('prototype-beta-18/submit-your-appeal/006-enter-mobile-number-both');
        }
    },


   checkdate: function(req, res) {
        if (req.body.radioGroup === 'correctdate') {
            res.render('prototype-beta-18/submit-your-appeal/003-3-why-appeal-late-1month');
        } else if (req.body.radioGroup === 'wrongdate') {
            res.render('prototype-beta-18/submit-your-appeal/003-mrn-date');
        }
    },


    notifications: function(req, res) {
        if (req.body.radioGroup === 'email') {
            res.render('prototype-beta-18/submit-your-appeal/006-enter-email');
        } else if (req.body.radioGroup === 'text') {
            res.render('prototype-beta-18/submit-your-appeal/006-mobile-number-provided');

        } else if (req.body.radioGroup === 'both') {
            res.render('prototype-beta-18/submit-your-appeal/006-enter-email-both');

        } else if (req.body.radioGroup === 'neither') {
            res.render('prototype-beta-18/submit-your-appeal/008-representative');
        }
    },

    // The class above has a dependency on moment.js which makes our life easier when dealing with dates. 
// To create a moment object from user input (e.g. MRN date) you would do the following:

        mrnDate: function(req, res) {        
        var day = req.body.day;
        var month = req.body.month;
        var year = req.body.year;
        console.log(day,month,year);
        const dob = `${day}-${month}-${year}`;
        console.log(dob);
        var mDate = DateUtils.createMoment(day, month, year); 

        if (DateUtils.isLessThanOrEqualToAMonth(mDate)) {
            res.render('prototype-beta-18/submit-your-appeal/004-appointee');
            return;
        }

        if (DateUtils.isGreaterThanAMonth(mDate) && DateUtils.isLessThanOrEqualToThirteenMonths(mDate)) {
            res.render('prototype-beta-18/submit-your-appeal/003-0-check-mrn-date');
            return;
        }

        if (DateUtils.isGreaterThanThirteenMonths(mDate)) {
            res.render('prototype-beta-18/submit-your-appeal/003-4-why-appeal-late-13months');
            return;
        }
    },

getAppealStatus: function (req, res) {
    return appealStatusService.getAppealStatus(req)
    .then(function (result, error) {
        var data = result.body;
        data.status = data.status.toLowerCase().split('_').join('');
        res.render('prototype-beta-07/status-pb-' + req.query.pb, data);
    }, function (error) {
        res.send('HTTP '  + error.status + ': ' + error.message);
    });
},

validateCaseReference: function (req, res) {
    var reference = req.query.reference,
    surname = req.query.surname,
    errors = {
        reference: [],
        surname: [],
        nomatch: []
    },
    caseRefNumberRegEx = /^\d{3}\/\d{2}\/\d{5}$/,
    surnameRegEx = /^[a-zA-Z]{3,}$/,
    caseRefNumberMatchesRegEx,
    surnameMatchesRegEx;

    if (reference === '') {
        errors.reference.push("No appeal reference number entered.");
        errors.reference.push("You haven't entered an appeal reference number. Enter it to find your appeal.");
    }

    if(surname === '') {
        errors.surname.push("No surname entered.");
        errors.surname.push("You haven't entered a surname. Enter your surname to continue.");
    }

    if(surname === 'wrong') {
        errors.nomatch.push("Your details don’t match our records.");
        errors.nomatch.push("Check any correspondence you’ve received about your appeal and enter them again.");
        res.render('prototype-18/track-your-appeal-error-no-match', {
            errorMessages: errors,
            caseRefNumber: reference,
            surname: surname
        });
        return;
    }

    if(errors.reference.length || errors.surname.length) {
        res.render('prototype-18/track-your-appeal-error', {
            errorMessages: errors,
            caseRefNumber: reference,
            surname: surname
        });
        return;
    }

    caseRefNumberMatchesRegEx = caseRefNumberRegEx.test(reference);

    if(!caseRefNumberMatchesRegEx) {
        errors.reference.push("Invalid appeal reference number entered.");
        errors.reference.push("You’ve entered an invalid appeal reference number. Check it and enter it again, including the forward slashes.");
    }

    surnameMatchesRegEx = surnameRegEx.test(surname);

    if(!surnameMatchesRegEx) {
        errors.surname.push("Invalid surname entered.");
        errors.surname.push("You’ve entered an invalid surname. Check it and enter it again.");
    }

    if(errors.reference.length || errors.surname.length) {
        res.render('prototype-18/track-your-appeal-error', {
            errorMessages: errors,
            caseRefNumber: reference,
            surname: surname
        });
        return;
    }

    req.query.reference = 'SC' + req.query.reference;

    return appealStatusService.getAppealStatus(req)
    .then(function (result, error) {
        var data = result.body;
        data.status = data.status.toLowerCase().split('_').join('');
        console.log(JSON.stringify(data, null, 2));
        res.render('prototype-18/status-pb-one', data);
                //res.render('prototype-18/status-pb-four', data);
                //res.render('prototype-18/status-pb-seven', data);
                //res.render('prototype-18/status-pb-ten', data);
            }, function (error) {
                res.send('HTTP '  + error.status + ': ' + error.message);
            });

},

validateCaseReferenceMulti: function(req, res) {
    var errors = [];
    var caseRef1 = req.query.caseref1;
    var caseRef2 = req.query.caseref2;
    var caseRef3 = req.query.caseref3;

    var caseRef1RegEx = /^\d{3}$/;
    var caseRef2RegEx = /^\d{2}$/;
    var caseRef3RegEx = /^\d{5}$/;

    var caseRef1RegExMatch = caseRef1RegEx.test(caseRef1);
    var caseRef2RegExMatch = caseRef2RegEx.test(caseRef2);
    var caseRef3RegExMatch = caseRef3RegEx.test(caseRef3);

    if(caseRef1 === '' && caseRef2 === '' && caseRef3 === '') {
        errors.push("You have not entered an appeal reference number. Enter it to find your appeal.");
        errors.push("No appeal reference number entered.");
        res.render('prototype-18/track-your-appeal-error-multi', {
            errorMessages: errors,
            caseRefNumbers: [caseRef1, caseRef2, caseRef3]
        });
        return;
    }


    if(!caseRef1RegExMatch || !caseRef2RegExMatch || !caseRef3RegExMatch) {
        errors.push("You’ve entered an invalid appeal reference number. Check it and enter it again.");
        errors.push("Invalid appeal reference number entered.");
        res.render('prototype-18/track-your-appeal-error-multi', {
            errorMessages: errors,
            caseRefNumbers: [caseRef1, caseRef2, caseRef3]
        });
        return;
    }

    req.query.reference = 'SC' + caseRef1 + '/' + caseRef2 + '/' + caseRef3;

    return appealStatusService.getAppealStatus(req)
    .then(function (result, error) {
        var data = result.body;
        data.status = data.status.toLowerCase().split('_').join('');
        res.render('prototype-18/status', data);
    }, function (error) {
        res.send('HTTP '  + error.status + ': ' + error.message);
    });
},

validateReference: function(req, res) {
    var reference = req.query.reference,
    caseRefNumberRegEx = /^\d{3}\/\d{2}\/\d{5}$/,
    errors = [];

    req.session.reference = reference;

    if(!caseRefNumberRegEx.test(reference)) {
        if (reference === '') {
            errors.push("No appeal reference number entered.");
            errors.push("You haven't entered an appeal reference number. Enter it to find your appeal.");
        } {
            errors.push("Invalid appeal reference number entered.");
            errors.push("You’ve entered an invalid appeal reference number. Check it and enter it again, including the forward slashes.");
        }
    }

    if(errors.length) {
        res.render('prototype-18/validate-reference-error', {
            errors: errors,
            reference: reference
        });
        return;
    }

    res.render('prototype-18/validate-surname');
},

validateSurname: function(req, res) {
    var surname = req.query.surname,
    surnameRegEx = /^[a-zA-Z]{3,}$/,
    errors = [],
    reference = req.session.reference;

    if(!surnameRegEx.test(surname)) {
        if(surname === '') {
            errors.push("No surname entered.");
            errors.push("You haven't entered a surname. Enter your surname to continue.");
        } else {
            errors.push("Invalid surname entered.");
            errors.push("You’ve entered an invalid surname. Check it and enter it again.");
        }
    }

    if(errors.length) {
        res.render('prototype-18/validate-surname-error', {
            errors: errors,
            reference: reference,
            surname: surname
        });

        return;
    }

    req.query.reference = 'SC' + reference;

    return appealStatusService.getAppealStatus(req)
    .then(function (result, error) {
        var data = result.body;
        data.status = data.status.toLowerCase().split('_').join('');
        res.render('prototype-18/status', data);
    }, function (error) {
        res.send('HTTP '  + error.status + ': ' + error.message);
    });
}
};

module.exports = controller;
