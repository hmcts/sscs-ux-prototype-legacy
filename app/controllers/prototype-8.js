var serviceFactory = require('../services/serviceFactory');
var appealStatusService = serviceFactory.get('appealStatus');

var controller = {

    appointee: function(req, res) {
        if (req.body.radioGroup === 'appointee') {
            res.render('prototype-beta-09/submit-your-appeal/004-appointee-details');
        } else if (req.body.radioGroup === 'nonAppointee') {
            res.render('prototype-beta-09/submit-your-appeal/004-your-details');
        }
    },

        representative: function(req, res) {
        if (req.body.radioGroup === 'rep') {
            res.render('prototype-beta-09/submit-your-appeal/009-reps-details');
        } else if (req.body.radioGroup === 'noRep') {
            res.render('prototype-beta-09/submit-your-appeal/010-update-anyone-else');
        }
    },


      supporter: function(req, res) {
        if (req.body.radioGroup === 'yes') {
            res.render('prototype-beta-09/submit-your-appeal/010-supporter-details');
        } else if (req.body.radioGroup === 'no') {
            res.render('prototype-beta-09/submit-your-appeal/011-why-are-you-appealing');
        }
    },

      hearing: function(req, res) {
        if (req.body.radioGroup === 'attend') {
            res.render('prototype-beta-09/submit-your-appeal/014-hearing-arrangements-needed');
        } else if (req.body.radioGroup === 'notAttend') {
            res.render('prototype-beta-09/submit-your-appeal/013-hearing-not-attending');
        }
    },

          arrangements: function(req, res) {
        if (req.body.radioGroup === 'arrangementsRequired') {
            res.render('prototype-beta-09/submit-your-appeal/015-hearing-arrangements');
        } else if (req.body.radioGroup === 'arrangementsNotRequired') {
            res.render('prototype-beta-09/submit-your-appeal/016-hearing-dates');
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
            res.render('prototype-8/track-your-appeal-error-no-match', {
                errorMessages: errors,
                caseRefNumber: reference,
                surname: surname
            });
            return;
        }

        if(errors.reference.length || errors.surname.length) {
            res.render('prototype-8/track-your-appeal-error', {
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
            res.render('prototype-8/track-your-appeal-error', {
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
                res.render('prototype-8/status-pb-one', data);
                //res.render('prototype-8/status-pb-four', data);
                //res.render('prototype-8/status-pb-seven', data);
                //res.render('prototype-8/status-pb-ten', data);
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
            res.render('prototype-8/track-your-appeal-error-multi', {
                errorMessages: errors,
                caseRefNumbers: [caseRef1, caseRef2, caseRef3]
            });
            return;
        }


        if(!caseRef1RegExMatch || !caseRef2RegExMatch || !caseRef3RegExMatch) {
            errors.push("You’ve entered an invalid appeal reference number. Check it and enter it again.");
            errors.push("Invalid appeal reference number entered.");
            res.render('prototype-8/track-your-appeal-error-multi', {
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
                res.render('prototype-8/status', data);
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
            res.render('prototype-8/validate-reference-error', {
                errors: errors,
                reference: reference
            });
            return;
        }

        res.render('prototype-8/validate-surname');
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
            res.render('prototype-8/validate-surname-error', {
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
                res.render('prototype-8/status', data);
            }, function (error) {
                res.send('HTTP '  + error.status + ': ' + error.message);
            });
    }
};

module.exports = controller;
