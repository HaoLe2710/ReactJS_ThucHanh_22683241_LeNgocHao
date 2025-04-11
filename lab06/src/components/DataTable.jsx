import React, { useEffect, useState } from 'react';
import DataTableBase from 'react-data-table-component';
import UserModal from './UseModal';
import { createUser, deleteUser, getUsers, updateUser } from '../services/useService';
import StatusBagde from './StatusBagde';

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
      selector: row => <StatusBagde status={row.status}/>,
      sortable: true,
    },
    {
        name: 'Actions',
        cell: row => (
          <div className="flex gap-2">
            <button onClick={() => handleEdit(row)} className="text-blue-600 underline">
              Sửa
            </button>
            <button onClick={() => handleDelete(row.id)} className="text-red-600 underline">
              Xoá
            </button>
          </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      }
  ];

  const [users, setUsers] = useState([])
  const [modalOpen, setModalOpen] = useState(false)
  const [formData, setFormData] = useState({ customer_name: '', company: '', order_value: '', order_date: '', status: '' });
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)
  
  const fecthUserData = async () =>{
    try{
        const data = await getUsers();
        setUsers(data)
    }catch(e){
        alert(e)
    }
  }
  
  useEffect(() =>{
    fecthUserData()
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
    try{
        if(isEditing){
            await updateUser(editId, formData)
        }else{
            await createUser(formData)
        }
        setModalOpen(false)
        fecthUserData()
    }catch(e){
        alert(e)
    }
  }

  const handleDelete = async(id) => {
    const confirm  =  window.confirm("Bạn có chắc chắn muốn xoá ?")
    if(!confirm){
        return
    }
    try{
        await deleteUser(id)
        fecthUserData()
    }catch(e){
        alert("Xoá thất bại" + e)
    }
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
