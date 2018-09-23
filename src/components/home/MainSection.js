import React from 'react';
import {Link} from 'react-router';

class MainSection extends React.Component {
  render() {
    return(
          <div>
              <div className="container-fluid padding">
                <div className="row welcome text-center">
                  <div className="col-12">
                    <h1 className="display-4">Our Sub Domains</h1>
                  </div>
                  <hr></hr>
                  <div className="col-12">
                    <p className="lead">Some description about our domain. Some description about our domain. Some description about our domain. Some description about our domain.
                    </p>
                  </div>
                </div>
              </div>

              <div className="container-fluid padding">
                  <div className="row text-center padding">
                      <div className="col-xs-12 col-sm-6 col-md-4">
                        <i className="fas fa-code"></i>
                        <h3>CRM</h3>
                        <p>Customer Relationship Management</p>
                      </div>
                      <div className="col-xs-12 col-sm-6 col-md-4">
                        <i className="fas fa-bold"></i>
                        <h3>GCM</h3>
                        <p>Group Customer Master</p>
                      </div>
                      <div className="col-sm-12 col-md-4">
                        <i className="fab fa-css3"></i>
                        <h3>DE</h3>
                        <p>Decision & Eligibility</p>
                      </div>
                      <hr className="my-4"></hr>
                  </div>
              </div>

              <div className="container-fluid padding">
                  <div className="row padding">
                    <div className="col-md-12 col-lg-6">
                      <h2>CRM...</h2>
                      <p>Few lines for CRM goes here. Few lines for CRM goes here. Few lines for CRM goes here. Few lines for CRM goes here. Few lines for CRM goes here. Few lines for CRM goes here.</p>
                      <p>Some more here. Some more here. Some more here. Some more here. Some more here. Some more here.
                      </p>
                      <p>End with some more description
                      </p>
                      <a href="#" className="btn btn-primary">Learn More about CRM</a>
                      <br></br>
                      <br></br>
                      <br></br>
                      <h2>GCM...</h2>
                      <p>Few lines for GCM goes here. Few lines for GCM goes here. Few lines for GCM goes here. Few lines for GCM goes here. Few lines for GCM goes here. Few lines for GCM goes here.</p>
                      <p>Some more here. Some more here. Some more here. Some more here. Some more here. Some more here.
                      </p>
                      <p>End with some more description
                      </p>
                      <a href="#" className="btn btn-primary">Learn More about GCM</a>
                      <br></br>
                      <br></br>
                      <br></br>
                      <h2>DE...</h2>
                      <p>Few lines for DE goes here. Few lines for DE goes here. Few lines for DE goes here. Few lines for DE goes here. Few lines for DE goes here. Few lines for DE goes here.</p>
                      <p>Some more here. Some more here. Some more here. Some more here. Some more here. Some more here.
                      </p>
                      <p>End with some more description
                      </p>
                      <a href="#" className="btn btn-primary">Learn More about DE</a>
                    </div>
                    <div className="col-lg-6">
                      <img src={require('./img/desk.png')} className="img-fluid"></img>
                    </div>
                  </div>
              </div>
            <hr className="my-4"></hr>
          </div>
        );
      }
  }

export default MainSection;
