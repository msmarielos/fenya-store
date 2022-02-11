import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import AdminNav from '../AdminNav/AdminNav';
import './AdminPage.scss';

export default function AdminPage() {
  const { user } = useSelector(state => state.users);

  return user.user.isAdmin ? (
    <div className="admin-panel">
      <h2>Панель администратора</h2>
      <hr />
      <div className="admin-container">
        <AdminNav />
        <Outlet />
      </div>
    </div>
  ) : null;
}
