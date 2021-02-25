module.exports = function (sequelize, type) {

    return sequelize.define('person', {
        name: type.STRING,
        position: type.STRING,
        image: type.STRING,
        email: type.STRING,
        blurb: type.TEXT
    });
}