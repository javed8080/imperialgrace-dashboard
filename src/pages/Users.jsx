import React from 'react';
import { useNavigate } from 'react-router';
import TableComponents from '../components/global/TableComponents/TableComponents';
import { ENDPOINTS } from '../util/EndPoint';
const Users = () => {

  const navigate = useNavigate();
  const dummyData = [
    {
      "id": 1,
      "first_name": "Itjfs",
      "last_name": "Cmggwgdjb",
      "email": "itjfs.cmggwgdjb@example.com",
      "phone_number": "+1-975-271-9067"
    },
    {
      "id": 2,
      "first_name": "Rfy",
      "last_name": "Ptivi",
      "email": "rfy.ptivi@example.com",
      "phone_number": "+1-296-382-4592"
    },
    {
      "id": 3,
      "first_name": "Rbavsjt",
      "last_name": "Lssyon",
      "email": "rbavsjt.lssyon@example.com",
      "phone_number": "+1-367-614-3873"
    },
    {
      "id": 4,
      "first_name": "Osxnm",
      "last_name": "Vofbw",
      "email": "osxnm.vofbw@example.com",
      "phone_number": "+1-689-624-2829"
    },
    {
      "id": 5,
      "first_name": "Zmisn",
      "last_name": "Dudabyn",
      "email": "zmisn.dudabyn@example.com",
      "phone_number": "+1-956-644-4031"
    },
    {
      "id": 6,
      "first_name": "Uwjxhtr",
      "last_name": "Cwzssz",
      "email": "uwjxhtr.cwzssz@example.com",
      "phone_number": "+1-186-735-9276"
    },
    {
      "id": 7,
      "first_name": "Ztjv",
      "last_name": "Zxtxtve",
      "email": "ztjv.zxtxtve@example.com",
      "phone_number": "+1-572-346-1543"
    },
    {
      "id": 8,
      "first_name": "Xzxfcdm",
      "last_name": "Fkcfp",
      "email": "xzxfcdm.fkcfp@example.com",
      "phone_number": "+1-262-694-2786"
    },
    {
      "id": 9,
      "first_name": "Dhfgyt",
      "last_name": "Kdskhetf",
      "email": "dhfgyt.kdskhetf@example.com",
      "phone_number": "+1-101-326-5842"
    },
    {
      "id": 10,
      "first_name": "Xrwkksw",
      "last_name": "Mpuxsyvok",
      "email": "xrwkksw.mpuxsyvok@example.com",
      "phone_number": "+1-492-782-7946"
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
      name: 'First Name',
      selector: (row) => row?.first_name,
      sortable: false,
    },
    {
      name: 'Last Name',
      selector: (row) => row?.last_name,
      sortable: false,
    },
    {
      name: 'Phone Number',
      selector: (row) => row?.phone_number,
      sortable: false,
    },

  ];
  return (
    <div>
      <TableComponents
        title="Users List"
        endPoint={ENDPOINTS.PaginatedUsers}
        headers={columns}
        dataDefault={dummyData}
      />
    </div>
  )
}

export default Users;
