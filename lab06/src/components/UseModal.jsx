// src/components/UserModal.jsx
import React from 'react';

export default function UserModal({ isOpen, onClose, onSave, formData, setFormData, isEditing }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none backdrop-blur-[5px]">
        <div className="bg-white p-6 rounded-lg w-[400px] space-y-3 pointer-events-auto shadow-lg">
        <h2 className="text-xl font-bold mb-2">
          {isEditing ? 'Chỉnh sửa User' : 'Thêm User'}
        </h2>

        <input
          value={formData.customer_name}
          onChange={e => setFormData({ ...formData, customer_name: e.target.value })}
          className="border w-full p-1 rounded"
          placeholder="Customer Name"
        />

        <input
          value={formData.company}
          onChange={e => setFormData({ ...formData, company: e.target.value })}
          className="border w-full p-1 rounded"
          placeholder="Company"
        />

        <input
          type="number"
          value={formData.order_value}
          onChange={e => setFormData({ ...formData, order_value: parseInt(e.target.value) || 0 })}
          className="border w-full p-1 rounded"
          placeholder="Order Value"
        />

        <input
          type="date"
          value={formData.order_date}
          onChange={e => setFormData({ ...formData, order_date: e.target.value })}
          className="border w-full p-1 rounded"
        />

        <input
          value={formData.status}
          onChange={e => setFormData({ ...formData, status: e.target.value })}
          className="border w-full p-1 rounded"
          placeholder="Status"
        />

        <div className="flex justify-end gap-2 pt-2">
          <button onClick={onClose} className="px-3 py-1 border rounded">Hủy</button>
          <button onClick={onSave} className="px-3 py-1 bg-blue-600 text-white rounded">Lưu</button>
        </div>
      </div>
    </div>
  );
}
