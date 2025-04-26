// src/features/Auth/AuthComponent.jsx
import { useSelector, useDispatch } from 'react-redux';
import { login, logout } from './authSlice';

export default function AuthComponent() {
  const dispatch = useDispatch();
  const { user, isLoggedIn } = useSelector(state => state.auth);

  const handleLogin = () => {
    const userInfo = { name: 'John Doe', email: 'johndoe@example.com' };
    dispatch(login(userInfo));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div style={{ border: '1px solid purple', padding: '1rem', margin: '1rem' }}>
      <h2>🎯 Quản lý Đăng nhập</h2>
      {isLoggedIn ? (
        <>
          <p>Chào mừng, {user.name}!</p>
          <p>Email: {user.email}</p>
          <button onClick={handleLogout}>Đăng xuất</button>
        </>
      ) : (
        <div>
          <p>Vui lòng đăng nhập.</p>
          <button onClick={handleLogin}>Đăng nhập</button>
        </div>
      )}
    </div>
  );
}
