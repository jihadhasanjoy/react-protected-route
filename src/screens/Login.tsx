import { useState } from 'react';
import '@styles/login.scss';
import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState<string>();
  const handleSubmit = () => {
    console.log(email);
  };
  return (
    <div className='login-page'>
      <section className='selection'>
        <p>
          <a href='./users.json' target={'_blank'}>
            {' '}
            Click here to see users
          </a>
        </p>
        <Link to={'/'}>Go Home</Link>
        <h1>Sign In</h1>
        <form>
          <label htmlFor='username'>User email</label>
          <input
            type='text'
            id='email'
            autoComplete='off'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </form>
        <button type='submit' onClick={handleSubmit}>
          Login
        </button>
      </section>
    </div>
  );
}
