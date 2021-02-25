module.exports = function (sequelize, type) {

    return sequelize.define('resource', {
        name: type.STRING,
        image: type.STRING,
        link: type.STRING,
        blurb: type.TEXT
    });
}