import React, { useState } from 'react';

const AddProduct = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState({ name: '', brand: '', price: '', discount: '', images: [] });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files).map(file => URL.createObjectURL(file));
    setNewProduct({ ...newProduct, images: files });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(newProduct);
    setNewProduct({ name: '', brand: '', price: '', discount: '', images: [] });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-4 rounded-lg shadow-md mt-4">
      <h2 className="text-xl font-bold mb-4">Add New Product</h2>
      <input 
        type="text" 
        name="name" 
        placeholder="Product Name" 
        value={newProduct.name} 
        onChange={handleInputChange} 
        required 
        className="border p-2 m-1 w-full rounded"
      />
      <input 
        type="text" 
        name="brand" 
        placeholder="Brand" 
        value={newProduct.brand} 
        onChange={handleInputChange} 
        required 
        className="border p-2 m-1 w-full rounded"
      />
      <input 
        type="number" 
        name="price" 
        placeholder="Price" 
        value={newProduct.price} 
        onChange={handleInputChange} 
        required 
        className="border p-2 m-1 w-full rounded"
      />
      <input 
        type="number" 
        name="discount" 
        placeholder="Discount" 
        value={newProduct.discount} 
        onChange={handleInputChange} 
        required 
        className="border p-2 m-1 w-full rounded"
      />
      <input 
        type="file" 
        multiple 
        onChange={handleImageUpload} 
        className="border p-2 m-1 w-full rounded"
      />
      <button type="submit" className="bg-green-600 text-white p-2 rounded mt-2 w-full hover:bg-green-700 transition-colors duration-300">Add Product</button>
    </form>
  );
};

export default AddProduct;
