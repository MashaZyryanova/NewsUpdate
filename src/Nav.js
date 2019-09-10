import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.jpg';

class Nav extends React.Component{
    
    render(){
        
        return (
            <div className="Navigation">
                 <Link style={{ textDecoration: 'none' }} to="/logo">
                     <div className="leftNav">
                        <img className="logoImage" src={logo}/>
                        <div className="logo"> 
                            <div className="logo-text">
                                News Update
                            </div>
                        </div>
                    </div>
                </Link >
                
                <ul className = "nav-links">
                    <Link to="/">
                        <li><h2>Top Stories</h2></li>
                    </Link>
                    <Link  to="/my-bookmarks">
                        <li><h2>My Bookmarks</h2></li>
                    </Link>
                    
                </ul>
            </div>
        );
    };
}

export default Nav;