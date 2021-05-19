import classes from './CartButton.module.css';
import{useSelector,useDispatch} from 'react-redux';
import {selectedProductActions} from '../../store/selected-product-slice';

const CartButton = (props) => {
  const selectedCount = useSelector(state=>state.selectedProduct.selectedProduct);
  const dispatch = useDispatch();

  const cartShowingHandler=()=>{dispatch(selectedProductActions.cartVisible());}
  return (
    <button onClick={cartShowingHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{selectedCount.length}</span>
    </button>
  );
};

export default CartButton;
