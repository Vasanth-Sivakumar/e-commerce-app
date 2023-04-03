import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products() {
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState(data);
  const [loading, setLoading] = useState(false);

  let Mounted = true;

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      if (Mounted) {
        setData(await response.clone().json());
        setFilter(await response.json());
        setLoading(false);
        console.log(filter);
      }

      return () => {
        Mounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return (
      <>
      Loading......
      </>
    );
  };

  const filterProduct = (cat) => {
   const updatedList = data.filter((x)=>x.category === cat);
   setFilter(updatedList);
  }

  const ShowProducts = () => {
    return (
      <>
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
          <button 
          type="button"
          className="btn btn-outline-dark me-2"
          onClick={()=>setFilter(data)}>All</button>
          <button 
          type="button"
          className="btn btn-outline-dark me-2"
          onClick= {()=>filterProduct("men's clothing")}>
            Men's Clothing
          </button>
          <button
          type="button"
           className="btn btn-outline-dark me-2"
          onClick={()=>filterProduct("women's clothing")}>
            Women's Clothing
          </button>
          <button 
          type="button"
          className="btn btn-outline-dark me-2"
          onClick={()=>filterProduct("jewelery")}>
            Jewelery
          </button>
          <button 
          type="button"
          className="btn btn-outline-dark me-2"
          onClick={()=>filterProduct("electronics")}>
            Electronics
          </button>
        </div>
        {filter.map((product) => {
          return (
            <>
              <div className="col-md-3 mb-4 text-black">
                <div className="card text-center h-100 p-4" key={product.id}>
                  <img
                    src={product.image}
                    className="card-img-top"
                    alt={product.title}
                    height="250px"
                  />
                  <div className="card-body">
                    <h5 className="card-title mb-0">
                      {product.title.substring(0, 12)}
                    </h5>
                    <p className="card-text fw-bolder fs-4">${product.price}</p>
                    <Link to={`/products/${product.id}`} className="btn btn-outline-dark">
                      Buy Now
                    </Link>
                  </div>
                </div> 
              </div>
            </>
          );
        })}
      </>
    );
  };

  return (
    <div className="container my-4 py-4">
      <div className="row">
        <div className="col-12 mb-5">
          <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
          <hr />
        </div>
      </div>
      <div className="row justify-content-center">
        {loading ? <Loading /> : <ShowProducts />}
      </div>
    </div>
  );
}

export default Products;
