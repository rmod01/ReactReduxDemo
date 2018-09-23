import React from 'react';
import {Link} from 'react-router';

class ConnectSection extends React.Component {
  render() {
    return(
          <div>
              <div className="container-fluid padding">
              <div className="row text-center padding">
                <div className="col-12">
                  <h2>Engagement/Connect Forms</h2>
                </div>
                <div className="col-12 social">
                  <p>Click the below blue icon and fill the respective sub domain form to get in touch with us and avail our Portfolio services</p>
                  <a href="#"><i className="fa fa-certificate"></i></a>
                </div>
              </div>
              </div>
          </div>
        );
      }
  }

export default ConnectSection;
