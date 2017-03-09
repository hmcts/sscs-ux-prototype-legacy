var statusMap = require('./config').statusMap;

module.exports = function(req, res, next) {
    res.locals.isActive = function (status, currentStatus) {
        return statusMap[currentStatus] >= statusMap[status] ? 'active' : '';
    };
    next();
};
