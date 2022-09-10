import { Routes, Route } from 'react-router-dom';
import Layout from '@components/Layout';
import Home from '@/screens/Home';
import Admin from '@/screens/Admin';
import Users from '@/screens/Users';
import Editor from '@/screens/Editor';
import Public from '@/screens/Public';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        {/* protective route */}
        <Route path='/' element={<Home />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/users' element={<Users />} />
        <Route path='/editor' element={<Editor />} />

        {/* Public route */}
        <Route path='/public' element={<Public />} />
      </Route>
    </Routes>
  );
}
