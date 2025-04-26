import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../features/Auth/authSlice';

export default function AuthComponent() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const user = useSelector(state => state.auth.user);

  const handleLogin = () => {
    dispatch(login({ name: 'John Doe', email: 'john@example.com' }));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h2>{isLoggedIn ? `Chào mừng ${user.name}` : 'Vui lòng đăng nhập'}</h2>
      {isLoggedIn ? (
        <button onClick={handleLogout}>Đăng xuất</button>
      ) : (
        <button onClick={handleLogin}>Đăng nhập</button>
      )}
    </div>
  );
}
