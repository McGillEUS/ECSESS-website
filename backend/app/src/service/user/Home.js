const { models } = require("../../server.js");

const getNewsService = async (newsId, data) => {
    try {
        console.log(models)
        const news = await models.News.findAll();
        return news;
    } catch {
        throw new Error("Cannot reach database");
    }
}

module.exports = { getNewsService };