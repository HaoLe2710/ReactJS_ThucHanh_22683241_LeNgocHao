import React, { useEffect, useState } from 'react';
import DataTableBase from 'react-data-table-component';
import UserModal from './UseModal';

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
    {
        name: 'Actions',
        cell: row => (
          <button onClick={() => handleEdit(row)} className="text-blue-600 underline">
            Sửa
          </button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
  ];

  const [users, setUsers] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [formData, setFormData] = useState({ customer_name: '', company: '', order_value: '', order_date: '', status: '' });
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  
  const fecth_user = () =>{
    fetch('http://localhost:3000/user_data')
        .then((r) => r.json())
        .then((d) => setUsers(d))
  }
  
  useEffect(() =>{
    fecth_user()
  },[])

  const handleEdit = (row) => {
    setIsEditing(true);
    setEditId(row.id);
    setFormData({ ...row });
    setModalOpen(true);
  }

  const handleAdd = () => {
    setIsEditing(false);
    setFormData({ customer_name: '', company: '', order_value: '', order_date: '', status: '' });
    setModalOpen(true);
  }


  const handleSave = async () => {
    if (isEditing) {
      await fetch(`http://localhost:3000/user_data/${editId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    } else {
      await fetch('http://localhost:3000/user_data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
    }
    setModalOpen(false);
    fecth_user();
  }

  return (
    <div className="p-4">
        <div className="flex justify-between mb-2">
            <div><p>Detailed report</p></div>
        <button onClick={handleAdd} className="bg-green-500 text-white px-4 py-1 rounded">
          + Thêm User
        </button>
      </div>
      <DataTableBase
        columns={columns}
        data={users}
        pagination
        highlightOnHover
        selectableRows
      />
      <UserModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSave={handleSave} formData={formData} setFormData={setFormData} isEditing={isEditing}/>
    </div>
  );
}
