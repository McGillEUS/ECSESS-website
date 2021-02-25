//db module imports
const EventModel = require("./model/Event");
const EventCategoryModel = require("./model/EventCategory");

module.exports = function(Sequelize, config) {
    //DB connection
    const sequelize = new Sequelize(config.database.DATABASE_URL, {
        dialect: 'postgres',
        protocol: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
        }
    });

    try {
        sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }

    //setup DB tables
    const Event = EventModel(sequelize, Sequelize);
    const EventCategory = EventCategoryModel(sequelize, Sequelize);

    EventCategory.hasMany(Event);
    Event.belongsTo(EventCategory);

    sequelize.sync({ force: true })
    .then(() => {
        console.log(`Database & tables created!`)
    })

    return { Event, EventCategory };
}