// src/App.tsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from './slices/userSlice';
import Routers from './routers/Routers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Make sure this is imported

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setToken(token));
    }
  }, [dispatch]);

  return (
    <div>
      <Routers />
      <ToastContainer /> {/* Make sure this is placed here */}
    </div>
  );
};

export default App;
