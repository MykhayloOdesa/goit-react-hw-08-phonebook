import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <p>
        Welcome to the Phonebook!
        <br />
        To continue please login or register!
      </p>

      <div>
        <Link to="authentication/login">Login</Link>

        <Link to="authentication/register">Register</Link>
      </div>
    </>
  );
}
