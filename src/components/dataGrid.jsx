import React from 'react'
import '../global.css'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  { field: 'name', headerName: 'Name', width: 150, editable: true },
  { field: 'brand', headerName: 'Brand', width: 150, editable: true },
  { field: 'price', headerName: 'Price', width: 110, editable: true },
  { field: 'discount', headerName: 'Discount', width: 110, editable: true },
];

const rows = [
  { id: 1, name: 'Product 1', brand: 'Brand A', price: 200, discount: 10 },
  { id: 2, name: 'Product 2', brand: 'Brand B', price: 200, discount: 10 },
  { id: 3, name: 'Product 3', brand: 'Brand C', price: 200, discount: 10 },
  { id: 4, name: 'Product 4', brand: 'Brand D', price: 200, discount: 10 },
  { id: 5, name: 'Product 5', brand: 'Brand E', price: 200, discount: 10 },
  { id: 6, name: 'Product 6', brand: 'Brand F', price: 200, discount: 10 },
  { id: 7, name: 'Product 7', brand: 'Brand G', price: 200, discount: 10 },
  { id: 8, name: 'Product 8', brand: 'Brand H', price: 200, discount: 10 },
  { id: 9, name: 'Product 9', brand: 'Brand I', price: 200, discount: 10 },
  { id: 10, name: 'Product 10', brand: 'Brand J', price: 200, discount: 10 },
  { id: 11, name: 'Product 11', brand: 'Brand K', price: 200, discount: 10 },
  { id: 12, name: 'Product 12', brand: 'Brand L', price: 200, discount: 10 },
  { id: 13, name: 'Product 13', brand: 'Brand M', price: 200, discount: 10 },
  { id: 14, name: 'Product 14', brand: 'Brand N', price: 200, discount: 10 },
  { id: 15, name: 'Product 15', brand: 'Brand O', price: 200, discount: 10 },
  { id: 16, name: 'Product 16', brand: 'Brand P', price: 200, discount: 10 },  
];

export const DataGridCompo = () => {
  return (
    <section className="h-full w-full m-4">
      <h1 className="h-auto w-full text-2xl font-bold flex p-4 justify-center items-center">Editable Product Table</h1>
      <div className="h-96 bg-white shadow-md rounded-lg overflow-hidden">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          className="bg-gray-100"
        />
      </div>
    </section>
  )
}
