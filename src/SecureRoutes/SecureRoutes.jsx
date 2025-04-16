import React, { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Handler from '../Common/Handler';
import { useLoader } from '../Common/Loader/useLoader';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const SecureRoutes = () => {
  const [auth, setAuth] = useState(null); // null means "still checking"
  const { startLoading, stopLoading } = useLoader();

  useEffect(() => {
    const checkAuth = async () => {
      startLoading(); // Start global loader
      try {
        const token = localStorage.getItem('token');
        // setAuth(!!token); // true if token exists
        setAuth(true); // true if token exists
      } catch (error) {
        console.error("Error fetching token:", error);
        setAuth(false);
      }
    };

    checkAuth();
  }, []);

  useEffect(() => {
    if (auth !== null) {
      stopLoading(); // Stop loader once auth is determined
    }
  }, [auth]);

  if (auth === null) return null; // Don't render anything, just show global loader

  if (!auth) return <Navigate to="/sign-in" />;
  
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default SecureRoutes;
