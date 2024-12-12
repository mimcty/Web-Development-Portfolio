// Controllers for the restaurant Collection

import 'dotenv/config';
import express from 'express';
import * as restaurants from './restaurants-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/restaurants', (req,res) => { 
    restaurants.createRestaurant(
        req.body.restaurantName, 
        req.body.dateVisited, 
        req.body.rating,
        req.body.review
        )
        .then(restaurant => {
            console.log(`"${restaurant.restaurantName}" was successfully added to the collection.`);
            res.status(201).json(restaurant);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: '400 Bad Request: Review could not be posted due to invalid request syntax. Check request parameters or database connection and try again.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/restaurants', (req, res) => {
    restaurants.retrieveRestaurants()
        .then(restaurants => { 
            if (restaurants !== null) {
                console.log(`All restaurant reviews were successully retrieved from the collection.`);
                res.json(restaurants);
            } else {
                res.status(404).json({ Error: '404 Not Found: entry does not exist on the server.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: '400 Bad Request: Unable to retrieve restaurant reviews. Check request parameters or database connection and try again.' });
        });
});


// RETRIEVE by ID controller
app.get('/restaurants/:_id', (req, res) => {
    restaurants.retrieveRestaurantByID(req.params._id)
    .then(restaurant => { 
        if (restaurant !== null) {
            console.log(`The review for "${restaurant.restaurantName}" was retrieved by ID.`);
            res.json(restaurant);
        } else {
            res.status(404).json({ Error: `404 Not Found: No review was found with the ID "${req.params._id}".` });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: '400 Bad Request: Unable to retrieve restaurant review. Check request parameters or database connection and try again.' });
    });

});


// UPDATE controller ************************************
app.put('/restaurants/:_id', (req, res) => {
    restaurants.updateRestaurant(
        req.params._id, 
        req.body.restaurantName, 
        req.body.dateVisited, 
        req.body.rating,
        req.body.review
    )
    .then(restaurant => {
        console.log(`The attributes for "${restaurant.restaurantName}" were updated successfully.`);
        res.json(restaurant);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: `400 Bad Request: The attributes for "${restaurant.restaurantName}" could not be updated. Check request parameters or database connection and try again.` });
    });
});


// DELETE Controller ******************************
app.delete('/restaurants/:_id', (req, res) => {
    restaurants.retrieveRestaurantByID(req.params._id)
        .then(restaurant => {
            if (!restaurant) {
                res.status(404).json({ Error: `404 Not Found: No restaurant found with the ID "${req.params._id}".` });
                return;
            }

            restaurants.deleteRestaurantById(req.params._id)
                .then(deletedCount => {
                    if (deletedCount === 1) {
                        console.log(`The review for the restaurant "${restaurant.restaurantName}" was deleted based on its ID.`);
                        res.status(200).send({ Success: 'Review was successfully deleted.' });
                    } else {
                        res.status(404).json({ Error: `404 Not Found: The review for "${restaurant.restaurantName}" does not exist on the server.` });
                    }
                })
                .catch(error => {
                    console.error(error);
                    res.status(500).json({ Error: 'The restaurant review could not be deleted. Please try again.' });
                });
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'An error occurred while retrieving the restaurant. Please try again.' });
        });
});



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});