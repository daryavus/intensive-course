import { UserTabs } from '../../widgets/UserTabs/UserTabs';
import { Outlet } from 'react-router-dom';

export const UserProfileLayout = () => {
  return (
    <div>
      <UserTabs />
      <Outlet />
    </div>
  );
};