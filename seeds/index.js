const mongoose = require('mongoose');
const { places, descriptors } = require('./seedHelpers');

const Campground = require('../models/campground');
const cities = require('./cities');


mongoose.connect('mongodb://127.0.0.1:27017/yelp-camp', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useUnifiedTopology: true
});


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});


const sample = array => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
    await Campground.deleteMany({});
    for (let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const p = Math.floor(Math.random() * 20) + 10;
        const imageIndex = Math.floor(Math.random() * 1000); // Unique index for each image

        const camp = new Campground({
            author: '65328670118bc157b2d48178',
            location: `${cities[random1000].city}, ${cities[random1000].state}`,
            title: `${sample(descriptors)} ${sample(places)}`,
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolores vero perferendis laudantium, consequuntur voluptatibus nulla architecto, sit soluta esse iure sed labore ipsam a cum nihil atque molestiae deserunt!',
            price: p,
            images: [
                {
                    url: 'https://res.cloudinary.com/dmq0ishvs/image/upload/v1697991274/YelpCamp/mfl4ulgsxr5ufitdkwvl.jpg',
                    filename: 'YelpCamp/mfl4ulgsxr5ufitdkwvl'
                }
            ]
        })
        await camp.save();
    }
}


seedDB().then(() => {
    mongoose.connection.close();
})