import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth/useAuth';


const PrivateRoute = ({ children }) => {
    let location = useLocation();
	const { user } = useAuth();
if(user.email){
		return children
	}
	else{
		return <Navigate to="/login" state={{ from: location }} />
	}
};

export default PrivateRoute;