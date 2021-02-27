module.exports = function (sequelize, type) {

    return sequelize.define('news', {
        name: { type:type.STRING },
        image: { type: type.STRING },
        blurb: { type: type.TEXT },
        link: { type: type.STRING }
    })
}