const { post } = require("../../api/api");
const { getCategoriesService, postEventService, getCategoryByNameService, postCategoryService } = require("../../service/admin/Events");


const getCategories = async (req, res, next) => {
    try {
        const categories = await getCategoriesService(req.params.id);
        if (categories) {
            return res.status(200).json({
                success: true,
                message: "fetched event category successfully",
                categories: categories
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "there are no event categories"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

const postEvent = async (req, res, next) => {
    try {
        const event = await postEventService(req.body);
        if (event) {
            return res.status(200).json({
                success: true,
                message: "posted event successfully",
                events: event
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "cannot post such event"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

const getCategoryByName = async (req, res, next) => {
    try {
        const categories = await getCategoryByNameService(req.params.name);
        if (categories) {
            return res.status(200).json({
                success: true,
                message: "fetched category successfully",
                categories: categories
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "there is no such category"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

const postCategory = async (req, res, next) => {
    try {
        const category = await postCategoryService(req.body);
        if (category) {
            return res.status(200).json({
                success: true,
                message: "posted category successfully",
                events: category
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "cannot post such category"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

module.exports = { getCategories, postEvent, getCategoryByName, postCategory };