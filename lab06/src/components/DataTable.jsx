import React, { useEffect, useState } from 'react';
import DataTableBase from 'react-data-table-component';
import UserModal from './UseModal';
import { createUser, deleteUser, getUsers, updateUser } from '../services/useService';
import StatusBagde from './StatusBagde';
import report from '../assets/profit-report.png'


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
            <button onClick={() => handleEdit(row)} className="p-1 m-1 ring-1 ring-blue-500 rounded-xl text-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white">
              Sửa
            </button>
            <button onClick={() => handleDelete(row.id)} className="p-1 m-1 ring-1 ring-red-500 rounded-xl text-red-500 cursor-pointer hover:bg-red-500 hover:text-white">
              Xoá
            </button>
          </div>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      }
  ];

  const customStyles = {
    table: {
      style: {
        border: '1px solid #ccc',
        borderRadius: '10px',
      },
    },
    headRow: {
      style: {
        backgroundColor: '#e0f2fe', // màu xanh nhạt
        color: '#1e3a8a', // màu chữ xanh đậm
        fontWeight: 'bold',
        borderBottom: '2px solid #60a5fa',
      },
    },
    headCells: {
      style: {
        borderRight: '1px solid #ccc',
        paddingLeft: '12px',
        paddingRight: '12px',
      },
    },
    rows: {
      style: {
        borderBottom: '1px solid #e5e7eb',
      },
    },
    cells: {
      style: {
        paddingLeft: '12px',
        paddingRight: '12px',
      },
    },
  };
  

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
            <div className='flex gap-2'>
                <img className='size-[30px]' src={report} alt="" />
                <p className='font-bold text-2xl'>Detailed report</p>
            </div>
        <button onClick={handleAdd} className="px-2 py-1 m-1 ring-1 ring-green-500 rounded-xl text-green-500 cursor-pointer hover:bg-green-500 hover:text-white">
          + Thêm User
        </button>
      </div>
      <DataTableBase
        columns={columns}
        data={users}
        pagination
        highlightOnHover
        selectableRows
        customStyles={customStyles}
      />
      <UserModal isOpen={modalOpen} onClose={() => setModalOpen(false)} onSave={handleSave} formData={formData} setFormData={setFormData} isEditing={isEditing}/>
    </div>
  );
}
