import React, {PropTypes} from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return(
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light sticky-top">
          <div id="logo" className="container-fluid">
          		<a className="navbar-brand" href="#">
                <img src={require('./img/logo.png')} ></img>
              </a>
          		<button className="navbar-toggler" type="button" data-toggle ="collapse"
          			data-target ="#navbarResponsive">
          			<span className="navbar-toggler-icon"></span>
          		</button>
          		<div className="collapse navbar-collapse" id="navbarResponsive">
          			<ul className="navbar-nav ml-auto">
          				<li className="nav-item active">
                    <IndexLink to="/" className="nav-link">Home</IndexLink>
          				</li>
          				<li className="nav-item">
                  <Link to="/about" className="nav-link">About</Link>
          				</li>
          				<li className="nav-item">
                  <Link to="/teammembers" className="nav-link">Team</Link>
          				</li>
          				<li className="nav-item">
          					<a className="nav-link" href="#">Team</a>
          				</li>
          				<li className="nav-item">
          					<a className="nav-link" href="#">Connect</a>
          				</li>
                </ul>
          		</div>
          </div>
      </nav>
    </div>
  );
};

export default Header;
