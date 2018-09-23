import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
  render() {
    return(
      <div>
          <footer>
              <div className="container-fluid padding">
                  <div className="row text-center padding">
                    <div className="col-md-4">
                      <hr className="light"></hr>
                      <h5>CRM - On Call details</h5>
                      <p>abcdefgh@stgeorge.com.au.com</p>
                      <p>1800000001</p>
                      <p>qwerty@westpac.com.au.com</p>
                      <p>1800000002</p>
                    </div>
                    <div className="col-md-4">
                      <hr className="light"></hr>
                      <h5>GCM - On Call details</h5>
                      <p>abcdefgh@stgeorge.com.au.com</p>
                      <p>1800000001</p>
                      <p>qwerty@westpac.com.au.com</p>
                      <p>1800000002</p>
                    </div>
                    <div className="col-md-4">
                      <hr className="light"></hr>
                      <h5>DE - On Call details</h5>
                      <p>abcdefgh@stgeorge.com.au.com</p>
                      <p>1800000001</p>
                      <p>qwerty@westpac.com.au.com</p>
                      <p>1800000002</p>
                    </div>
                    <div className="col-12">
                      <hr className="light-100"></hr>
                      <h5>&copy; C&E@westpac.com.au</h5>
                    </div>
                  </div>
              </div>
          </footer>
      </div>
      );
    }
  }

export default Footer;
