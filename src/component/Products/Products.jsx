import Product from "./Product/Product";
import "./Products.css";


const Products = () => {
  return (
    <div className="products_container container gx-0">
      <h2>New Product</h2>
      <div className="row gx-0">
        {/* <div className="col-md-6"> */}
          <div className="Products_main">
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>

            
          {/* </div> */}
        </div>
      </div>
    </div>
  )
}

export default Products ;