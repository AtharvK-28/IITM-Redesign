import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function RootLayout() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
    </div>
  );
}