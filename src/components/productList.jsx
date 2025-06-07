import React, { useState } from 'react';
import '../global.css';
import AddProduct from './AddProduct';

const initialProducts = [
  { id: 1, name: 'Product 1', brand: 'Brand A', price: 100, discount: 10, images: ['image1.jpg', 'image2.jpg'] },
  { id: 2, name: 'Product 2', brand: 'Brand B', price: 200, discount: 20, images: ['image3.jpg', 'image4.jpg'] },
  // ... more products
];

const ProductCard = ({ product }) => (
  <div className="border rounded-lg p-4 m-2 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
    <h2 className="text-lg font-bold">{product.name}</h2>
    <p className="text-gray-600">{product.brand}</p>
    <p className="text-xl font-semibold">${product.price} <span className="text-red-500">-{product.discount}%</span></p>
    <div className="flex flex-wrap">
      {product.images.map((img, index) => (
        <img key={index} src={img} alt={product.name} className="w-16 h-16 object-cover m-1 rounded" />
      ))}
    </div>
  </div>
);

export const ProductList = () => {
  const [products, setProducts] = useState(initialProducts);
  const [showForm, setShowForm] = useState(false);

  const handleAddProduct = (newProduct) => {
    const productWithId = { ...newProduct, id: products.length + 1 };
    setProducts([productWithId, ...products]);
    setShowForm(false);
  };

  return (
    <section className="h-full w-full m-4">
      <h1 className="h-auto w-full text-2xl font-bold flex p-4 justify-center items-center">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <button 
        className="bg-blue-600 text-white p-2 rounded mt-4 hover:bg-blue-700 transition-colors duration-300" 
        onClick={() => setShowForm(!showForm)}
      >
        {showForm ? 'Cancel' : 'Add New Product'}
      </button>
      {showForm && <AddProduct onAddProduct={handleAddProduct} />}
    </section>
  );
};