import React, { useEffect, useState } from "react";

const Product = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [about, setAbout] = useState("");
  const [product, setProduct] = useState([]);

  const [editIndex, setEditIndex] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const storedProducts = JSON.parse(localStorage.getItem("product"));
    if (storedProducts) {
      setProduct(storedProducts);
    }
  }, []);

  useEffect(() => {
    if (product.length > 0) {
      localStorage.setItem("product", JSON.stringify(product));
    }
  }, [product]);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = { name, description, price, about, image };

    if (editIndex !== null) {
      const updatedProducts = [...product];
      updatedProducts[editIndex] = newProduct;
      setProduct(updatedProducts);
      setEditIndex(null);
    } else {
      setProduct([...product, newProduct]);
    }

    setName("");
    setDescription("");
    setPrice("");
    setAbout("");
    setImage(null);
  };

  const handleEdit = (index) => {
    const selectedProduct = product[index];
    setName(selectedProduct.name);
    setPrice(selectedProduct.price);
    setDescription(selectedProduct.description);
    setAbout(selectedProduct.about);
    setImage(selectedProduct.image);
    setEditIndex(index);
  };

  function handleDelete(index) {
    setProduct(product.filter((_, i) => i !== index));
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <main style={{ padding: "150px 40px", display: "flex" }}>
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "15px",
          padding: "40px 20px",
          height: "500px",
          width: "500px",
          border: "1.5px solid black",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h2
            style={{
              display: "flex",
              justifyContent: "center",
              paddingBottom: "20px",
            }}
          >
            <u> Add Products </u>
          </h2>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "stretch",
              flexWrap: "wrap",
              gap: "10px",
            }}
          >
            <div style={{ flexBasis: "300px", flexGrow: "1", flexShrink: "0" }}>
              <label
                style={{
                  display: "flex",
                  fontSize: "1.1rem",
                  fontWeight: "normal",
                  marginBottom: "2px",
                }}
                htmlFor="productName"
              >
                Product Name
              </label>
              <input
                id="productName"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  display: "flex",
                  width: "100%",
                  padding: "10px 10px",
                  borderRadius: "5px",
                  border: "1px solid rgb(179, 178, 178)",
                }}
              />
            </div>

            <div style={{ flexBasis: "300px", flexGrow: "1", flexShrink: "0" }}>
              <label
                htmlFor="price"
                style={{
                  display: "flex",
                  fontSize: "1.1rem",
                  fontWeight: "normal",
                  marginBottom: "2px",
                }}
              >
                Product Price{" "}
              </label>
              <input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                style={{
                  display: "flex",
                  width: "100%",
                  padding: "10px 10px",
                  borderRadius: "5px",
                  border: "1px solid rgb(179, 178, 178)",
                }}
              />
            </div>
            <div style={{ flexBasis: "300px", flexGrow: "1", flexShrink: "0" }}>
              <label
                htmlFor="description"
                style={{
                  display: "flex",
                  fontSize: "1.1rem",
                  fontWeight: "normal",
                  marginBottom: "2px",
                }}
              >
                Description
              </label>
              <input
                id="description"
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                style={{
                  display: "flex",
                  width: "100%",
                  padding: "10px 10px",
                  borderRadius: "5px",
                  border: "1px solid rgb(179, 178, 178)",
                }}
              />
            </div>
            <div style={{ flexBasis: "300px", flexGrow: "1", flexShrink: "0" }}>
              <label
                htmlFor="about"
                style={{
                  display: "flex",
                  fontSize: "1.1rem",
                  fontWeight: "normal",
                  marginBottom: "2px",
                }}
              >
                About
              </label>
              <input
                id="about"
                type="text"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                style={{
                  display: "flex",
                  width: "100%",
                  padding: "10px 10px",
                  borderRadius: "5px",
                  border: "1px solid rgb(179, 178, 178)",
                }}
              />
            </div>
            <div
              style={{
                minWidth: "100%",
                flexBasis: "300px",
                flexGrow: "1",
                flexShrink: "0",
              }}
            >
              <label
                htmlFor="image"
                style={{
                  display: "flex",
                  fontSize: "1.1rem",
                  fontWeight: "normal",
                  marginBottom: "2px",
                }}
              >
                Product Image
              </label>
              <input
                onChange={handleImageUpload}
                id="image"
                type="file"
                accept="images/*"
                style={{
                  display: "flex",
                  width: "100%",
                  padding: "10px 10px",
                  borderRadius: "5px",
                  border: "1px solid rgb(179, 178, 178)",
                }}
              />
            </div>
            <div
              style={{
                minWidth: "100%",
                flexBasis: "300px",
                flexGrow: "1",
                flexShrink: "0",
              }}
            >
              <button
                onClick={handleSubmit}
                type="submit"
                style={{
                  display: "flex",
                  width: "100%",
                  padding: "10px 10px",
                  borderRadius: "5px",
                  border: "1px solid rgb(179, 178, 178)",
                }}
              >
          {editIndex!== null ? "Update" : "Submit"}

              </button>
            </div>
          </div>
        </form>
      </div>
      <div style={{ marginLeft: "130px" }}>
        <div>
          {product.length ? (
            <table
              style={{
                border: "1px solid black",
                borderRadius: "20px",
                padding: "10px",
              }}
            >
              <thead>
                <tr>
                  <th style={{ padding: "20px" }}>Id</th>
                  <th style={{ padding: "20px" }}>Product Name</th>
                  <th style={{ padding: "20px" }}>Description</th>
                  <th style={{ padding: "20px" }}>Price</th>
                  <th style={{ padding: "20px" }}>Delivery</th>
                  <th style={{ padding: "20px" }}>Image</th>
                  <th style={{ padding: "20px" }}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {product.map((product, index) => (
                  <tr key={index}>
                    <td style={{ padding: "20px" }}>{index + 1}</td>
                    <td style={{ padding: "20px" }}>{product.name}</td>
                    <td style={{ padding: "20px" }}>{product.price}</td>
                    <td style={{ padding: "20px" }}>{product.description}</td>
                    <td style={{ padding: "20px" }}>{product.about}</td>
                    <td>
                      {product.image && (
                        <img
                          style={{
                            objectFit: "contain ",
                            border: "1px solid black",
                            borderRadius: "8px",
                            height: "100px",
                            width: "100px",
                          }}
                          src={product.image}
                          alt="img"
                        />
                      )}
                    </td>
                    <td style={{ padding: "20px" }}>
                      <button
                        style={{
                          border: "none",
                          padding: "8px ",
                          borderRadius: "5px",
                          backgroundColor: "blue",
                          color: "white",
                          marginRight: "3px",
                        }}
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                      <button
                        style={{
                          border: "none",
                          padding: "8px ",
                          borderRadius: "5px",
                          backgroundColor: "red",
                          color: "white",
                          marginRight: "3px",
                        }}
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No products available.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Product;
