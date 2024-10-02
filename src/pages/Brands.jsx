import React from 'react';
import { useNavigate } from 'react-router';
import TableComponents from '../components/global/TableComponents/TableComponents';
import { ENDPOINTS } from '../util/EndPoint';
const Brands = () => {

  const navigate = useNavigate();
  const dummyData = [
    {
      "id": 1,
      "brand_name": "OnePlus",
      "country": "India",
      "year_established": 1985
    },
    {
      "id": 2,
      "brand_name": "Xiaomi",
      "country": "USA",
      "year_established": 2003
    },
    {
      "id": 3,
      "brand_name": "Nokia",
      "country": "Japan",
      "year_established": 1976
    },
    {
      "id": 4,
      "brand_name": "Xiaomi",
      "country": "India",
      "year_established": 1961
    },
    {
      "id": 5,
      "brand_name": "Apple",
      "country": "Taiwan",
      "year_established": 1977
    },
    {
      "id": 6,
      "brand_name": "LG",
      "country": "Germany",
      "year_established": 1985
    },
    {
      "id": 7,
      "brand_name": "Acer",
      "country": "Japan",
      "year_established": 1987
    },
    {
      "id": 8,
      "brand_name": "Samsung",
      "country": "China",
      "year_established": 2009
    },
    {
      "id": 9,
      "brand_name": "Huawei",
      "country": "China",
      "year_established": 1988
    },
    {
      "id": 10,
      "brand_name": "Nokia",
      "country": "China",
      "year_established": 2014
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
      name: 'Brand Name',
      selector: (row) => row?.brand_name,
      sortable: false,
    },
    {
      name: 'Country',
      selector: (row) => row?.country,
      sortable: false,
    },
    {
      name: 'Year Established',
      selector: (row) => row?.year_established,
      sortable: false,
    },
  ];

  return (
    <div>
      <TableComponents
        title="Brands List"
        endPoint={ENDPOINTS.PaginatedProducts}
        headers={columns}
        dataDefault={dummyData}
      />
    </div>
  )
}

export default Brands;
