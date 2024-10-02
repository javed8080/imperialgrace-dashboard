import React from 'react';
import { useNavigate } from 'react-router';
import TableComponents from '../components/global/TableComponents/TableComponents';
import { ENDPOINTS } from '../util/EndPoint';
const Products = () => {

  const navigate = useNavigate();
  const dummyData = [
    {
      "id": 1,
      "product_name": "Tablet",
      "price": "$88.54",
      "stock": 114,
      "status": "Available"
    },
    {
      "id": 2,
      "product_name": "Speaker",
      "price": "$1361.91",
      "stock": 175,
      "status": "Preorder"
    },
    {
      "id": 3,
      "product_name": "Laptop",
      "price": "$1456.28",
      "stock": 334,
      "status": "Available"
    },
    {
      "id": 4,
      "product_name": "Keyboard",
      "price": "$1958.24",
      "stock": 395,
      "status": "Out of Stock"
    },
    {
      "id": 5,
      "product_name": "Camera",
      "price": "$1919.34",
      "stock": 167,
      "status": "Available"
    },
    {
      "id": 6,
      "product_name": "Camera",
      "price": "$1168.2",
      "stock": 85,
      "status": "Preorder"
    },
    {
      "id": 7,
      "product_name": "Tablet",
      "price": "$1335.45",
      "stock": 18,
      "status": "Preorder"
    },
    {
      "id": 8,
      "product_name": "Laptop",
      "price": "$1611.35",
      "stock": 333,
      "status": "Out of Stock"
    },
    {
      "id": 9,
      "product_name": "Mouse",
      "price": "$1879.33",
      "stock": 463,
      "status": "Out of Stock"
    },
    {
      "id": 10,
      "product_name": "Printer",
      "price": "$1536.54",
      "stock": 296,
      "status": "Preorder"
    }
  ]

  const columns = [
    {
      name: 'ID',
      selector: (row) => row.id,
      sortable: false,
      width: '60px',
    },
    {
      name: 'Product Name',
      selector: (row) => row?.product_name,
      sortable: false,
    },
    {
      name: 'Price',
      selector: (row) => row?.price,
      sortable: false,
    },
    {
      name: 'Stock',
      selector: (row) => row?.stock,
      sortable: false,
    },
    {
      name: 'Status',
      selector: (row) => row?.status,
      sortable: false,
    },
  ];

  return (
    <div>
      <TableComponents
        title="Products List"
        endPoint={ENDPOINTS.PaginatedProducts}
        headers={columns}
        dataDefault={dummyData}
      />
    </div>
  )
}

export default Products;
