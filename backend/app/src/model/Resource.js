module.exports = function (sequelize, type) {

    return sequelize.define('resource', {
        name: { type: type.STRING },
        image: { type: type.STRING },
        link: { type: type.STRING },
        blurb: { type: type.TEXT },
        featured: { type: type.BOOLEAN }
    });
}