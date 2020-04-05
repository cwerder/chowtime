module.exports = function timeLog (req, res, next) {
    console.log('Time: ', new Date().toDateString());
    next();
};