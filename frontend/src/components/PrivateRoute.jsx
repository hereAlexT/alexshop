import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

/**
 * PrivateRoute component.
 * 
 * Renders the Outlet component if the user is authenticated, otherwise redirects to the login page.
 *
 * @returns {JSX.Element} The rendered Outlet component or a Navigate component redirecting to the login page.
 */
const PrivateRoute = () => {
    const { userInfo } = useSelector((state) => state.auth);
    return userInfo ? <Outlet /> : <Navigate to='/login' replace />;
};
export default PrivateRoute;
