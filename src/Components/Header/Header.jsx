import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='container'>
            <div className='header'>
            <div className="social">
                    <ul className='social_links'>
                        <li className='list_item'>
                            <a href="">
                               <i class="fa fa-facebook-official" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                               <i class="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                               <i class="fa fa-twitter" aria-hidden="true"></i>
                            </a>
                        </li>
                        <li>
                            <a href="">
                               <i class="fa fa-youtube-play" aria-hidden="true"></i>
                            </a>
                        </li>
                    </ul>
                <div className="social_kids"></div>
                <span className='social_kids_span'>kids</span>
                </div>
            <div>
                <a href="#">
                    <img className='social_logo' src="https://star-wars-clone.netlify.app/static/media/logo.2b5a7673250e185ab7e9.jpg" alt="" />
                </a>
            </div>
            <div>
                <div>
                    <form  className='search_form' action="">
                      <input type="text" placeholder='Search Star Wars' className='search_input' />
                      <button className='search_button'>
                        <i class="fa fa-search" aria-hidden="true"></i>
                      </button>
                </form>
                </div>
                <div className="button_group">
                    <button type='submit' className='login_button'>LOG IN</button>
                    <button type='submit' className='login_button'>SIGN UP</button>
                </div>
            </div>
            </div>
            <nav className='nav'>
                <ul className='nav_links'>
                    <li className='nav_link nav_link_first'>
                        <a href="#">HOME</a>
                    </li>
                    <li className='nav_link'>
                        <a href="#">STARSHIPS</a>
                    </li>
                    <li className='nav_link'>
                        <a href="#">ACTORS</a>
                    </li>
                </ul>
                
            </nav>
        </div>
    );
};

export default Header;