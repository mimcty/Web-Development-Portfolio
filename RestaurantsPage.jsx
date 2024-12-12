import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import RestaurantList from './RestaurantList.jsx';
import { Link } from 'react-router-dom';
import { CiStar } from "react-icons/ci";


function RestaurantsPage({setRestaurant}){
    const redirect = useNavigate();

    const[restaurants, setRestaurants] = useState([]);

    // get all restaurant reviews
    const loadRestaurants = async () => {
        const response = await fetch('/restaurants');
        const restaurants = await response.json();
        setRestaurants(restaurants);
    }

    // update a review
    const editRestaurant = async restaurant => {
        setRestaurant(restaurant);
        redirect("/updateReview");
    }

    // delete a review
    const deleteRestaurant = async _id => {
        const response = await fetch(`/restaurants/${_id}`, {method: 'delete'});
        if (response.status === 200) {
            const getResponse = await fetch('/restaurants');
            const restaurants = await getResponse.json();
            setRestaurants(restaurants);
        } else {
            console.error(`The review for the restaurant with id ${_id} could not be found.`)
        }
    }
    
    // load all reviews
    useEffect(() => {
        loadRestaurants();
    }, []);

    return (
        <>
            <h2><CiStar /> Restaurant Reviews <CiStar /></h2>
            <article>
                <p>Here are some highly esteemed restaurant reviews from our viewers and myself. Feel free to leave your own! </p>
                <RestaurantList
                    restaurants = {restaurants}
                    deleteRestaurant = {deleteRestaurant}
                    editRestaurant = {editRestaurant}
                />
                <Link id="reviewLink" to="/createReview">Add A Review</Link>  
            </article>
        </>
    )
}

export default RestaurantsPage;