import { useEffect, useState } from "react";
import { Product } from "../model/product";


function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(response => response.json())
      .then(data => setProducts(data));
  }, [])
  
  return (
    <div >
      <>
      <h1>ReStore</h1>
      <ul>
        {products.map((product) =>(
          <li key={product.id}>{product.name} - R{(product.price/100).toFixed(2)}</li>
        ))}
      </ul>
      </>
    </div>
  );
}

export default App;
