import {products} from '../assets/data'
import {Product} from '../components/ProductData'
import '../styles/product.css'

const Home = () => {
  return (
    <div className="list">
      {
        products.map((item, index) => (
          <Product
            key = {index}
            image= {item.image}
            title={item.title}
            category={item.category}
            price={item.price}
            slur={item.slur}
            description={item.description}
            cartQuantity={item.cartQuantity}
            rating={item.rating}
          />
        ))
      }
    </div>
  )
}

export default Home