import React from 'react';
import {Link} from 'react-router';

class Carousel extends React.Component {
  render() {
    return(
          <div id="slides" className="carousel slide" data-ride="carousel">
            <ul className="carousel-indicators">
              <li data-target="#slides" data-slide-to="0" className="active"></li>
              <li data-target="#slides" data-slide-to="1"></li>
              <li data-target="#slides" data-slide-to="2"></li>
            </ul>
            <div id="bgimages" className="carousel-inner">
              <div id="bgimages1" className="carousel-item active">
                <img src={require('./img/background.png')} ></img>
                <div className="carousel-caption">
                  <h1 className="display-2">Customer & Engineering</h1>
                  <h3>Proud of what we do</h3>
                  <button type="button" className="btn btn-outline-light btn-lg">OUR VISION</button>
                  <button type="button" className="btn btn-primary btn-lg">Recent Achievements</button>
                </div>
              </div>
              <div id="bgimages2" className="carousel-item">
                <img src={require('./img/background2.png')} ></img>
              </div>
              <div id="bgimages3" className="carousel-item">
                <img src={require('./img/background3.png')} ></img>
              </div>
            </div>
          </div>
        );
      }
    }

export default Carousel;
