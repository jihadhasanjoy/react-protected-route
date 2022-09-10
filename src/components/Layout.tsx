import { Outlet } from 'react-router-dom';
import Header from './Header';

export default function Layout() {
  return (
    <main className='App'>
      <Header />
      <div className='container'>
        <Outlet />
      </div>
    </main>
  );
}
