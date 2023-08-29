import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/Auth';
import { Navigate, useLocation } from 'react-router-dom';
import { Rings } from 'react-loader-spinner';

const PrivateRoute = ({ children }) => {
     const { user, loading } = useContext(AuthContext);
     const location = useLocation();

     if (loading) {
          return (
               <div className="h-screen bg-white">
                    <div className="flex justify-center items-center h-full">
                         <Rings
                          
                              height="100"
                              width="100"
                              color="#6F8FAF"
                              radius="6"
                              wrapperStyle={{}}
                              wrapperClass=""
                              visible={true}
                              ariaLabel="rings-loading"
                         />
                    </div>
               </div>
          )
     }



     if (user) {
          return children;
     }

     return <Navigate to="/signIn" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;