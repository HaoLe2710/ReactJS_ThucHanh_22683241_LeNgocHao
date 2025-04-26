// src/features/Users/UsersList.jsx
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from './usersSlice';
import { useEffect } from 'react';

export default function UsersList() {
  const dispatch = useDispatch();
  const { users, status, error } = useSelector(state => state.users);

  // Tải dữ liệu khi component được render
  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUsers());
    }
  }, [dispatch, status]);

  return (
    <div style={{ border: '1px solid orange', padding: '1rem', margin: '1rem' }}>
      <h2>📚 Danh sách Người dùng</h2>
      {status === 'loading' && <p>Đang tải dữ liệu...</p>}
      {status === 'failed' && <p>Lỗi: {error}</p>}
      {status === 'succeeded' && (
        <ul>
          {users.map(user => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      )}
      {status === 'idle' && <button onClick={() => dispatch(fetchUsers())}>Tải dữ liệu</button>}
    </div>
  );
}
