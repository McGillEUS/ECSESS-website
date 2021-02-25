
const models = require("../../server.js");

const getEventsService = async () => {
    try {
        const events = await models.Event.findAll();
        return events;
    } catch {
        throw new Error("Cannot reach database");
    }
}

const getEventService = async (id) => {
    try {
        const event = await models.Event.findAll({
            where: {
                id: id
            }
        })
        return event;
    } catch {
        throw new Error("Cannot reach database");
    }
}

const getEventsByCategoryService = async (id) => {
    try {
        const events = await models.Event.findAll({
            where: {
                eventcategoryId: id
            }
        })
        return events;
    } catch {
        throw new Error("Cannot reach database");
    }
}

const getCategoriesService = async (id) => {
    try {
        const categories = await models.EventCategory.findAll();
        return categories;
    } catch {
        throw new Error("Cannot reach database");
    }
}

module.exports = { getEventsService, getEventService, getEventsByCategoryService, getCategoriesService };