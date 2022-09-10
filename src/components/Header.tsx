import '@styles/header.scss';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div className='header'>
      <div className='item'>
        <Link to='/'>Home</Link>
      </div>
      <div className='item'>
        <Link to='/admin'>Admin</Link>
      </div>
      <div className='item'>
        <Link to='/editor'>Editor</Link>
      </div>
      <div className='item'>
        <Link to='/users'> All User</Link>
      </div>
      <div className='item'>
        <Link to='/public'> Public</Link>
      </div>
      <div className='item'>
        <Link to='/login'> Login</Link>
      </div>
    </div>
  );
}
