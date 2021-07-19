import React from 'react';
import {useHistory} from 'react-router-dom';

/**
 *
 * @return {Login}
 */
function Login() {
  const [user, setUser] = React.useState({email: '', password: ''});
  const history = useHistory();

  const handleInput = (event) => {
    const {value, name}= event.target;
    const u = user;
    u[name] = value;
    setUser(u);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('/authenticate', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((res) => {
      if (!res.ok) {
        throw res;
      }
      return res.json();
    })
    .then((json) => {
      localStorage.setItem('user', JSON.stringify(json));
      history.push('/');
    })
    .catch((err) => {
      console.log(err);
      alert('Error logging in, please try again');
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 id='welcome'>Slack</h2>
      <input
        type="email"
        name="email"
        placeholder="EMail"
        onChange={handleInput}
        required
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleInput}
        required
      />
      <input type="submit" value="Submit"/>
    </form>
  );
}

export default Login;
