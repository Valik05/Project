import React, { useState } from 'react'
import logo from '../../images/starwars.png'
import PropTypes from 'prop-types'
import './SignUp.css'
import { useDispatch } from 'react-redux'
import { loginUser } from '../../actions/actions'

const SignUp = ({ setOpen, logIn }) => {
  const [showPass, setShowPass] = useState(false)
  const [value, setValue] = useState()
  const dispatch = useDispatch()


  const handleChange = (event) => {
    const name = event.target.name
    const value = event.target.value
    setValue((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }
  const createAccount = (e) => {
    e.preventDefault()
    if (!logIn) {
      localStorage.setItem('user', JSON.stringify(value))
    }
    const { email, password } = JSON.parse(localStorage.getItem('user'))
    if (email === value.email && password === value.password) {
      dispatch(loginUser({ email, password }))
      setTimeout(() => {
           setOpen((prevState) => ({ ...prevState, isOpen: false }))
      }, 1000)
     
    }
  }

  return (
    <div className="modal">
      <div className="modal_container">
        <img src={logo} alt="" />
        <h2 className="modal_title">
          {logIn ? 'SIGN IN' : 'create your account'}
        </h2>
        <form onSubmit={createAccount} action="#" className="modal_form">
          {logIn ? (
            <div className="modal_form_input">
              <input
                className="input"
                type="text"
                name="email"
                id="email"
                placeholder="Username or Email Address"
                onChange={handleChange}
              />
              <input
                className="input"
                type={showPass ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                id="myPassword"
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className="modal_form_input">
              <input
                className="input"
                type="text"
                placeholder="First Name"
                name="name"
                onChange={handleChange}
              />
              <input
                className="input"
                type="text"
                placeholder="Last Name"
                name="lastName"
                onChange={handleChange}
              />
              <input
                className="input"
                type="email"
                name="email"
                placeholder="Email Address"
                onChange={handleChange}
              />
              <input
                className="input"
                type="text"
                placeholder="Display Name"
                name="displayName"
                onChange={handleChange}
              />
              <input
                className="input"
                type={showPass ? 'text' : 'password'}
                placeholder="Password"
                id="myPassword"
                name="password"
                onChange={handleChange}
              />
            </div>
          )}
          <div className="form_show">
            <input
              type="checkbox"
              name="show"
              id="show"
              className="form_checkbox"
              onClick={() => setShowPass((prevState) => !prevState)}
            />
            <label htmlFor="show">Show password</label>
          </div>
          {logIn ? (
            <button
              type="submit"
              className="form_submit"
              aria-label="create account"
            >
              Sign In
            </button>
          ) : (
            <button
              type="submit"
              className="form_submit"
              aria-label="create account"
            >
              Create Account
            </button>
          )}
          {logIn ? (
            <button
              type="submit"
              className="form_submit_logIn"
              aria-label="create account"
            >
              Create Account
            </button>
          ) : null}
          <div>
            {!logIn ? (
              <p className="form_footer">
                Already have an account?
                <a href="#" className="form_footer_signin">
                  {' '}
                  Sign In
                </a>
              </p>
            ) : null}
          </div>
        </form>
        <button
          onClick={() =>
            setOpen((prevState) => ({ ...prevState, isOpen: false }))
          }
          type="button"
          className="modal_close"
        >
          <i className="fa fa-close"></i>
        </button>
      </div>
    </div>
  )
}

SignUp.propTypes = {
  setOpen: PropTypes.func,
  logIn: PropTypes.bool,
}

SignUp.defaultProps = {
  setOpen: () => {},
  login: true,
}

export default SignUp
