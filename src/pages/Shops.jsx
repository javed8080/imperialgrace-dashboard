import React from 'react';
import { useNavigate } from 'react-router';
import TableComponents from '../components/global/TableComponents/TableComponents';
import { ENDPOINTS } from '../util/EndPoint';
const Shops = () => {

  const navigate = useNavigate();
  const dummyData = [
    {
      "id": 1,
      "shop_name": "Tech Haven",
      "location": "India",
      "year_established": 2015
    },
    {
      "id": 2,
      "shop_name": "Gadget World",
      "location": "USA",
      "year_established": 2010
    },
    {
      "id": 3,
      "shop_name": "Nokia Store",
      "location": "Japan",
      "year_established": 2005
    },
    {
      "id": 4,
      "shop_name": "Xiaomi Plaza",
      "location": "India",
      "year_established": 2018
    },
    {
      "id": 5,
      "shop_name": "Apple Center",
      "location": "Taiwan",
      "year_established": 2000
    },
    {
      "id": 6,
      "shop_name": "LG Electronics Shop",
      "location": "Germany",
      "year_established": 2012
    },
    {
      "id": 7,
      "shop_name": "Acer Outlet",
      "location": "Japan",
      "year_established": 2016
    },
    {
      "id": 8,
      "shop_name": "Samsung Experience Store",
      "location": "China",
      "year_established": 2019
    },
    {
      "id": 9,
      "shop_name": "Huawei Experience Center",
      "location": "China",
      "year_established": 2017
    },
    {
      "id": 10,
      "shop_name": "Nokia Service Center",
      "location": "China",
      "year_established": 2020
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
      name: 'Shop Name',
      selector: (row) => row.shop_name,
      sortable: false,
    },
    {
      name: 'Location',
      selector: (row) => row.location,
      sortable: false,
    },
    {
      name: 'Year Established',
      selector: (row) => row.year_established,
      sortable: false,
    },
  ];
  return (
    <div>
      <TableComponents
        title="Shops List"
        endPoint={ENDPOINTS.PaginatedUsers}
        headers={columns}
        dataDefault={dummyData}
      />
    </div>
  )
}

export default Shops;
