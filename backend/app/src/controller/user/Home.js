const { getNewsService } = require("../../service/admin/Home");

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

module.exports = { getNews };