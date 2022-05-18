const express = require('express')
const app = express()
const { Sequelize, DataTypes } = require("sequelize")
const initialize = require('./initialize').default
app.use(express.json())

// Development
const database = new Sequelize("postgres://postgres:postgres@localhost:5432/hyp")

// Production (use this code when deploying to production in Heroku)
// const pg = require('pg')
// pg.defaults.ssl = true
// const database = new Sequelize(process.env.DATABASE_URL, {
//   ssl: true,
//   dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
// })



// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    await database.authenticate()
    const Cat = database.define("cat", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        breed: DataTypes.STRING,
        img: DataTypes.STRING,
    })
    const Location  = database.define("location", {
        name: DataTypes.STRING,
        city: DataTypes.STRING,
    })

    /*
    const Event = database.define("event", {
        title: DataTypes.STRING,
        //info: DataTypes.STRING,
        description: DataTypes.STRING,
        period: DataTypes.STRING,
    })
    const PoI = database.define("poi", {
        title: DataTypes.STRING,
        info: DataTypes.STRING,
        description: DataTypes.STRING,
        coordinates: DataTypes.STRING,
    })
    const Itinerary = database.define("itinerary", {
        title: DataTypes.STRING,
        duration: DataTypes.STRING,
        description: DataTypes.STRING,
    })
    const Service = database.define("service", {
        name: DataTypes.STRING,
        //type: DataTypes.STRING,
        address: DataTypes.STRING,
        openhours: DataTypes.STRING,
    })
    const ServiceType = database.define("servicetype", {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        image: DataTypes.STRING,
    })
    const Picture = database.define("picture", {
        url: DataTypes.STRING,
        //caption: DataTypes.STRING,
    })
    const Poi_Itinerary = database.define("poi_itinerary", {
        order: DataTypes.INTEGER,
    })
    */

    Location.hasMany(Cat)
    Cat.belongsTo(Location)
    
    /*
    Event.belongsTo(PoI);
    PoI.hasMany(Event);

    Itinerary.belongsToMany(PoI, {through: Poi_Itinerary});
    PoI.belongsToMany(Itinerary, {through: Poi_Itinerary});

    Service.belongsTo(ServiceType);
    ServiceType.hasMany(Service);

    Picture.belongsTo(Event);
    Event.hasMany(Picture);
    Picture.belongsTo(PoI);
    PoI.hasMany(Picture);
    */

    await database.sync({ force: true })
    return {
        Cat,
        Location,
        /*
        Event,
        Picture,
        Itinerary,
        PoI,
        Poi_Itinerary,
        Service,
        ServiceType
        */
    }
}

// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body

const pageContentObject = {
    index: {
        // title: "Homepage",
        image: "cover.png",
        logo: "logo.png",
        overview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
        bycar: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.`,
        bybus: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.`,
        byplane: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.`,
    },
    about: {
        // title: "About",
        image: "about.png",
        aboutus: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
        contactus: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`
    },
}

const serviceTypes = [
    {
        id: "1",
        name: "Restaurants",
        image: "restaurant.png",
        overview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
        map: "servicemap.png",
        services: [
            {
                name: "Service Instance 1",
                address: "This is the address",
                openhours: "8.00 - 19.00",
                image: "servicedetails.png"
            },
            {
                name: "Service Instance 2",
                address: "This is the address",
                openhours: "7.30 - 17.00",
                image: "servicedetails.png"
            },
            {
                name: "Service Instance 3",
                address: "This is the address",
                openhours: "9.00 - 22.30",
                image: "servicedetails.png"
            }
        ]
    },
    {
        id: "2",
        name: "Museums",
        image: "museum.png",
        overview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
        map: "servicemap.png",
        services: [
            {
                name: "Service Instance 1",
                address: "This is the address",
                openhours: "8.00 - 19.00",
                image: "servicedetails.png"
            },
            {
                name: "Service Instance 2",
                address: "This is the address",
                openhours: "7.30 - 17.00",
                image: "servicedetails.png"
            },
            {
                name: "Service Instance 3",
                address: "This is the address",
                openhours: "9.00 - 22.30",
                image: "servicedetails.png"
            }
        ]
    },
    {
        id: "3",
        name: "Supermarkets",
        image: "supermarket.png",
        overview: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
        map: "servicemap.png",
        services: [
            {
                name: "Service Instance 1",
                address: "This is the address",
                openhours: "8.00 - 19.00",
                image: "servicedetails.png"
            },
            {
                name: "Service Instance 2",
                address: "This is the address",
                openhours: "7.30 - 17.00",
                image: "servicedetails.png"
            },
            {
                name: "Service Instance 3",
                address: "This is the address",
                openhours: "9.00 - 22.30",
                image: "servicedetails.png"
            }
        ]

    },
    {
        id: "4",
        name: "Pharmacies",
        image: "pharmacy.png"
    },
    {
        id: "5",
        name: "Stationary stores",
        image: "statstore.png"
    },
    {
        id: "6",
        name: "Hardware stores",
        image: "hwstore.png"
    },
    {
        id: "7",
        name: "Churches",
        image: "church.png"
    },
    {
        id: "8",
        name: "Parks",
        image: "park.png"
    },
]

