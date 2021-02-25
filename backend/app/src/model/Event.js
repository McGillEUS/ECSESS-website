const EventCategory = require('./EventCategory');

module.exports = function (sequelize, type) {

    return sequelize.define('event', {
        name: { type:type.STRING },
        semester: { type: type.STRING },
        image: { type: type.STRING },
        blurb: { type: type.TEXT },
        secondImage: { type: type.STRING }
    })
}