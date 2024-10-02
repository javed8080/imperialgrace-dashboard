import React from 'react';
import { useNavigate } from 'react-router';
import TableComponents from '../components/global/TableComponents/TableComponents';
import { ENDPOINTS } from '../util/EndPoint';
const Orders = () => {

  const navigate = useNavigate();
  const dummyData = [
    {
      order_id: 1,
      customer_name: 'John Doe',
      shop_name: 'Tech Haven',
      order_date: '2023-09-15',
    },
    {
      order_id: 2,
      customer_name: 'Jane Smith',
      shop_name: 'Gadget World',
      order_date: '2023-09-16',
    },
    {
      order_id: 3,
      customer_name: 'Alice Johnson',
      shop_name: 'Nokia Store',
      order_date: '2023-09-17',
    },
    {
      order_id: 4,
      customer_name: 'Bob Brown',
      shop_name: 'Xiaomi Plaza',
      order_date: '2023-09-18',
    },
    {
      order_id: 5,
      customer_name: 'Charlie Davis',
      shop_name: 'Apple Center',
      order_date: '2023-09-19',
    },
    {
      order_id: 6,
      customer_name: 'Eve Wilson',
      shop_name: 'LG Electronics Shop',
      order_date: '2023-09-20',
    },
    {
      order_id: 7,
      customer_name: 'Dave Lee',
      shop_name: 'Acer Outlet',
      order_date: '2023-09-21',
    },
    {
      order_id: 8,
      customer_name: 'Grace Kim',
      shop_name: 'Samsung Experience Store',
      order_date: '2023-09-22',
    },
    {
      order_id: 9,
      customer_name: 'Hank Green',
      shop_name: 'Huawei Experience Center',
      order_date: '2023-09-23',
    },
    {
      order_id: 10,
      customer_name: 'Ivy Taylor',
      shop_name: 'Nokia Service Center',
      order_date: '2023-09-24',
    },
  ];


  const columns = [
    {
      name: 'Order ID',
      selector: (row) => row.order_id,
      sortable: false,
      width: '80px',
    },
    {
      name: 'Customer Name',
      selector: (row) => row.customer_name,
      sortable: false,
    },
    {
      name: 'Shop Name',
      selector: (row) => row.shop_name,
      sortable: false,
    },
    {
      name: 'Order Date',
      selector: (row) => row.order_date,
      sortable: false,
    },
  ];

  return (
    <div>
      <TableComponents
        title="Orders List"
        endPoint={ENDPOINTS.PaginatedUsers}
        headers={columns}
        dataDefault={dummyData}
      />
    </div>
  )
}

export default Orders;
