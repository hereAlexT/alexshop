import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * Renders the AdminRoute component.
 * 
 * This component checks if the user is an admin and renders the child components
 * wrapped in an Outlet component if the user is an admin. Otherwise, it redirects
 * the user to the login page.
 * 
 * @returns {JSX.Element} The rendered AdminRoute component.
 */
const AdminRoute = () => {
    const { userInfo } = useSelector((state) => state.auth);
    return userInfo && userInfo.isAdmin ? (
        <Outlet />
    ) : (
        <Navigate to='/login' replace />
    );
};

export default AdminRoute;
