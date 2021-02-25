module.exports = function (sequelize, type) {

    return sequelize.define('eventcategory', {
        name: type.STRING,
        image: type.STRING,
    });
}