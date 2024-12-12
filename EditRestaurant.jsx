import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RestaurantEdit = ({ restaurant }) => {
    const [restaurantName, setRestaurantName] = useState(restaurant.restaurantName);
    const [dateVisited, setDateVisited] = useState(restaurant.dateVisited.slice(0,10));
    const [rating, setRating] = useState(restaurant.rating);
    const [review, setReview] = useState(restaurant.review);

    const redirect = useNavigate();

    const editRestaurant = async (event) => {
        event.preventDefault();

        const response = await fetch(`/restaurants/${restaurant._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                restaurantName: restaurantName, 
                dateVisited: dateVisited, 
                rating: rating,
                review: review
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`The review for ${restaurant.restaurantName} was successfully changed.`);
        } else {
            const errMessage = await response.json();
            alert(`${response.status}: ${errMessage.Error}. The review for ${restaurant.restaurantName} could not be edited.`);
        }
        redirect("/restaurantsPage");
    }

    return (
        <>
        <article>
            <h2>Edit a Restaurant Review</h2> 
            <p>Here, you can change a review that has already been posted. Please be mindful and do not edit someone else's reviews!</p>

            <form id="reviewForm">
                    <label htmlFor="restaurantName">Restaurant Name</label>
                        <input
                            type="text"
                            value={restaurantName}
                            onChange={e => setRestaurantName(e.target.value)}
                            id="restaurantName"
                            required
                        />
                    
                    <label htmlFor="dateVisited">Date Visited</label>
                        <input
                            type="date"
                            value={dateVisited}
                            max={new Date().toISOString().split('T')[0]}
                            onChange={e => setDateVisited(e.target.value)}
                            id="dateVisited"
                            required
                        />

                    <label htmlFor="rating">Rating</label>
                        <input
                            type="number"
                            step="0.1"
                            min="1"
                            max="5"
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                            id="rating"
                            required
                        />

                    <label htmlFor="review">Review</label>
                        <textarea
                            value={review}
                            maxLength={300}
                            onChange={e => setReview(e.target.value)}
                            id="review"
                            required
                        ></textarea>

                    <label htmlFor="submit">
                    <button type="submit" id="submit" onClick={editRestaurant}>Save Changes</button></label>            
                </form>
        </article>
        </>
    );
}
export default RestaurantEdit;