import React from 'react'
import logo from '../../images/starwars.png'
import PropTypes from 'prop-types'
import './SignUp.css'

const SignUp = ({ setOpen, logIn }) => {
  const hideShowPass = () => {
    const myPassword = document.getElementById('myPassword')
    if (myPassword.type === 'password') {
      myPassword.type = 'text'
    } else {
      myPassword.type = 'password'
    }
  }
  return (
    <div className="modal">
      <div className="modal_container">
        <img src={logo} alt="" />
        <h2 className="modal_title">
          {logIn ? 'SIGN IN' : 'create your account'}
        </h2>
        <form action="#" className="modal_form">
          <input type="text" placeholder="First Name" />
          <input type="text" placeholder="Last Name" />
          <input type="email" placeholder="Email Address" />
          <input type="text" placeholder="Display Name" />
          <input type="text" placeholder="First Name" />
          <input type="password" placeholder="Password" id="myPassword" />
          <div className="form_show">
            <input
              type="checkbox"
              name="show"
              id="show"
              className="form_checkbox"
              onClick={hideShowPass}
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
              {' '}
              Create Account
            </button>
          ) : null}
          <div>
            {logIn ? (
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
