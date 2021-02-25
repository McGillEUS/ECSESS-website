const { getEventsService, getEventService, getEventsByCategoryService, getCategoriesService } = require("../../service/user/Events");

const getEvents = async (req, res, next) => {

    try {
        const events = await getEventsService();
        if (events) {
            return res.status(200).json({
                success: true,
                message: "fetched all events successfully",
                events: events
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "there are no events"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

const getEvent = async (req, res, next) => {

    try {
        const event = await getEventService(req.params.id);
        if (event) {
            return res.status(200).json({
                success: true,
                message: "fetched event successfully",
                events: event[0]
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "there is no such event"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

const getEventsByCategory = async (req, res, next) => {

    try {
        const events = await getEventsByCategoryService(req.params.id);
        if (events) {
            return res.status(200).json({
                success: true,
                message: "fetched event successfully",
                events: events
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "there is no such event"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

const getCategories = async (req, res, next) => {
    try {
        const categories = await getCategoriesService(req.params.id);
        if (categories) {
            return res.status(200).json({
                success: true,
                message: "fetched event successfully",
                events: categories
            })
        } else {
            return res.status(200).json({
                success: true,
                message: "there is no such event"
            })
        } 
    } catch {
        return res.status(400).json({
            success: false,
            message: `Bad request`
        })
    }
}

module.exports = { getEvents, getEvent, getEventsByCategory, getCategories };