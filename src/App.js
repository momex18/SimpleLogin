import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login'
import CreateAccount from './components/CreateAccount/CreateAccount'
import useToken from './components/App/useToken';

function App() {
  const { token, setToken } = useToken();

  const url = window.location.href
  let isCreateAccount = url.includes('CreateAccount')
  let createdAccount = sessionStorage.getItem('created') === 'true'
  // console.log("Does this contain create account? " + createdAccount)

  if (!token && !isCreateAccount ) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/CreateAccount" element={<CreateAccount />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
