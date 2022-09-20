import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import SignUp from '../SignUp/SignUp'
import './Header.css'

const Header = () => {
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
    console.log(open)
    return (
        <div className="container">
            <div className="header">
                <div className="social">
                    <ul className="social_links">
                        <li className="list_item">
                            <a href="">
                                <i
                                    className="fa fa-facebook-official"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i
                                    className="fa fa-instagram"
                                    aria-hidden="true"
                                ></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i className="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <i
                                    className="fa fa-youtube-play"
                                    aria-hidden="true"
                                ></i>
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
                </div>
            </div>
            <nav className="nav">
                <ul className="nav_links">
                    <li className="nav_link nav_link_first">
                        <a href="#">HOME</a>
                    </li>
                    <li className="nav_link">
                        <a href="#">STARSHIPS</a>
                    </li>
                    <li className="nav_link">
                        <a href="#">ACTORS</a>
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
