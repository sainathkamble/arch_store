import React from 'react'
import './global.css';
import { DataGridCompo } from './components/dataGrid.jsx';
import { ProductList } from './components/productList.jsx';
import { Menu } from './components/menu.jsx';

function App() {

  return (
    <main>
      <DataGridCompo />
      <ProductList />
      <Menu />
    </main>
  )
}

export default App
