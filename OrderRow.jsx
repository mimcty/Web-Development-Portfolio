import OrderQuantity from './OrderQuantity.jsx';

function OrderRow({ product, quantity, setQuantity }) {
    const subtotal = product.price * quantity;

    return (
        <tr>
            <td>{product.company}</td>
            <td>{product.product}</td>
            <td>{product.price.toLocaleString('en-US', { 
                style: 'currency', 
                currency: 'USD', 
                minimumFractionDigits: 2 
            })}</td>
            <td>
                <OrderQuantity quantity={quantity} setQuantity={setQuantity} />
            </td>
            <td>
                {subtotal.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD',
                    minimumFractionDigits: 2,
                })}
            </td>
        </tr>
    );
}

export default OrderRow;
