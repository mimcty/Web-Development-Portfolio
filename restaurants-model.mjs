// Models for the Restaurant Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'The application failed to establish a connection to the MongoDB database. Check the connection string and try again.' });
    } else  {
        console.log('The connection to the MongoDB database was successful. Restaurant reviews are connected.');
    }
});

// SCHEMA: Define the collection's schema. (what properties does each restaurant entry have?)
const restaurantSchema = mongoose.Schema({
	restaurantName:  { type: String, required: true },
	dateVisited:     { type: Date, required: true , default: Date.now},
	rating:          { type: Number, required: true },
    review:          { type: String, required: true}
});

// Compile the model from the schema 
// by defining the collection name "restaurants".
const restaurants = mongoose.model('Restaurants', restaurantSchema);


// CREATE model, so we can create instances (individual restaurant objects) *****************************************
const createRestaurant = async (restaurantName, dateVisited, rating, review) => {
    const restaurant = new restaurants({ 
        restaurantName: restaurantName, 
        dateVisited: dateVisited, 
        rating: rating,
        review: review
    });
    return restaurant.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveRestaurants = async () => {
    const query = restaurants.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveRestaurantByID = async (_id) => {
    const query = restaurants.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteRestaurantById = async (_id) => {
    const result = await restaurants.deleteOne({_id: _id});
    return result.deletedCount;
};

// UPDATE model *****************************************************
const updateRestaurant = async (_id, restaurantName, dateVisited, rating, review) => {
    const result = await restaurants.replaceOne({_id: _id }, {
        restaurantName: restaurantName, 
        dateVisited: dateVisited, 
        rating: rating,
        review: review
    });
    return { 
        _id: _id, 
        restaurantName: restaurantName, 
        dateVisited: dateVisited, 
        rating: rating,
        review: review
    }
}

// EXPORT the variables for use in the controller file.
export { createRestaurant, retrieveRestaurants, retrieveRestaurantByID, updateRestaurant, deleteRestaurantById }