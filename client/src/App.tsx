// import React from 'react';
// import './App.css';
// import Routers from './routers/Routers'; // Adjust the path as necessary
// import { ToastContainer } from 'react-toastify';


// function App() {
//   return (
//     <div className="App">
//       <Routers />
//       <ToastContainer />
//     </div>
//   );
// }

// export default App;




























// src/App.tsx

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





















// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { setToken, setUserDetails } from './slices/userSlice';
// import axios from 'axios';
// import Routers from './routers/Routers';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const App: React.FC = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       dispatch(setToken(token));
//       axios.get('/api/auth/user', {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//         .then((response) => {
//           const { firstName, role } = response.data;
//           dispatch(setUserDetails({ firstName, role }));
//         })
//         .catch((error) => {
//           console.error('Error fetching user:', error);
//           toast.error('Failed to fetch user details. Please log in again.');
//         });
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











































// import React, { useEffect } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Nav from './components/navbar/Nav';
// import HomePage from './pages/HomePage';
// import CartPage from './pages/CartPage';
// import FavoritePage from './pages/FavoritePage';
// import LoginPage from './pages/LoginPage';
// import RegisterPage from './pages/RegisterPage';
// import { setToken, setUserDetails } from './slices/userSlice';
// import axios from 'axios';

// const App: React.FC = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       dispatch(setToken(token));
//       axios.get('/api/user', {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//         .then((response) => {
//           const { firstName, role } = response.data;
//           dispatch(setUserDetails({ firstName, role }));
//         })
//         .catch((error) => {
//           console.error('Error fetching user:', error);
//           dispatch(setToken(null)); // Clear token on error
//         });
//     }
//   }, [dispatch]);

//   return (
//     <Router>
//       <div className="App">
//         <Nav />
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/cart" element={<CartPage />} />
//           <Route path="/favorite" element={<FavoritePage />} />
//           <Route path="/log-in" element={<LoginPage />} />
//           <Route path="/register" element={<RegisterPage />} />
//         </Routes>
//         <ToastContainer />
//       </div>
//     </Router>
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
    const token = localStorage.getItem('token');
    if (token) {
      dispatch(setToken(token));
    }
  }, [dispatch]);

  return (
    <div>
      <Routers />
      <ToastContainer />
    </div>
  );
};

export default App;
