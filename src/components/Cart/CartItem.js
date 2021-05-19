import classes from './CartItem.module.css';
import {useDispatch} from 'react-redux';
import {selectedProductActions} from '../../store/selected-product-slice';

const CartItem = (props) => {
  const { id ,title, ammount, total, price } = props.item;

  const dispatch = useDispatch()
  const removeItemHandler=()=>{
    dispatch(selectedProductActions.removeProduct(props.item));
    
  }

  const addItemHandler=()=>{
    dispatch(selectedProductActions.addProduct(props.item));

  }

  return (
    <li key={id} className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{ammount}</span>
        </div>
        <div className={classes.actions}>
          <button onClick = {removeItemHandler}>-</button>
          <button onClick = {addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
