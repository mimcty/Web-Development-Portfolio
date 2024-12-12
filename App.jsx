import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from './modules/Navigation.jsx'
import HomePage from './modules/HomePage.jsx'
import ContactPage from './modules/ContactPage.jsx'
import GalleryPage from './modules/GalleryPage.jsx'
import StaffPage from './modules/StaffPage.jsx'
import TopicsPage from './modules/TopicsPage.jsx'
import OrderPage from './modules/OrderPage.jsx'
import RestaurantsPage from './modules/restaurants/RestaurantsPage.jsx'
import RestaurantAdd from './modules/restaurants/AddRestaurant.jsx'
import RestaurantEdit from './modules/restaurants/EditRestaurant.jsx'
import { BsEnvelopePaperHeart } from "react-icons/bs";
import { LuCat } from "react-icons/lu";
import { FaWandSparkles } from "react-icons/fa6";
import { GiSparkles } from "react-icons/gi";
import products from './data/products.js';


function App() {
  const [restaurant, setRestaurant] = useState([]);

  return (
    <>
     <header>
        <h1>
          <i><LuCat className="rotate" /></i>
          <i><FaWandSparkles className="rotate" /></i>   Michelle Ma   <i><GiSparkles className="rotate" /></i>
          <i><BsEnvelopePaperHeart className="rotate" /></i>
        </h1>
      </header>

      <Router>
      <Navigation />
          <main>
              <section>
                  <Routes>
                      <Route path="/" element={<HomePage />}></Route>
                      <Route path="/contact" element={<ContactPage />}></Route>
                      <Route path="/gallery" element={<GalleryPage />}></Route>
                      <Route path="/staff" element={<StaffPage />}></Route>
                      <Route path="/topics" element={<TopicsPage />}></Route>
                      <Route path="/order" element={<OrderPage products= {products}/>}></Route>
                      <Route path="/restaurantsPage" element={<RestaurantsPage setRestaurant = {setRestaurant} />}></Route>
                      <Route path="/createReview" element={<RestaurantAdd />}></Route>
                      <Route path="/updateReview" element={<RestaurantEdit restaurant = { restaurant } />}></Route>
                  </Routes>
              </section>
          </main>
      </Router>
      <footer>
          <p>&copy; {new Date().getFullYear()} Michelle Ma</p>
      </footer>
    </>
  )
}

export default App;
