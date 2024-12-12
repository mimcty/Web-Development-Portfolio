import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const RestaurantAdd = () => {
    const [restaurantName, setRestaurantName] = useState('');
    const [dateVisited, setDateVisited] = useState('');
    const [rating, setRating] = useState('');
    const [review, setReview] = useState('');

    const redirect = useNavigate();

    const addRestaurant = async (event) => {
        event.preventDefault();
        const newRestaurant = { restaurantName, dateVisited, rating, review };
        const response = await fetch('/restaurants', {
            method: 'post',
            body: JSON.stringify(newRestaurant),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201) {
            alert(`The review for ${restaurantName} was added successfully.`);
        } else {
            alert(`Error ${response.status}: The review for ${restaurantName} could not be added.`);
        }
        redirect("/restaurantsPage");
    };

    return (
        <>
            <h2>Add a Restaurant Review</h2>
            <article>
                <p>Please leave a review for a restaurant you have been to! Make sure to note the date you visited, alongside your rating and short review.</p>
                <form id="reviewForm" onSubmit={addRestaurant}>

                    <label htmlFor="restaurantName">Restaurant Name</label>
                        <input
                            type="text"
                            placeholder="Restaurant name"
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
                            placeholder="1-5"
                            value={rating}
                            onChange={e => setRating(e.target.value)}
                            id="rating"
                            required
                        />

                    <label htmlFor="review">Review</label>
                        <textarea
                            placeholder="Write your review here (300 chars max.)"
                            value={review}
                            maxLength={300}
                            onChange={e => setReview(e.target.value)}
                            id="review"
                            required
                        ></textarea>

                    <label htmlFor="submit"></label>
                    <button onClick={addRestaurant}>Add My Review!</button>                
                </form>
            </article>
        </>
    );
};

export default RestaurantAdd;



                // <table>
                //     <caption>Leave a Review</caption>
                //     <thead>
                //         <tr>
                //             <th>Restaurant Name</th>
                //             <th>Date Visited</th>
                //             <th>Rating</th>
                //             <th>Review</th>
                //         </tr>
                //     </thead>
                //     <tbody>
                //         <tr>
                //             <td>
                //                 <label htmlFor="restaurantName"></label>
                //                 <input
                //                     type="text"
                //                     placeholder="Restaurant name"
                //                     value={restaurantName}
                //                     onChange={e => setRestaurantName(e.target.value)}
                //                     id="restaurantName"
                //                     required
                //                 />
                //             </td>
                //             <td>
                //                 <label htmlFor="dateVisited"></label>
                //                 <input
                //                     type="date"
                //                     value={dateVisited}
                //                     max={new Date().toISOString().split('T')[0]}
                //                     onChange={e => setDateVisited(e.target.value)}
                //                     id="dateVisited"
                //                     required
                //                 />
                //             </td>
                //             <td>
                //                 <label htmlFor="rating"></label>
                //                 <input
                //                     type="number"
                //                     step="0.1"
                //                     min="1"
                //                     max="5"
                //                     placeholder="1-5"
                //                     value={rating}
                //                     onChange={e => setRating(e.target.value)}
                //                     id="rating"
                //                     required
                //                 />
                //             </td>
                //             <td>
                //                 <label htmlFor="review"></label>
                //                 <textarea
                //                     placeholder="Write your review here (300 chars max.)"
                //                     value={review}
                //                     maxLength={300}
                //                     onChange={e => setReview(e.target.value)}
                //                     id="review"
                //                     required
                //                 ></textarea>
                //             </td>
                //             <td>
                //                 <label htmlFor="submit"></label>
                //                 <button onClick={addRestaurant}>Submit Review</button>
                //             </td>
                //         </tr>
                //     </tbody>
                // </table>
                // </form>
