const models = require("../../server.js");

const getCategoriesService = async (id) => {
    try {
        const categories = await models.EventCategory.findAll();
        return categories;
    } catch {
        throw new Error("Cannot reach database");
    }
}

const postEventService = async (data) => {
    try {
        const event = await models.Event.create({
            name: data.event_name,
            semester: data.semester,
            image: data.image,
            blurb: data.blurb,
            secondImage: data.second_image,
            eventcategoryId: data.event_category
        })
        return event;
    } catch {
        throw new Error("Cannot reach database");
    }
}

const getCategoryByNameService = async (name) => {
    try {
        const categories = await models.EventCategory.findAll({
            where: {
                name: name
            }
        });
        return categories;
    } catch {
        throw new Error("Cannot reach database");
    }
}

const postCategoryService = async (data) => {
    try {
        const eventCategory = await models.EventCategory.create({
            name: data.event_category_name,
            image: data.image,
        })
        return eventCategory;
    } catch {
        throw new Error("Cannot reach database");
    }
}

module.exports = { getCategoriesService, postEventService, getCategoryByNameService, postCategoryService };