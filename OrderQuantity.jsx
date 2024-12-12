import { GoPlus } from 'react-icons/go';
import { HiMinusSm } from "react-icons/hi";

function OrderQuantity({ quantity, setQuantity }) {
    const increment = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className="clicker">
            <i><HiMinusSm  onClick={decrement} /></i>
            {quantity}
            <i><GoPlus onClick={increment} /></i>
        </div>
    );
}

export default OrderQuantity;
