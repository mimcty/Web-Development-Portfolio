import { useState } from 'react';
import OrderRow from './OrderRow.jsx';

function OrderPage({ products }) {
    const [quantities, setQuantities] = useState(products.map(() => 0));

    const updateQuantity = (index, newQuantity) => {
        const updatedQuantities = quantities.slice(0, index)
            .concat(newQuantity)
            .concat(quantities.slice(index + 1));
        setQuantities(updatedQuantities);
    };
    
    const total = products.reduce(
        (sum, product, index) => sum + product.price * quantities[index],
        0
    );

    return (
        <>
            <h2>Mr Peanutbutter's Store</h2>
            <article>
                <p>Welcome to Mr Peanutbutter's online store for all the best goods in town! Get the newest items
                for your furry friend at the click of a button. Happy browsing! </p>
                <table id="order">
                    <caption>All Products</caption>
                    <thead>
                        <tr>
                            <th>Company</th>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Sub-Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product, i) => 
                            <OrderRow 
                                product={product}
                                quantity={quantities[i]}
                                setQuantity={(newQuantity) => updateQuantity(i, newQuantity)}
                                key={i}
                            />
                        )}
                    </tbody>
                    <tfoot>
                        <tr>
                            <th colSpan="4">Total:</th>
                            <td>
                                {total.toLocaleString('en-US', {
                                    style: 'currency',
                                    currency: 'USD',
                                    minimumFractionDigits: 2,
                                })}
                            </td>
                        </tr>
                    </tfoot>
                </table>    
            </article>  
        </>
    );
}

export default OrderPage;
