import { NavLink, useParams } from 'react-router-dom';
import styles from './UserTabs.module.css';

export const UserTabs = () => {
  const { id } = useParams();

  return (
    <nav className={styles.usertabs}>
      <NavLink 
        to={`/users/${id}/posts`}
        style={({ isActive }) => ({
          color: isActive ? 'blue' : 'var(--text-color)'
        })}
      >
        Посты
      </NavLink>
      <NavLink 
        to={`/users/${id}/albums`}
        style={({ isActive }) => ({
          color: isActive ? 'blue' : 'var(--text-color)'
        })}
      >
        Альбомы
      </NavLink>
      <NavLink 
        to={`/users/${id}/todos`}
        style={({ isActive }) => ({
          color: isActive ? 'blue' : 'var(--text-color)'
        })}
      >
        To do
      </NavLink>
    </nav>
  );
};