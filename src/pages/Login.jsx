import { useState } from 'react'

const Login = () => {
  const [formState, setFormState] = useState({
    email: '',
    password: ''
  })

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value })
  }

  const handleLogin = () => {
    console.log('login')
  }

  return (
    <div>
      <h3>Sign In</h3>
      <form onSubmit={handleLogin}>
        <div>
          <input
            id="loginEmail"
            placeholder="email"
            name="email"
            type="email"
            autoComplete="email"
            onChange={handleChange}
            required
          ></input>
          <label htmlFor="email">email address</label>
        </div>
        <div>
          <input
            id="loginPassword"
            placeholder="password"
            name="password"
            type="password"
            autoComplete="current-password"
            onChange={handleChange}
            required
          ></input>
          <label htmlFor="password">password</label>
        </div>
        <br />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default Login
