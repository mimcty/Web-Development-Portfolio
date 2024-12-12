import { Link } from 'react-router-dom'
import { IoSparklesOutline } from "react-icons/io5";
import { RiHomeHeartLine } from "react-icons/ri";
import { TiShoppingCart } from "react-icons/ti";
import { PiBowlFoodDuotone } from "react-icons/pi";
import { BsPersonBadgeFill } from "react-icons/bs";
import { PiCalendarStar } from "react-icons/pi";
import { GiRotaryPhone } from "react-icons/gi";


function Navigation() {
    return (
        <>
        <nav>
            <Link to="/">Home <RiHomeHeartLine /></Link>
            <Link to="/topics">Web Topics <PiCalendarStar /></Link>
            <Link to="/gallery">Gallery <IoSparklesOutline /></Link>
            <Link to="/order">Order <TiShoppingCart /></Link>
            <Link to="/restaurantsPage">Restaurant Reviews <PiBowlFoodDuotone /></Link>
            <Link to="/staff">Staff <BsPersonBadgeFill /></Link>
            <Link to="/contact">Contact <GiRotaryPhone /></Link>
        </nav>
        </>
    )
}

export default Navigation;