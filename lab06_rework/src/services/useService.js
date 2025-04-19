
const API_URL = 'http://localhost:3000/user_data';

export const getUsers = async () => {
  const res = await fetch(API_URL);
  if (!res.ok) throw new Error('Lỗi khi tải danh sách user');
  return await res.json();
};

export const createUser = async (data) => {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Lỗi khi thêm user');
  return await res.json();
};

export const updateUser = async (id, data) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error('Lỗi khi cập nhật user');
  return await res.json();
};

export const deleteUser = async (id) => {
    const res = await fetch(`http://localhost:3000/user_data/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) throw new Error('Lỗi khi xoá user');
  };
  