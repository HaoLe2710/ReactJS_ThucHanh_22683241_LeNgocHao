import React, { useEffect, useState } from 'react';
 import DataTableBase from 'react-data-table-component';
 
 export default function DataTable() {
   const columns = [
     {
       name: 'CUSTOMER NAME',
       selector: row => row.customer_name,
       sortable: true,
     },
     {
       name: 'COMPANY',
       selector: row => row.company,
       sortable: true,
     },
     {
       name: 'ORDER VALUE',
       selector: row => `$${row.order_value.toLocaleString()}`,
       sortable: true,
     },
     {
       name: 'ORDER DATE',
       selector: row => row.order_date,
       sortable: true,
     },
     {
       name: 'STATUS',
       selector: row => row.status,
       sortable: true,
     },
   ];
 
   const [users, setUsers] = useState([])
   useEffect(() =>{
     fetch('http://localhost:3000/user_data')
         .then((r) => r.json())
         .then((d) => setUsers(d))
   },[])
 
   return (
     <div className="p-4">
       <DataTableBase
         title="Order Management"
         columns={columns}
         data={users}
         pagination
         highlightOnHover
         selectableRows
       />
     </div>
   );
 }