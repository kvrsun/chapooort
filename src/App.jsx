// Temporary App.jsx for troubleshooting
import { Outlet } from 'react-router-dom';

export default function App() {
  return (
    <div style={{ padding: '40px', background: 'white', color: 'black' }}>
      <h1>Shell is working!</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
