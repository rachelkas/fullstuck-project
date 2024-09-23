// // src/App.tsx
// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setToken } from './slices/userSlice';
// import Routers from './routers/Routers';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App: React.FC = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       dispatch(setToken(token));
//     }
//   }, [dispatch]);

//   return (
//     <div>
//       <Routers />
//       <ToastContainer />
//     </div>
//   );
// };

// export default App;


















































// src/App.tsx

import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setToken } from './slices/userSlice';
import Routers from './routers/Routers';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Get the token from localStorage when the app loads
    const token = localStorage.getItem('token');

    // If a token is found, dispatch the setToken action to save it in Redux store
    if (token) {
      dispatch(setToken(token));
    }
  }, [dispatch]);

  return (
    <div>
      {/* Routers component manages all the app routes */}
      <Routers />

      {/* ToastContainer for showing notifications using react-toastify */}
      <ToastContainer />
    </div>
  );
};

export default App;
