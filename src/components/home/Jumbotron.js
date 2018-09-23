import React from 'react';
import {Link} from 'react-router';

class Jumbotron extends React.Component {
  render() {
    return(
      <div id="jumbotron" className="container-fluid">
        <div id="jumbotronrow" className="row jumbotron">
            <div className="col-xs-12 col-sm-12 col-md-9 col-lg-9 col-xl-10">
              <p className="lead">This C&E platform/space would give you a good brief of who we are, what we do, how to engage/connect with us, Know our Team and get useful updates.</p>
              <p className="lead">Press the LIKE Button if you like our new UI, this will encourage us to keep innovating for our Employees and Customers</p>
            </div>
            <div id="jumbotronrow1" className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-2">
              <a href="#">
              <button type="button" className="btn btn-outline-secondary btn-lg">Press, if you LIKE our new UI?</button>
              </a>
            </div>
        </div>
      </div>
        );
      }
    }

export default Jumbotron;
