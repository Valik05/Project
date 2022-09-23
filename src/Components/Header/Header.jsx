import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOut } from '../../actions/actions'
import Modal from '../Modal/Modal'
import SignUp from '../SignUp/SignUp'
import './Header.css'

const Header = () => {
    const [logout, setLogOut] = useState(false)
    const [open, setOpen] = useState({
        type: '',
        isOpen: false,
    })
    const handleClick = (type) => {
        setOpen((prevState) => ({
            ...prevState,
            type: type,
            isOpen: true,
        }))
  }
  const dispatch = useDispatch()
  const deleteUser = () => {
    setLogOut(true)
    dispatch(logOut(logout))
    
   }
  const user = useSelector(state => state.user)
  
    return (
      <div className="container">
        <div className="header">
          <div className="social">
            <ul className="social_links">
              <li >
                <a href="">
                  <i className="fa fa-facebook-official" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-instagram" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-twitter" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-youtube-play" aria-hidden="true"></i>
                </a>
              </li>
            </ul>
            <div className="social_kids"></div>
            <span className="social_kids_span">kids</span>
          </div>
          <div>
            <a href="#">
              <img
                className="social_logo"
                src="https://star-wars-clone.netlify.app/static/media/logo.2b5a7673250e185ab7e9.jpg"
                alt=""
              />
            </a>
            {logout ? <div>logout</div> : null}
          </div>
          <div>
            <div>
              <form className="search_form" action="">
                <input
                  type="text"
                  placeholder="Search Star Wars"
                  className="search_input"
                />
                <button className="search_button">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
            <div className="button_group">
              {user ? (
                <div>
                  <span style={{ color: 'white' }}>{user.email}</span>
                  <button type='button' className='login_button logout' onClick={deleteUser}> LogOut</button>
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => handleClick('logIn')}
                    type="submit"
                    className="login_button"
                  >
                    LOG IN
                  </button>
                  <button
                    onClick={() => handleClick('signUp')}
                    type="submit"
                    className="login_button"
                  >
                    SIGN UP
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <nav className="nav">
          <ul className="nav_links">
            <li className="nav_link nav_link_first">
              <Link to="/main">HOME</Link>
            </li>
            <li className="nav_link">
              <Link to="/starships">STARSHIPS</Link>
            </li>
            <li className="nav_link">
              <Link to="/actors">ACTORS</Link>
            </li>
          </ul>
        </nav>
        <Modal open={open.isOpen}>
          {open.type === 'signUp' && <SignUp setOpen={setOpen} />}
          {open.type === 'logIn' && <SignUp setOpen={setOpen} logIn />}
        </Modal>
      </div>
    )
}

export default Header
