const { models } = require("../../server.js");

const postNewsService = async (data) => {
    try {
        const news = await models.News.create({
            name: data.name,
            image: data.image,
            blurb: data.blurb,
            link: data.link
        })
        return news;
    } catch {
        throw new Error("Cannot reach database");
    }
}

const deleteNewsService = async (newsId) => {
    try {
        const news = await models.News.destroy({
            where: {
                id: newsId
            }
        })
        return news;
    } catch {
        throw new Error("Cannot reach database");
    }
}

const updateNewsService = async (newsId, data) => {
    try {
        const news = await models.News.update({
            name: data.name,
            image: data.image,
            blurb: data.blurb,
            link: data.link
        }, {
            where: {
                id: newsId
            }
        })
        return news;
    } catch {
        throw new Error("Cannot reach database");
    }
}

const getNewsService = async (newsId, data) => {
    try {
        const news = await models.News.findAll();
        return news;
    } catch {
        throw new Error("Cannot reach database");
    }
}

const getNewsByIdService = async (newsId) => {
    try {
        const news = await models.News.findAll({
            where: {
                id: newsId
            }
        });
        return news;
    } catch {
        throw new Error("Cannot reach database");
    }
}

module.exports = { postNewsService, deleteNewsService, updateNewsService, getNewsService, getNewsByIdService };