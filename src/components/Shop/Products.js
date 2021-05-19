import ProductItem from './ProductItem';
import classes from './Products.module.css';
import { useSelector } from 'react-redux'
const Products = (props) => {
  const productsItems = useSelector(state => state.products.items)

  const prodItems = productsItems.map(item => (
    <ProductItem
      key={item.id}
      id={item.id}
      title={item.title}
      price={item.price}
      description={item.description}
    />
  ))
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {prodItems}
      </ul>
    </section>
  );
};

export default Products;
