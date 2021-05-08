/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable max-len */
import React from 'react';
import { Label } from 'react-bootstrap';
import ProductRow from './ProductRow.jsx';

const ProductTable = ({ products, deleteProduct }) => (
  <div>
    <p>Showing all available products</p>
    <hr />
    <table>
      <thead>
        <tr>
          <th className="table-col">Product Name</th>
          <th className="table-col">Price</th>
          <th className="table-col">Category</th>
          <th className="table-col">Image</th>
          <th className="table-col">Action</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product, index) => <ProductRow product={product} index={index} key={product.id} deleteProduct={deleteProduct} />)}
      </tbody>
    </table>
  </div>
);

export default ProductTable;
