import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import DashBoard from './pages/Dashboard';
import { useState } from 'react';

function App() {
  const [username, setUsername] = useState(JSON.parse(localStorage.getItem('username')) || '');

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="login" element={<Login username={username} setUsername={setUsername} />} />
          <Route path="dashboard" element={<DashBoard username={username} setUsername={setUsername} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
