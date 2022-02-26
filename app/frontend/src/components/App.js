import { Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import './App.scss';
import Profile from './Profile';
import Login from './Login';
import Dashboard from './Dashboard';

function App() {

  const { isLoading } = useAuth0();

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/profile" element={<Profile/>}/>

      </Routes>
    </div>
  );
}

export default App;
