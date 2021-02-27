const { postNewsService, deleteNewsService, updateNewsService, getNewsService, getNewsByIdService } = require("../../service/admin/Home");

const postNews = async (req, res, next) => {
    try {
        const news = await postNewsService(req.body);
        if (news) {
            return res.status(200).json({
                success: true,
                message: "posted news successfully",
                news: news
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "cannot post such news"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

const deleteNews = async (req, res, next) => {
    try {
        const news = await deleteNewsService(req.params.id);
        if (news) {
            return res.status(200).json({
                success: true,
                message: "deleted news successfully",
                news: news
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "cannot delete such news"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

const updateNews = async (req, res, next) => {
    try {
        const news = await updateNewsService(req.params.id, req.body);
        if (news) {
            return res.status(200).json({
                success: true,
                message: "updated news successfully",
                news: news
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "cannot update such news"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

const getNews = async (req, res, next) => {
    try {
        const news = await getNewsService();
        if (news) {
            return res.status(200).json({
                success: true,
                message: "fetched news successfully",
                news: news
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "cannot get such news"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

const getNewsById = async (req, res, next) => {
    try {
        const news = await getNewsByIdService(req.params.id);
        if (news) {
            return res.status(200).json({
                success: true,
                message: "fetched news by id successfully",
                news: news
            })
        } else {
            return res.status(200).json({
                success: true,
                message: `cannot fetch such news with id ${req.params.id}`
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

module.exports = { postNews, deleteNews, updateNews, getNews, getNewsById };