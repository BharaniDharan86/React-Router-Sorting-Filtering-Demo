/* eslint-disable react/prop-types */
const productStyle = {
  border: "1px solid #ccc",
  padding: "10px",
  marginBottom: "20px",
  width: "100%", // Set width to 100%
  boxSizing: "border-box", // Include padding and border in the width calculation
  textAlign: "center",
};

const imageStyle = {
  maxWidth: "100%",
  maxHeight: "120px",
  objectFit: "cover",
  marginBottom: "10px",
};

function ProductList({ products }) {
  return (
    <div>
      {products.map((product) => (
        <div key={product.id} style={productStyle}>
          <img src={product.image} alt={product.title} style={imageStyle} />
          <p style={{ fontWeight: "bold" }}>{product.title}</p>
          <p>Price: ${product.price}</p>
          <p>Rating: {product.rating.rate}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
