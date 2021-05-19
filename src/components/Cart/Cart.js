import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector } from 'react-redux'

const Cart = (props) => {

  const selectedItems = useSelector(state => state.selectedProduct.selectedProduct);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {selectedItems.map(item => (
          <CartItem key={item.id}
            item={{ id: item.id, title: item.title, ammount: item.ammount, total: item.total, price: item.price }}
          />
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
