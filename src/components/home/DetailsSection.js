import React from 'react';
import {Link} from 'react-router';

class DetailsSection extends React.Component {
  render() {
    return(
          <div>
              <div className="container-fluid padding">
                <div className="row padding">
                  <div className="col-lg-6">
                    <h2>Our Aspirations</h2>
                    <br></br>
                    <br></br>
                    <p>Great things happen when we work together—from teaching and sharing knowledge to building better solutions for our customers. Great things happen when we work together—from teaching and sharing knowledge to building better solutions for our customers.</p>
                    <p>Great things happen when we work together—from teaching and sharing knowledge to building better solutions for our customers. Great things happen when we work together—from teaching and sharing knowledge to building better solutions for our customers.</p>
                    <p>Great things happen when we work together—from teaching and sharing knowledge to building better solutions for our customers. Great things happen when we work together—from teaching and sharing knowledge to building better solutions for our customers.</p>
                    <p>Great things happen when we work together—from teaching and sharing knowledge to building better solutions for our customers. Great things happen when we work together—from teaching and sharing knowledge to building better solutions for our customers.</p>
                    <p>Great things happen when we work together—from teaching and sharing knowledge to building better solutions for our customers. Great things happen when we work together—from teaching and sharing knowledge to building better solutions for our customers.</p>
                    <p>Great things happen when we work together—from teaching and sharing knowledge to building better solutions for our customers. Great things happen when we work together—from teaching and sharing knowledge to building better solutions for our customers.</p>
                    <p>Great things happen when we work together—from teaching and sharing knowledge to building better solutions for our customers. Great things happen when we work together—from teaching and sharing knowledge to building better solutions for our customers.</p>
                    <br></br>
                  </div>
                  <div className="col-lg-6">
                    <img src={require('./img/bootstrap2.png')} className="img-fluid"></img>
                  </div>
                </div>
                <hr className="my-4"></hr>
              </div>
          </div>
        );
      }
  }

export default DetailsSection;