const events = [
    {
        title: "2022 Winter Festival",
        period: "October 10 - March 21",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
        poi: {
            id: 1,
            title: "Central Plaza",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
            Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,    
            location: "Location X",
            picture: {
                url: "poi.png"
            }
        },
        picture: [
            {
                url: "cover.png"
            },
            {
                url: "event.png"
            }
        ]
    },
    {
        title: "Event 2",
        period: "May 24, 5.30-6.00 P. M.",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
        Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,
        poi: {
            id: 2,
            title: "Place number 2",
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et tincidunt elit, in finibus elit. Aliquam nec posuere sem, at faucibus erat. Suspendisse iaculis lorem id odio placerat bibendum. Suspendisse potenti. Sed quis efficitur erat. Pellentesque non velit ipsum. Maecenas finibus felis a magna auctor finibus. Mauris tincidunt nibh sit amet ante consectetur, non cursus elit feugiat.
            Integer vitae elit at nunc lacinia egestas. Etiam nec sagittis lorem. Phasellus consectetur mauris eget neque posuere, vitae sagittis massa congue. Etiam vitae eleifend odio, sit amet tempus ex. Ut semper feugiat erat, id consequat elit volutpat sed. Curabitur vel arcu at risus vehicula blandit in ut nunc. In nec pellentesque tellus. Maecenas vitae purus lacinia, tristique elit vitae, interdum est. Ut feugiat nulla et vestibulum efficitur. Suspendisse potenti. Duis ex dolor, vestibulum a leo eu, dapibus elementum ipsum. Curabitur euismod rhoncus nulla ac interdum. Mauris vulputate viverra scelerisque. Mauris ullamcorper tempus eros.`,    
            location: "Location X",
            picture: {
                url: "poi.png"
            }
        },
        picture: [
            {
                url: "cover.png"
            },
            {
                url: "event.png"
            }
        ]
    }
]


async function runMainApi() {
    const models = await initializeDatabaseConnection()
    await initialize(models)

    app.get('/page-info/:topic', (req, res) => {
        const { topic } = req.params
        const result = pageContentObject[topic]
        return res.json(result)
    })

    app.get('/cats/:id', async (req, res) => {
        const id = +req.params.id
        const result = await models.Cat.findOne({ where: { id }, include: [{model: models.Location}] })
        return res.json(result)
    })

    app.get('/events/:id', async (req, res) => {
        const id = +req.params.id
        // const result = await models.Event.findOne({ where: { id }, include: [{model: models.Picture},{model: models.PoI}] })
        const result = events[id-1]
        return res.json(result)
    })

    app.get("/services", async (req, res) => {
        return res.json(serviceTypes)
    })

    app.get('/services/:id', async (req, res) => {
        const id = +req.params.id
        // const result = await models.Event.findOne({ where: { id }, include: [{model: models.Picture},{model: models.PoI}] })
        const result = serviceTypes[id-1]
        return res.json(result)
    })

    // HTTP GET api that returns all the cats in our actual database
    // app.get("/cats", async (req, res) => {
    //     const result = await models.Cat.findAll()
    //     const filtered = []
    //     for (const element of result) {
    //         filtered.push({
    //             name: element.name,
    //             img: element.img,
    //             breed: element.breed,
    //             id: element.id,
    //         })
    //     }
    //     return res.json(filtered)
    // })

    // HTTP POST api, that will push (and therefore create) a new element in
    // our actual database
    app.post("/cats", async (req, res) => {
        const { body } = req
        await models.Cat.create(body);
        return res.sendStatus(200)
    })
}

runMainApi()


export default app
